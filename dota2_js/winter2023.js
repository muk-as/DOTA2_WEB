// 64915.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [64915],
    {
      64915: (D, O, m) => {
        "use strict";
        m.r(O), m.d(O, { default: () => T });
        var e = m(69500),
          n = m(2095),
          b = m(84485),
          a = m(8305),
          R = m(3878),
          f = m(7552),
          W = m(73202),
          l = m(15001),
          U = m(45488),
          G = m(63177),
          B = m(42616),
          F = m(63279),
          s = m.n(F),
          S = m(84899),
          _ = m(32389),
          I = m(71010),
          q = m(85286),
          V = m.n(q),
          z = Object.defineProperty,
          K = Object.getOwnPropertyDescriptor,
          Y = (t, u, r, i) => {
            for (
              var N = i > 1 ? void 0 : i ? K(u, r) : u, o = t.length - 1, h;
              o >= 0;
              o--
            )
              (h = t[o]) && (N = (i ? h(u, r, N) : h(N)) || N);
            return i && N && z(u, r, N), N;
          };
        const k = "Winter2023Page",
          p = (t) =>
            (0, e.jsxs)("div", {
              className: s().Text,
              children: [
                (0, e.jsxs)("div", {
                  className: s().HeaderContainer,
                  children: [
                    t.icon &&
                      (0, e.jsx)("div", {
                        className: s().Icon,
                        children: (0, e.jsx)("img", {
                          src: `${n.r.IMG_URL}/` + t.icon,
                        }),
                      }),
                    (0, e.jsx)("div", {
                      className: s().Headline,
                      children: (0, a.Wn)(t.title),
                    }),
                  ],
                }),
                t.description &&
                  (0, e.jsx)("div", {
                    className: s().Description,
                    children: (0, a.Wn)(t.description),
                  }),
                t.contents &&
                  (0, e.jsx)("div", {
                    className: s().Description,
                    children: t.contents,
                  }),
              ],
            }),
          j = (t) => {
            const u = (0, f.useRef)(void 0);
            return (0, e.jsxs)("div", {
              className: (0, l.A)(
                s().SmallFeatureCapsule,
                t.horizontal ? s().Horizontal : null,
              ),
              "data-aos": "fade-up",
              "data-aos-delay": "100",
              "data-aos-duration": "1000",
              children: [
                t.image &&
                  (0, e.jsx)("img", {
                    className: s().Image,
                    src: `${n.r.IMG_URL}/` + t.image,
                  }),
                t.video &&
                  (0, e.jsx)("video", {
                    ref: u,
                    className: s().Image,
                    muted: !0,
                    autoPlay: !0,
                    preload: "auto",
                    loop: !0,
                    playsInline: !0,
                    poster: `${n.r.IMG_URL}/winter2023/${t.video}.jpg`,
                    children: (0, e.jsx)("source", {
                      type: "video/webm",
                      src: `${n.r.VIDEO_URL}/winter2023/${t.video}.webm`,
                    }),
                  }),
                (0, e.jsx)(p, {
                  title: t.title,
                  description: t.description,
                  contents: t.contents,
                }),
              ],
            });
          },
          Z = (t) => {
            if (!t.special.heading_loc) return null;
            let u = t.special.values_float.map((N, o) =>
                (0, e.jsx)(
                  "span",
                  { className: s().SingleValue, children: (0, I.F)(N) },
                  o,
                ),
              ),
              r = !1,
              i = null;
            return (
              t.special.heading_loc[0] == "+"
                ? ((i = t.special.heading_loc.slice(1)), (r = !0))
                : (i = t.special.heading_loc),
              i[0] == "$" && (i = "#dota_ability_variable_" + i.slice(1)),
              r
                ? (0, e.jsxs)("div", {
                    className: s().Stat,
                    children: ["+ ", u, " ", (0, a.Wn)(i)],
                  })
                : (0, e.jsxs)("div", {
                    className: s().Stat,
                    children: [(0, a.Wn)(i), " ", u],
                  })
            );
          },
          c = (0, R.PA)(({ name: t, components: u, recipeCost: r }) => {
            const N = b.B5.Get()
                .getItemList()
                ?.itemabilities.find((d) => d.name == t),
              o = b.B5.Get().getItemData(N?.id);
            if (!o) return null;
            let h = o.desc_loc;
            o.special_values.forEach((d) => {
              let x =
                d.values_float.length > 0 ? (0, I.F)(d.values_float[0]) : "0";
              (h = h.replace("%" + d.name + "%", x)),
                (h = h.replace("%" + d.name.toLowerCase() + "%", x));
            }),
              (h = h.replace(/\%\%/g, "%"));
            let g = o.special_values?.map((d, x) =>
                (0, e.jsx)(Z, { special: d }, x),
              ),
              L = o.name.replace("item_", ""),
              C = o.item_cost,
              P =
                o.item_neutral_tier >= 0 && o.item_neutral_tier < 5
                  ? o.item_neutral_tier + 1
                  : -1,
              $ = s()["Tier" + P],
              E = o.cooldowns.reduce((d, x) => d + x) > 0,
              M = o.mana_costs.reduce((d, x) => d + x) > 0,
              A =
                o.health_costs && o.health_costs.length > 0
                  ? o.health_costs.reduce((d, x) => d + x) > 0
                  : !1,
              H = u
                ? u.map((d, x) =>
                    (0, e.jsx)(
                      "img",
                      {
                        className: s().RecipeComponentImage,
                        src: `${n.r.IMG_URL}/items/${d}.png`,
                      },
                      x,
                    ),
                  )
                : [];
            return (0, e.jsxs)("div", {
              className: s().GameItemDetails,
              children: [
                (0, e.jsxs)("div", {
                  className: s().Header,
                  children: [
                    (0, e.jsx)("img", {
                      className: s().ItemImage,
                      src: `${n.r.IMG_URL}/items/${L}.png`,
                    }),
                    (0, e.jsxs)("div", {
                      className: s().HeaderText,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().ItemName,
                          children: o.name_loc,
                        }),
                        C > 0 &&
                          (0, e.jsxs)("div", {
                            className: s().GoldPrice,
                            children: [
                              (0, e.jsx)("img", {
                                className: s().GoldIcon,
                                src: `${n.r.IMG_URL}/icons/gold.png`,
                              }),
                              C,
                            ],
                          }),
                        P > 0 &&
                          (0, e.jsx)("div", {
                            className: (0, l.A)(s().NeutralItemTier, $),
                            children: (0, a.Wn)("#neutral_item_tier", P),
                          }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: s().Body,
                  children: [
                    (0, e.jsx)("div", { className: s().Stats, children: g }),
                    h &&
                      (0, e.jsxs)("div", {
                        className: s().DescriptionContainer,
                        children: [
                          (0, e.jsx)("div", {
                            className: s().Description,
                            dangerouslySetInnerHTML: { __html: h },
                          }),
                          (E || M || A) &&
                            (0, e.jsxs)("div", {
                              className: (0, l.A)(s().DescriptionHeader),
                              children: [
                                M &&
                                  (0, e.jsxs)("div", {
                                    className: s().ManaContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: s().ManaIcon,
                                      }),
                                      (0, e.jsx)("div", {
                                        className: s().ManaText,
                                        children: o.mana_costs.map(
                                          (d, x) =>
                                            (x > 0 ? " / " : "") + (0, I.F)(d),
                                        ),
                                      }),
                                    ],
                                  }),
                                A &&
                                  (0, e.jsxs)("div", {
                                    className: s().HealthContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: s().HealthIcon,
                                      }),
                                      (0, e.jsx)("div", {
                                        className: s().HealthText,
                                        children: o.health_costs.map(
                                          (d, x) =>
                                            (x > 0 ? " / " : "") + (0, I.F)(d),
                                        ),
                                      }),
                                    ],
                                  }),
                                E &&
                                  (0, e.jsxs)("div", {
                                    className: s().CooldownContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: s().CooldownIcon,
                                        style: {
                                          backgroundImage: `url( ${n.r.IMG_URL}icons/cooldown.png )`,
                                        },
                                      }),
                                      (0, e.jsx)("div", {
                                        className: s().CooldownText,
                                        children: o.cooldowns.map(
                                          (d, x) =>
                                            (x > 0 ? " / " : "") + (0, I.F)(d),
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
                H.length > 0 &&
                  (0, e.jsxs)("div", {
                    className: s().Recipe,
                    children: [
                      (0, e.jsxs)("div", {
                        className: s().RecipeLabel,
                        children: [" ", (0, a.Wn)("#winter2023_recipe"), " "],
                      }),
                      H,
                      r &&
                        r > 0 &&
                        (0, e.jsxs)("div", {
                          className: s().RecipeCost,
                          children: [" + ", r, " "],
                        }),
                      r &&
                        r > 0 &&
                        (0, e.jsx)("img", {
                          className: s().RecipeComponentImage,
                          src: `${n.r.IMG_URL}/items/recipe.png`,
                        }),
                    ],
                  }),
              ],
            });
          }),
          v = ({
            index: t,
            video: u,
            name: r,
            heroname: i,
            autoplay: N,
            onSlideIn: o,
          }) => {
            const h = (0, f.useContext)(_.Yc),
              g = (0, f.useRef)(void 0),
              L =
                navigator.userAgent.toLowerCase().indexOf("safari") != -1 &&
                navigator.userAgent.toLowerCase().indexOf("macintosh") != -1;
            return (
              (0, f.useEffect)(() => {
                function C() {
                  g && g.current && h.state.currentSlide == t
                    ? g.current.play()
                    : g && g.current && g.current.pause(),
                    h.state.currentSlide == t && o(r, i);
                }
                return h.subscribe(C), () => h.unsubscribe(C);
              }, [h, t, r, i, o]),
              (0, e.jsx)("div", {
                className: s().SlideContainer,
                children: L
                  ? (0, e.jsx)("img", {
                      className: s().TreasureVideo,
                      src: `${n.r.VIDEO_URL}/winter2023/treasure/${u}.png`,
                    })
                  : (0, e.jsx)("video", {
                      ref: g,
                      className: s().TreasureVideo,
                      muted: !0,
                      autoPlay: N,
                      preload: "auto",
                      loop: !0,
                      playsInline: !0,
                      poster: `${n.r.VIDEO_URL}/winter2023/treasure/${u}.png`,
                      children: (0, e.jsx)("source", {
                        type: "video/webm",
                        src: `${n.r.VIDEO_URL}/winter2023/treasure/${u}.webm`,
                      }),
                    }),
              })
            );
          },
          y = (t) =>
            (0, e.jsxs)("div", {
              className: t
                ? (0, l.A)(s().SectionDivider, t)
                : (0, l.A)(s().SectionDivider),
              children: [
                (0, e.jsx)("div", { className: s().SectionDividerMiddle }),
                (0, e.jsx)("img", {
                  className: s().SectionDividerImage,
                  src: `${n.r.IMG_URL}/winter2023/snowflake_2.png`,
                }),
              ],
            }),
          w = () =>
            (0, e.jsxs)("div", {
              className: s().SubsectionDivider,
              children: [
                (0, e.jsx)("div", { className: s().SubsectionDividerBorder }),
                (0, e.jsx)("img", {
                  className: s().SubsectionDividerImage,
                  src: `${n.r.IMG_URL}/winter2023/snowflake_1.png`,
                }),
              ],
            });
        let T = class extends f.Component {
          bIsMacSafariBrowser =
            navigator.userAgent.toLowerCase().indexOf("safari") != -1 &&
            navigator.userAgent.toLowerCase().indexOf("macintosh") != -1;
          parallaxContainerRef = f.createRef();
          constructor(t) {
            super(t),
              (this.state = {
                treasureName: "#frosty_treasure_treasure_name_9",
                heroName: "#frosty_treasure_hero_name_9",
              });
          }
          handleScroll = (t) => {
            V().refresh();
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
          render() {
            const t = U.o.getPatchNotes("7.35", n.r.LANGUAGE);
            let u = "frostivus_2023_logo_en";
            return (
              n.r.LANGUAGE == "schinese" && (u = "frostivus_2023_logo_cn"),
              (0, e.jsxs)("div", {
                id: k,
                className: s().Winter2023Page,
                children: [
                  (0, e.jsx)(W.mg, {}),
                  (0, e.jsxs)("div", {
                    ref: this.parallaxContainerRef,
                    className: (0, l.A)(s().PageContainer, s().Parallax),
                    children: [
                      (0, e.jsx)(G.A, { bOverlapping: !0 }),
                      (0, e.jsx)("div", {
                        className: (0, l.A)(
                          s().PageBackground,
                          s().ParallaxLayer,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, l.A)(
                          s().PageForeground,
                          s().ParallaxLayer,
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, l.A)(s().HeaderSection),
                        children: [
                          (0, e.jsxs)("div", {
                            className: (0, l.A)(s().TitleContainer),
                            children: [
                              (0, e.jsx)("img", {
                                className: s().TitleImage,
                                src: `${n.r.IMG_URL}/winter2023/${u}.png`,
                              }),
                              this.bIsMacSafariBrowser
                                ? (0, e.jsx)("img", {
                                    className: s().TitleSnowImage,
                                    src: `${n.r.IMG_URL}/winter2023/frostivus_2023_header_snowfall.png`,
                                  })
                                : (0, e.jsx)("video", {
                                    className: s().TitleSnowVideo,
                                    muted: !0,
                                    autoPlay: !0,
                                    preload: "auto",
                                    loop: !0,
                                    playsInline: !0,
                                    poster: `${n.r.IMG_URL}/winter2023/frostivus_2023_header_snowfall.png`,
                                    children: (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${n.r.VIDEO_URL}/winter2023/snowflakes.webm`,
                                    }),
                                  }),
                            ],
                          }),
                          (0, e.jsx)("div", {
                            className: s().Subtitle,
                            children: (0, a.Wn)("#winter2023_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Paragraph,
                            children: (0, a.Wn)(
                              "#winter2023_section_introduction",
                            ),
                          }),
                        ],
                      }),
                      y(),
                      (0, e.jsx)("div", {
                        id: "MobileOnlySection",
                        className: (0, l.A)(
                          s().WebsiteSection,
                          s().MobileOnlySection,
                        ),
                        children: (0, e.jsx)("div", {
                          className: s().Paragraph,
                          children: (0, a.Wn)(
                            "#winter2023_section_introduction",
                          ),
                        }),
                      }),
                      y(s().MobileOnly),
                      (0, e.jsxs)("div", {
                        id: "Frostivus",
                        className: (0, l.A)(s().WebsiteSection, s().Frostivus),
                        children: [
                          (0, e.jsx)("h1", {
                            children: (0, a.Wn)(
                              "#winter2023_frostivus_section_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().DateText,
                            children: (0, a.Wn)(
                              "#winter2023_frostivus_section_date",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Introduction,
                            children: (0, a.Wn)(
                              "#winter2023_frostivus_section_introduction",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, l.A)(
                              s().FeatureRow,
                              s().TwoColumn,
                              s().TheEvent,
                            ),
                            children: [
                              (0, e.jsx)(j, {
                                horizontal: !0,
                                title: "#winter2023_frostivus_earn_chests",
                                description:
                                  "#winter2023_frostivus_how_to_earn_chests",
                                image: "winter2023/frostivus2023_chest.png",
                              }),
                              (0, e.jsx)(j, {
                                horizontal: !0,
                                title: "#winter2023_frostivus_buy_keys",
                                description:
                                  "#winter2023_frostivus_how_to_buy_keys",
                                image: "winter2023/frostivus2023_key.png",
                              }),
                            ],
                          }),
                          w(),
                          (0, e.jsx)("h2", {
                            children: (0, a.Wn)(
                              "#winter2023_frostivus_section_event_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Introduction,
                            children: (0, a.Wn)(
                              "#winter2023_frostivus_section_event_introduction",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().FrostivusTreasureSection,
                            children: (0, e.jsxs)(_.gi, {
                              className: s().TreasureCarousel,
                              naturalSlideWidth: 600,
                              naturalSlideHeight: 960,
                              totalSlides: 10,
                              currentSlide: 8,
                              infinite: !0,
                              touchEnabled: !0,
                              dragEnabled: !1,
                              children: [
                                (0, e.jsxs)(_.Ap, {
                                  className: s().TreasureSlider,
                                  children: [
                                    (0, e.jsx)(_.q7, {
                                      index: 0,
                                      className: s().TreasureSlide,
                                      innerClassName: s().TreasureInnerSlide,
                                      classNameHidden: s().TreasureSlideHidden,
                                      children: (0, e.jsx)(v, {
                                        index: 0,
                                        video: "set_ancientapparation",
                                        name: "#frosty_treasure_treasure_name_1",
                                        heroname:
                                          "#frosty_treasure_hero_name_1",
                                        autoplay: !1,
                                        onSlideIn: (r, i) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: i,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, e.jsx)(_.q7, {
                                      index: 1,
                                      className: s().TreasureSlide,
                                      innerClassName: s().TreasureInnerSlide,
                                      classNameHidden: s().TreasureSlideHidden,
                                      children: (0, e.jsx)(v, {
                                        index: 1,
                                        video: "set_snapfire",
                                        name: "#frosty_treasure_treasure_name_2",
                                        heroname:
                                          "#frosty_treasure_hero_name_2",
                                        autoplay: !1,
                                        onSlideIn: (r, i) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: i,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, e.jsx)(_.q7, {
                                      index: 2,
                                      className: s().TreasureSlide,
                                      innerClassName: s().TreasureInnerSlide,
                                      classNameHidden: s().TreasureSlideHidden,
                                      children: (0, e.jsx)(v, {
                                        index: 2,
                                        video: "set_alchemist",
                                        name: "#frosty_treasure_treasure_name_3",
                                        heroname:
                                          "#frosty_treasure_hero_name_3",
                                        autoplay: !1,
                                        onSlideIn: (r, i) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: i,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, e.jsx)(_.q7, {
                                      index: 3,
                                      className: s().TreasureSlide,
                                      innerClassName: s().TreasureInnerSlide,
                                      classNameHidden: s().TreasureSlideHidden,
                                      children: (0, e.jsx)(v, {
                                        index: 3,
                                        video: "set_arcwarden",
                                        name: "#frosty_treasure_treasure_name_4",
                                        heroname:
                                          "#frosty_treasure_hero_name_4",
                                        autoplay: !1,
                                        onSlideIn: (r, i) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: i,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, e.jsx)(_.q7, {
                                      index: 4,
                                      className: s().TreasureSlide,
                                      innerClassName: s().TreasureInnerSlide,
                                      classNameHidden: s().TreasureSlideHidden,
                                      children: (0, e.jsx)(v, {
                                        index: 4,
                                        video: "set_pudge",
                                        name: "#frosty_treasure_treasure_name_5",
                                        heroname:
                                          "#frosty_treasure_hero_name_5",
                                        autoplay: !1,
                                        onSlideIn: (r, i) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: i,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, e.jsx)(_.q7, {
                                      index: 5,
                                      className: s().TreasureSlide,
                                      innerClassName: s().TreasureInnerSlide,
                                      classNameHidden: s().TreasureSlideHidden,
                                      children: (0, e.jsx)(v, {
                                        index: 5,
                                        video: "set_tusk",
                                        name: "#frosty_treasure_treasure_name_6",
                                        heroname:
                                          "#frosty_treasure_hero_name_6",
                                        autoplay: !1,
                                        onSlideIn: (r, i) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: i,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, e.jsx)(_.q7, {
                                      index: 6,
                                      className: s().TreasureSlide,
                                      innerClassName: s().TreasureInnerSlide,
                                      classNameHidden: s().TreasureSlideHidden,
                                      children: (0, e.jsx)(v, {
                                        index: 6,
                                        video: "set_primalbeast",
                                        name: "#frosty_treasure_treasure_name_7",
                                        heroname:
                                          "#frosty_treasure_hero_name_7",
                                        autoplay: !1,
                                        onSlideIn: (r, i) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: i,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, e.jsx)(_.q7, {
                                      index: 7,
                                      className: s().TreasureSlide,
                                      innerClassName: s().TreasureInnerSlide,
                                      classNameHidden: s().TreasureSlideHidden,
                                      children: (0, e.jsx)(v, {
                                        index: 7,
                                        video: "set_crystalmaiden",
                                        name: "#frosty_treasure_treasure_name_8",
                                        heroname:
                                          "#frosty_treasure_hero_name_8",
                                        autoplay: !1,
                                        onSlideIn: (r, i) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: i,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, e.jsx)(_.q7, {
                                      index: 8,
                                      className: s().TreasureSlide,
                                      innerClassName: s().TreasureInnerSlide,
                                      classNameHidden: s().TreasureSlideHidden,
                                      children: (0, e.jsx)(v, {
                                        index: 8,
                                        video: "set_wraithking",
                                        name: "#frosty_treasure_treasure_name_9",
                                        heroname:
                                          "#frosty_treasure_hero_name_9",
                                        autoplay: !0,
                                        onSlideIn: (r, i) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: i,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, e.jsx)(_.q7, {
                                      index: 9,
                                      className: s().TreasureSlide,
                                      innerClassName: s().TreasureInnerSlide,
                                      classNameHidden: s().TreasureSlideHidden,
                                      children: (0, e.jsx)(v, {
                                        index: 9,
                                        video: "set_roshan",
                                        name: "#frosty_treasure_treasure_name_10",
                                        heroname:
                                          "#frosty_treasure_hero_name_10",
                                        autoplay: !1,
                                        onSlideIn: (r, i) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: i,
                                          });
                                        },
                                      }),
                                    }),
                                  ],
                                }),
                                (0, e.jsx)("div", {
                                  className: s().HeroName,
                                  children: (0, a.Wn)(this.state.heroName),
                                }),
                                (0, e.jsx)("div", {
                                  className: s().TreasureName,
                                  children: (0, a.Wn)(this.state.treasureName),
                                }),
                                (0, e.jsxs)("div", {
                                  className: s().CarouselDots,
                                  children: [
                                    (0, e.jsx)(_._X, {
                                      className: (0, l.A)(
                                        s().TreasurePaginationButton,
                                        s().Prev,
                                      ),
                                      children: (0, e.jsx)("div", {
                                        className: s().PrevArrow,
                                      }),
                                    }),
                                    (0, e.jsx)(_.cL, {
                                      className: s().TreasureSelector,
                                      slide: 0,
                                      children: (0, e.jsx)("div", {}),
                                    }),
                                    (0, e.jsx)(_.cL, {
                                      className: s().TreasureSelector,
                                      slide: 1,
                                      children: (0, e.jsx)("div", {}),
                                    }),
                                    (0, e.jsx)(_.cL, {
                                      className: s().TreasureSelector,
                                      slide: 2,
                                      children: (0, e.jsx)("div", {}),
                                    }),
                                    (0, e.jsx)(_.cL, {
                                      className: s().TreasureSelector,
                                      slide: 3,
                                      children: (0, e.jsx)("div", {}),
                                    }),
                                    (0, e.jsx)(_.cL, {
                                      className: s().TreasureSelector,
                                      slide: 4,
                                      children: (0, e.jsx)("div", {}),
                                    }),
                                    (0, e.jsx)(_.cL, {
                                      className: s().TreasureSelector,
                                      slide: 5,
                                      children: (0, e.jsx)("div", {}),
                                    }),
                                    (0, e.jsx)(_.cL, {
                                      className: s().TreasureSelector,
                                      slide: 6,
                                      children: (0, e.jsx)("div", {}),
                                    }),
                                    (0, e.jsx)(_.cL, {
                                      className: s().TreasureSelector,
                                      slide: 7,
                                      children: (0, e.jsx)("div", {}),
                                    }),
                                    (0, e.jsx)(_.cL, {
                                      className: s().TreasureSelector,
                                      slide: 8,
                                      children: (0, e.jsx)("div", {}),
                                    }),
                                    (0, e.jsx)(_.cL, {
                                      className: s().TreasureSelector,
                                      slide: 9,
                                      children: (0, e.jsx)("div", {}),
                                    }),
                                    (0, e.jsx)(_.CC, {
                                      className: (0, l.A)(
                                        s().TreasurePaginationButton,
                                        s().Next,
                                      ),
                                      children: (0, e.jsx)("div", {
                                        className: s().NextArrow,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            className: s().BonusItem,
                            children: [
                              (0, e.jsx)(p, {
                                title: "#winter2023_bonus_item_title",
                                description: "#winter2023_bonus_item_desc",
                              }),
                              (0, e.jsxs)("div", {
                                className: s().BonusItemVisualContainer,
                                children: [
                                  (0, e.jsxs)("div", {
                                    className: s().VisualContainer,
                                    children: [
                                      this.bIsMacSafariBrowser
                                        ? (0, e.jsx)("img", {
                                            className: s().BonusItemVideo,
                                            src: `${n.r.IMG_URL}/winter2023/fullset_example.png`,
                                          })
                                        : (0, e.jsx)("video", {
                                            className: s().BonusItemVideo,
                                            muted: !0,
                                            autoPlay: !0,
                                            preload: "auto",
                                            loop: !0,
                                            playsInline: !0,
                                            poster: `${n.r.IMG_URL}/winter2023/fullset_example.png`,
                                            children: (0, e.jsx)("source", {
                                              type: "video/webm",
                                              src: `${n.r.VIDEO_URL}/winter2023/fullset_example.webm`,
                                            }),
                                          }),
                                      (0, e.jsx)("p", {
                                        className: s().Header,
                                        children: (0, a.Wn)(
                                          "#winter2023_bonus_item_fullset",
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: (0, l.A)(
                                      s().VisualContainer,
                                      s().Unusual,
                                    ),
                                    children: [
                                      this.bIsMacSafariBrowser
                                        ? (0, e.jsx)("img", {
                                            className: s().BonusItemVideo,
                                            src: `${n.r.IMG_URL}/winter2023/unusual_example.png`,
                                          })
                                        : (0, e.jsx)("video", {
                                            className: s().BonusItemVideo,
                                            muted: !0,
                                            autoPlay: !0,
                                            preload: "auto",
                                            loop: !0,
                                            playsInline: !0,
                                            poster: `${n.r.IMG_URL}/winter2023/unusual_example.png`,
                                            children: (0, e.jsx)("source", {
                                              type: "video/webm",
                                              src: `${n.r.VIDEO_URL}/winter2023/unusual_example.webm`,
                                            }),
                                          }),
                                      (0, e.jsx)("p", {
                                        className: s().Header,
                                        children: (0, a.Wn)(
                                          "#winter2023_bonus_item_unusual",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          w(),
                          (0, e.jsx)("h2", {
                            children: (0, a.Wn)(
                              "#winter2023_stocking_stuffer_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Introduction,
                            children: (0, a.Wn)(
                              "#winter2023_stocking_stuffer_desc",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, l.A)(
                              s().FeatureRow,
                              s().ThreeColumn,
                              s().StockingStuffers,
                            ),
                            children: [
                              (0, e.jsx)(j, {
                                title:
                                  "#winter2023_stocking_stuffer_sprays_stickers",
                                description:
                                  "#winter2023_stocking_stuffer_sprays_stickers_desc",
                                image: "winter2023/sprays.png",
                              }),
                              (0, e.jsx)(j, {
                                title: "#winter2023_stocking_stuffer_emoticons",
                                description:
                                  "#winter2023_stocking_stuffer_emoticons_desc",
                                image: "winter2023/emoticons.png",
                              }),
                              (0, e.jsx)(j, {
                                title: "#winter2023_stocking_stuffer_ward",
                                description:
                                  "#winter2023_stocking_stuffer_ward_desc",
                                image: "winter2023/ward.png",
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, l.A)(s().EventPopoutSection),
                            children: [
                              (0, e.jsx)("div", {
                                className: s().EventPopoutBorder,
                              }),
                              (0, e.jsx)("h4", {
                                children: (0, a.Wn)(
                                  "#winter2023_naughty_or_nice_section_title",
                                ),
                              }),
                              (0, e.jsxs)("div", {
                                className: (0, l.A)(s().NaughtyOrNice),
                                children: [
                                  (0, e.jsxs)("div", {
                                    className: s().NaughtyOrNiceSection,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className:
                                          s().NaughtyOrNiceImageContainer,
                                      }),
                                      (0, e.jsx)(p, {
                                        title:
                                          "#winter2023_naughty_or_nice_naughty",
                                        description:
                                          "#winter2023_naughty_or_nice_naughty_desc",
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: s().NaughtOrNiceDivider,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className:
                                          s().NaughtOrNiceVerticalLineTop,
                                      }),
                                      (0, e.jsx)("img", {
                                        className: s().NaughtOrNiceSnowflake,
                                        src: `${n.r.IMG_URL}/winter2023/snowflake_2_gold.png`,
                                      }),
                                      (0, e.jsx)("div", {
                                        className:
                                          s().NaughtOrNiceVerticalLineBottom,
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: s().NaughtyOrNiceSection,
                                    children: [
                                      (0, e.jsx)(p, {
                                        title:
                                          "#winter2023_naughty_or_nice_nice",
                                        description:
                                          "#winter2023_naughty_or_nice_nice_desc",
                                      }),
                                      (0, e.jsx)("div", {
                                        className:
                                          s().NaughtyOrNiceImageContainer,
                                        children: (0, e.jsx)("img", {
                                          src: `${n.r.IMG_URL}/winter2023/frostivus_2023_gift_nice.png`,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, e.jsx)("div", {
                                className: s().EventPopoutBorder,
                              }),
                            ],
                          }),
                          (0, e.jsx)("h2", {
                            children: (0, a.Wn)(
                              "#winter2023_frostivus_festive_items_title",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, l.A)(
                              s().FeatureRow,
                              s().ThreeColumn,
                              s().FestiveItems,
                            ),
                            children: [
                              (0, e.jsx)(j, {
                                title: "#winter2023_frostivus_party_hats",
                                description:
                                  "#winter2023_frostivus_party_hats_description",
                                image: "winter2023/party_hats.png",
                              }),
                              (0, e.jsx)(j, {
                                title: "#winter2023_frostivus_free_event_items",
                                description:
                                  "#winter2023_frostivus_free_event_items_description",
                                image: "winter2023/freebies.png",
                              }),
                              (0, e.jsx)(j, {
                                title: "#winter2023_frostivus_high_fives",
                                description:
                                  "#winter2023_frostivus_high_fives_description",
                                image: "winter2023/high_fives.png",
                              }),
                            ],
                          }),
                        ],
                      }),
                      y(),
                      (0, e.jsxs)("div", {
                        id: "ClientUpdates",
                        className: (0, l.A)(
                          s().WebsiteSection,
                          s().ClientUpdates,
                        ),
                        children: [
                          (0, e.jsx)("h1", {
                            children: (0, a.Wn)(
                              "#winter2023_clientupdate_section_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Introduction,
                            children: (0, a.Wn)(
                              "#winter2023_clientupdate_introduction",
                            ),
                          }),
                          w(),
                          (0, e.jsx)("h2", {
                            children: (0, a.Wn)(
                              "#winter2023_qol_section_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Introduction,
                            children: (0, a.Wn)("#winter2023_qol_introduction"),
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, l.A)(
                              s().FeatureRow,
                              s().ThreeColumn,
                            ),
                            children: [
                              (0, e.jsx)(j, {
                                title:
                                  "#winter2023_qol_tower_range_indicator_title",
                                description:
                                  "#winter2023_qol_tower_range_indicator_desc",
                                video: "qol_tower_range_indicator",
                              }),
                              (0, e.jsx)(j, {
                                title: "#winter2023_qol_teleport_time_title",
                                description:
                                  "#winter2023_qol_teleport_time_desc",
                                image: "winter2023/qol_teleport_time.jpg",
                              }),
                              (0, e.jsx)(j, {
                                title: "#winter2023_qol_minimap_title",
                                description: "#winter2023_qol_minimap_desc",
                                image: "winter2023/qol_minimap_icons.jpg",
                              }),
                              (0, e.jsx)(j, {
                                title:
                                  "#winter2023_qol_ability_shape_indicator_title",
                                description:
                                  "#winter2023_qol_ability_shape_indicador_desc",
                                image: "winter2023/qol_ability_reticles.jpg",
                              }),
                              (0, e.jsx)(j, {
                                title: "#winter2023_qol_ability_icons_title",
                                description:
                                  "#winter2023_qol_ability_icons_desc",
                                image: "winter2023/qol_ability_icon_states.jpg",
                              }),
                              (0, e.jsx)(j, {
                                title: "#winter2023_qol_item_tooltips_title",
                                description:
                                  "#winter2023_qol_item_tooltips_desc",
                                image:
                                  "winter2023/qol_improved_item_tooltips.jpg",
                              }),
                              (0, e.jsx)(j, {
                                title: "#winter2023_qol_xp_range_title",
                                description: "#winter2023_qol_xp_range_desc",
                                image: "winter2023/qol_xp_range_indicator.jpg",
                              }),
                              (0, e.jsx)(j, {
                                title:
                                  "#winter2023_qol_wisdom_rune_timer_title",
                                description:
                                  "#winter2023_qol_wisdom_rune_timer_desc",
                                image: "winter2023/qol_wisdom_rune_timer.jpg",
                              }),
                              (0, e.jsx)(j, {
                                title: "#winter2023_qol_creep_bounties_title",
                                description:
                                  "#winter2023_qol_creep_bounties_desc",
                                image: "winter2023/qol_creep_bounties.jpg",
                              }),
                            ],
                          }),
                          (0, e.jsx)("div", {
                            className: s().QoLMisc,
                            children: (0, e.jsx)(p, {
                              title: "#winter2023_qol_misc_title",
                              description: "#winter2023_qol_misc_desc",
                            }),
                          }),
                          w(),
                          (0, e.jsx)("h2", {
                            children: (0, a.Wn)(
                              "#winter2023_profileshowcase_section_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Introduction,
                            children: (0, a.Wn)(
                              "#winter2023_profileshowcase_introduction",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, l.A)(
                              s().LargeFeatureSection,
                              s().ProfileShowcase,
                            ),
                            children: [
                              (0, e.jsxs)("div", {
                                className: s().FeatureList,
                                "data-aos": "fade-right",
                                "data-aos-delay": "100",
                                "data-aos-duration": "1000",
                                children: [
                                  (0, e.jsx)(p, {
                                    title:
                                      "#winter2023_profileshowcase_animations_title",
                                    description:
                                      "#winter2023_profileshowcase_animations_desc",
                                  }),
                                  (0, e.jsx)(p, {
                                    title:
                                      "#winter2023_profileshowcase_freezeframes_title",
                                    description:
                                      "#winter2023_profileshowcase_freezeframes_desc",
                                  }),
                                  (0, e.jsx)(p, {
                                    title:
                                      "#winter2023_profileshowcase_anchoring_title",
                                    description:
                                      "#winter2023_profileshowcase_anchoring_desc",
                                  }),
                                  (0, e.jsx)(p, {
                                    title:
                                      "#winter2023_profileshowcase_gridsnapping_title",
                                    description:
                                      "#winter2023_profileshowcase_gridsnapping_desc",
                                  }),
                                  (0, e.jsx)(p, {
                                    title:
                                      "#winter2023_profileshowcase_improved_portraits_title",
                                    description:
                                      "#winter2023_profileshowcase_improved_portraits_desc",
                                  }),
                                  (0, e.jsx)(p, {
                                    title:
                                      "#winter2023_profileshowcase_more_items_title",
                                    description:
                                      "#winter2023_profileshowcase_more_items_desc",
                                  }),
                                ],
                              }),
                              (0, e.jsx)("video", {
                                className: s().FeatureImage,
                                muted: !0,
                                autoPlay: !0,
                                preload: "auto",
                                loop: !0,
                                playsInline: !0,
                                poster: `${n.r.IMG_URL}/winter2023/profile_showcase_updates.jpg`,
                                children: (0, e.jsx)("source", {
                                  type: "video/webm",
                                  src: `${n.r.VIDEO_URL}/winter2023/profile_showcase_updates.webm`,
                                }),
                              }),
                            ],
                          }),
                          w(),
                          (0, e.jsx)("h2", {
                            children: (0, a.Wn)(
                              "#winter2023_armory_section_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Introduction,
                            children: (0, a.Wn)(
                              "#winter2023_armory_introduction",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, l.A)(
                              s().LargeFeatureSection,
                              s().Armory,
                            ),
                            children: [
                              (0, e.jsxs)("div", {
                                className: s().FeatureList,
                                "data-aos": "fade-right",
                                "data-aos-delay": "100",
                                "data-aos-duration": "1000",
                                children: [
                                  (0, e.jsx)(p, {
                                    title: "#winter2023_armory_grouping_title",
                                    description:
                                      "#winter2023_armory_grouping_desc",
                                  }),
                                  (0, e.jsx)(p, {
                                    title:
                                      "#winter2023_armory_filters_tags_title",
                                    description:
                                      "#winter2023_armory_filters_tags_desc",
                                  }),
                                  (0, e.jsx)(p, {
                                    title: "#winter2023_armory_stickers_title",
                                    description:
                                      "#winter2023_armory_stickers_desc",
                                  }),
                                ],
                              }),
                              (0, e.jsx)("img", {
                                className: s().FeatureImage,
                                src: `${n.r.IMG_URL}/winter2023/armory_updates.jpg`,
                              }),
                            ],
                          }),
                          w(),
                          (0, e.jsx)("h2", {
                            children: (0, a.Wn)(
                              "#winter2023_dotaplus_section_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Introduction,
                            children: (0, a.Wn)(
                              "#winter2023_dotaplus_introduction",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, l.A)(
                              s().LargeFeatureSection,
                              s().DotaPlus,
                            ),
                            children: [
                              (0, e.jsxs)("div", {
                                className: s().FeatureList,
                                "data-aos": "fade-right",
                                "data-aos-delay": "100",
                                "data-aos-duration": "1000",
                                children: [
                                  (0, e.jsx)(p, {
                                    title:
                                      "#winter2023_dotaplus_premium_sets_title",
                                    description:
                                      "#winter2023_dotaplus_premium_sets_desc",
                                  }),
                                  (0, e.jsx)(p, {
                                    title:
                                      "#winter2023_dotaplus_seasonal_quests_title",
                                    description:
                                      "#winter2023_dotaplus_seasonal_quests_desc",
                                  }),
                                  (0, e.jsx)(p, {
                                    title:
                                      "#winter2023_dotaplus_guild_rewards_title",
                                    description:
                                      "#winter2023_dotaplus_guild_rewards_desc",
                                  }),
                                ],
                              }),
                              this.bIsMacSafariBrowser
                                ? (0, e.jsx)("img", {
                                    className: s().FeatureImage,
                                    src: `${n.r.IMG_URL}/winter2023/frostivus_2023_dotaplus_premium_sets.png`,
                                  })
                                : (0, e.jsx)("video", {
                                    className: s().FeatureImage,
                                    muted: !0,
                                    autoPlay: !0,
                                    preload: "auto",
                                    loop: !0,
                                    playsInline: !0,
                                    poster: `${n.r.IMG_URL}/winter2023/frostivus_2023_dotaplus_premium_sets.png`,
                                    children: (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${n.r.VIDEO_URL}/winter2023/frostivus_2023_dotaplus_premium_sets.webm`,
                                    }),
                                  }),
                            ],
                          }),
                        ],
                      }),
                      y(),
                      (0, e.jsxs)("div", {
                        id: "BalanceChanges",
                        className: (0, l.A)(
                          s().WebsiteSection,
                          s().BalanceChanges,
                        ),
                        children: [
                          (0, e.jsx)("h1", {
                            children: (0, a.Wn)(
                              "#winter2023_patchnotes_section_title",
                            ),
                          }),
                          w(),
                          (0, e.jsx)("h2", {
                            children: (0, a.Wn)(
                              "#winter2023_patchnotes_new_items_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Introduction,
                            children: (0, a.Wn)(
                              "#winter2023_patchnotes_new_items_introduction",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: s().ItemsContainer,
                            children: [
                              (0, e.jsx)(c, { name: "item_ring_of_tarrasque" }),
                              (0, e.jsx)(c, { name: "item_tiara_of_selemene" }),
                              (0, e.jsx)(c, {
                                name: "item_angels_demise",
                                components: ["phylactery", "lesser_crit"],
                                recipeCost: 600,
                              }),
                              (0, e.jsx)(c, {
                                name: "item_devastator",
                                components: ["witch_blade", "mystic_staff"],
                              }),
                              (0, e.jsx)(c, {
                                name: "item_arcane_boots",
                                components: ["boots", "ring_of_basilius"],
                                recipeCost: 375,
                              }),
                              (0, e.jsx)(c, {
                                name: "item_bloodthorn",
                                components: ["orchid", "javelin", "hyperstone"],
                                recipeCost: 450,
                              }),
                              (0, e.jsx)(c, {
                                name: "item_ethereal_blade",
                                components: ["aether_lens", "ghost"],
                                recipeCost: 1600,
                              }),
                              (0, e.jsx)(c, {
                                name: "item_orb_of_corrosion",
                                components: [
                                  "orb_of_venom",
                                  "ring_of_protection",
                                  "gloves",
                                ],
                              }),
                              (0, e.jsx)(c, {
                                name: "item_revenants_brooch",
                                components: ["relic", "voodoo_mask"],
                                recipeCost: 800,
                              }),
                              (0, e.jsx)(c, {
                                name: "item_bloodstone",
                                components: ["voodoo_mask", "soul_booster"],
                                recipeCost: 700,
                              }),
                              (0, e.jsx)(c, { name: "item_safety_bubble" }),
                              (0, e.jsx)(c, { name: "item_royal_jelly" }),
                              (0, e.jsx)(c, { name: "item_light_collector" }),
                              (0, e.jsx)(c, {
                                name: "item_whisper_of_the_dread",
                              }),
                              (0, e.jsx)(c, { name: "item_doubloon" }),
                              (0, e.jsx)(c, { name: "item_nemesis_curse" }),
                              (0, e.jsx)(c, { name: "item_craggy_coat" }),
                              (0, e.jsx)(c, { name: "item_ancient_guardian" }),
                              (0, e.jsx)(c, { name: "item_avianas_feather" }),
                              (0, e.jsx)(c, { name: "item_rattlecage" }),
                              (0, e.jsx)(c, {
                                name: "item_unwavering_condition",
                              }),
                              (0, e.jsx)(c, { name: "item_panic_button" }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: s().GameplayUpdate,
                            children: [
                              (0, e.jsx)(S.fs, {
                                patchnotes: t?.general_notes,
                                headerClassName: s().PatchNotesHeaderLabel,
                                notesListClassName: s().PatchNotesList,
                              }),
                              (0, e.jsx)(S.wL, {
                                patchnotes: t?.neutral_creeps,
                                headerClassName: s().PatchNotesHeaderLabel,
                                notesListClassName: s().PatchNotesList,
                              }),
                              (0, e.jsx)(S.ZV, {
                                patchnotes: t?.items,
                                headerClassName: s().PatchNotesHeaderLabel,
                                notesListClassName: s().PatchNotesList,
                              }),
                              (0, e.jsx)(S.ZV, {
                                patchnotes: t?.neutral_items,
                                is_neutrals: !0,
                                headerClassName: s().PatchNotesHeaderLabel,
                                notesListClassName: s().PatchNotesList,
                              }),
                              (0, e.jsx)(S.ob, {
                                patchnotes: t?.heroes,
                                headerClassName: s().PatchNotesHeaderLabel,
                                notesListClassName: s().PatchNotesList,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)(B.K, {}),
                    ],
                  }),
                ],
              })
            );
          }
        };
        T = Y([R.PA], T);
      },
      63279: (D) => {
        D.exports = {
          Tooltip: "zIgQQsExodZ4dUHWl7-Vj",
          CarouselFade: "_2GYRSFEbsUCoLDOGW67kMO",
          StandardButton: "ul3-KYOhKedsSWWKYhZvd",
          ButtonText: "_1yQmdPvc-wQXmDKsjFoHf6",
          Icon: "_1iDm72NwAVbIMXsCSw255Y",
          Play: "HRq5BGNGdvfuQwvmLxosT",
          SteamLogo: "NmC4HA3xLBiMcnvJhs0OO",
          ToolTip: "_1Df7Vgr_Hj3Ngvz4-xahCQ",
          PlayerReportTooltip: "_3Xdm05EnjkxY3w3oaSLawc",
          Parallax: "_32yVii2CLAHtUQsixaOkuh",
          ParallaxLayer: "_1N5KlzLgHp-mAiIyS9_NTZ",
          Winter2023Page: "_1xmLAKWg7RP1IAcws3eK3G",
          PageContainer: "_3wDWSSnQHneLvW_Slbp51r",
          Hidden: "_11RY87tYLl-CULscrfqoLN",
          MobileOnly: "_18YDiUfD-pfBz1TsjHxnCQ",
          SectionDivider: "_1nsIPRgpqTFGnmLBEPahhV",
          SectionDividerMiddle: "xrsVkVXGxBwqXiKQOGOK6",
          SectionDividerImage: "_1i3jhFal3P9R0Od7XSm5Zi",
          SubsectionDivider: "_1KH996r7QeCls51P1jjpur",
          SubsectionDividerBorder: "Hd5Gq5S3oKGFe20a85V7p",
          SubsectionDividerImage: "_3JMR0e5_67wvWdAe165Poo",
          PageBackground: "_4zaDAfYQzXgVTDj0sT2Wy",
          PageForeground: "tZB-15zE0srlQoPDTJpAV",
          HeaderSection: "_3AT6Xg18Znfk3X2sLucI9U",
          TitleContainer: "BR9i-yCavM5sf7-ZNnPxP",
          TitleImage: "_1VSZI8yNfysvk7RiuFj0D9",
          TitleSnowVideo: "_16N4klPRPQLaWYCsNEfqTw",
          TitleSnowImage: "_1eY-Z5SkWnGhhgv6_8QoSF",
          Subtitle: "Tb_D8Bdfi4dXU2KoAf-DB",
          Paragraph: "_24MZDG1z99tqpFp-55qt_e",
          WebsiteSubSection: "_2A8CtBlaSjTZNamlbu0sjp",
          WebsiteSection: "_2pOZjY8DB2ZZL4sMiW0ose",
          Introduction: "_3p9Q1Pyw3rV5Uwd5CDssN_",
          DateText: "_2dZMRqe_cj2pbTz4fP9gI9",
          FrostivusTreasureSection: "_28yhXFGKgpZsqUwsNXQNGq",
          TreasureCarousel: "_1jDu08u7PGoEBJ0RIF_Dmp",
          TreasureSlider: "e6LozDbt9PgEjAbRP_05a",
          TreasureSlide: "_2wzEx5B_6_uQ3zLQgWlFWx",
          TreasureSlideHidden: "_-35zF77IcDcSOnTNLdGpD",
          SlideContainer: "_1etYupUoSS2GSPFIGpvzmG",
          TreasureName: "qYvvhtc_CxitDCfwWHPpQ",
          HeroName: "_14qa1CO2POOfY1eq28foy0",
          TreasureSelector: "_9fRPCk5cfB-HsgfGNzR6M",
          TreasurePaginationButton: "mUNEGiY7XRkmbma428Y7D",
          Prev: "UpfJs6k3NIaIO00p37Q6Y",
          Next: "_dODR6AgzyWUfE8Cxr9u9",
          NextArrow: "_2hVNebxRoCX2UieOZn1o83",
          PrevArrow: "_1386l4agSDYGGPCzV_JM_L",
          CarouselDots: "_2zrflleMDRwGRRHTj3x1q2",
          ContentText: "_2P729zc3A9mhBVEZSxEPFD",
          Text: "_3G9Ke9FH5Lvl9PzCSY51-d",
          HeaderContainer: "_1_GF_XAeJ-CmIgaSJJDDnJ",
          Headline: "_3HyhZndfqNWNALsi6YTqaR",
          Description: "_1v6RUh63FA19MdENmvmz2j",
          BonusItem: "_1Ws42H-EC4teagc0uxznAk",
          BonusItemVisualContainer: "_2bKQ_06l5L9i_RVTBDeiGy",
          Header: "_1xKckl-CGuycKmfPj6TMYu",
          Plus: "_1Ts1yjLeYKbDDxb0SfqVEH",
          VisualContainer: "_20GHuGA18kv71gg-aYDs5B",
          BonusItemVideo: "_3CnSNn5Y-WSeXDPSzjwCX5",
          Unusual: "_3zz_qMpn3iusJtUeCDo_gd",
          QoLMisc: "_3Ure0ZCeISyiXYOmYRZU4Z",
          FeatureRow: "_pcdYkBozTE185Pbhrlgl",
          FourColumn: "_207av7ziaclJAoKdGij2K2",
          ThreeColumn: "_2kPY_TnyQZay-sSjVY8rWh",
          TwoColumn: "O9bNog6UE5p8A3zQLYfe_",
          SmallFeatureCapsule: "_3C2Z2Xyjhv7cBFVGVqNq49",
          Image: "W1440SrzFH1zqFYhZ4TlQ",
          Horizontal: "_2M-qhHrwbsE_ouXhmuolAO",
          StockingStuffers: "_20kBMmaxPUQBy9VY_-2oCO",
          FestiveItems: "ilWq3uVQYHLcwqMGGXxCD",
          TheEvent: "_1D0oH3NvELu0vpko8X9p0N",
          EventPopoutSection: "_1vehHmYOyoCDfn2F5a-uHr",
          EventPopoutBorder: "Mqxokv65kPtWLCJumpahY",
          NaughtyOrNice: "_2RoAP9c6-Pp8t8Ivz9DX1e",
          NaughtyOrNiceSection: "_18eK8KugBlmu9qCI30Q-bY",
          NaughtyOrNiceImageContainer: "jBpugTddNuquz1JdgAx8",
          NaughtOrNiceDivider: "_1ws0qACV4eB_iS7OpAqwP8",
          NaughtOrNiceSnowflake: "LmWxaWe4eiw3FsQHmJ9zM",
          NaughtOrNiceVerticalLineTop: "_3GCw8fA1U6XTUHu_MHAs6z",
          NaughtOrNiceVerticalLineBottom: "_3tlGpD73_tc4fwp9zNs3GU",
          LargeFeatureSection: "_20b34RlLcZCkm59nfvO53s",
          FeatureList: "vFAtZT959HJlf1_xi_DKa",
          FeatureImage: "_3ummqhAbcQ-bWsLpL2RbNz",
          DotaPlus: "kFOumP98ydCDtr5fDcwGc",
          GameplayUpdate: "_3k19rxAejjpq12N5zW9jhn",
          PatchNotesHeaderLabel: "uQVXdfm4cyHamaHKLQBbm",
          MiscSection: "HKo_EXK_OCDLzGEtGaOGB",
          ItemsContainer: "_1RoJ2LyXwjfF8XFAdTfXFa",
          GameItemDetails: "_33a9LiHSbGqGfJyomS25Ug",
          ItemImage: "_1an7__hu6a4d9UMO78K_9r",
          HeaderText: "_3cINOvgOFSbql7PAkIv5FH",
          ItemName: "_2IwqvrriTAQhFOm4aeqoUk",
          GoldPrice: "sq0Zrseq1zwO3siapviQB",
          GoldIcon: "_2nvk9IPWVzBnsC8u30I9Ly",
          NeutralItemTier: "_2sNU-WnW1qx6VPWtBRh7mX",
          Tier1: "_1wK-On3kqsHXUl_mU-SfjD",
          Tier2: "_1iO36UURgrifF4tE_cwEm1",
          Tier3: "_10Xr0829VVrCOV7yTRZIUg",
          Tier4: "zsEHsVyeghdthWYpFcp8R",
          Tier5: "_1i7FkvMzZ0qAO_aJe4RjMi",
          Body: "_21OGbR2kf-SXyzEb935aC7",
          Stats: "_1c1nYDchOGA3p1wbjwf0XY",
          Stat: "_2tqxidSKegWO98L9PyLqO7",
          SingleValue: "_2Qpe5eobT0r9HXREfivVDT",
          DescriptionContainer: "YhcgCOWHB-Q0ERUblcseN",
          DescriptionHeader: "_30NNPkseprUjTInyx7k6Fk",
          CooldownContainer: "_3yFWi7HPXAzLFUPUZHLCtf",
          CooldownIcon: "LY_1EDDH2eU6sAG_-w9HG",
          CooldownText: "_3ayC0K1TNKv5hPM5knbIeY",
          ManaContainer: "_1rFmwjVYd8YeCrEyu3TsRF",
          ManaIcon: "_1ZYtHOay1zbl6jjLUG9plp",
          ManaText: "_3Yuxo6y4zoMs4-2sgN0N6P",
          HealthContainer: "RWQxqAJRKmJsSL8a5lBzW",
          HealthIcon: "_1Gn5dwKCjdUoyzGKlymK-I",
          HealthText: "_2Oecz1KYNUytXq4IkoWxdS",
          Lore: "_5ta-VKSeB2kJjZvjRiv5T",
          Recipe: "RMFpujZ1Nj0vtT5EO8PQT",
          RecipeLabel: "_2xm05ZCtCO6_I16aDs1qwX",
          RecipeComponentImage: "_2Oy_gZFiqIpPJePmbeOJ0N",
          RecipeCost: "_2ZIFydcjmuM6tap-le3r55",
          MobileOnlySection: "_2dmDYYNfSctJG1eTPpZ8v8",
          Frostivus: "nk7pL9yHrC99wuwB8jzHV",
          ClientUpdates: "TolqX2UNJxIG4jmi3BFY5",
          BalanceChanges: "EHed0ZNpbB7ptETzCFPho",
        };
      },
    },
  ]);
})();
