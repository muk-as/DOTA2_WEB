// 8569.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [8569],
    {
      83695: (d, x, r) => {
        "use strict";
        r.d(x, { U: () => m });
        var e = r(69500),
          s = r(11417),
          j = r.n(s),
          l = r(2095);
        const m = () =>
            (0, e.jsx)("div", {
              className: j().RightArrow,
              style: {
                backgroundImage: `url( ${l.r.IMG_URL}/icons/arrow_right.svg )`,
              },
            }),
          a = () =>
            jsx("div", {
              className: styles.UpRightArrow,
              style: {
                backgroundImage: `url( ${ConfigDota.IMG_URL}/icons/arrow_top_right.svg )`,
              },
            });
      },
      33883: (d, x, r) => {
        "use strict";
        r.d(x, { U: () => u, v: () => N });
        var e = r(69500),
          s = r(7552),
          j = r(85655),
          l = r.n(j),
          m = r(15001),
          a = r(2095),
          c = r(8305);
        const N = ({ image: b, is_new: t }) =>
            (0, e.jsxs)("div", {
              className: l().ComparisonImage,
              children: [
                (0, e.jsx)("div", {
                  className: (0, m.A)(l().ImageLabel, t && l().IsNew),
                  children: (0, c.Wn)(t ? "#729_new_image" : "#729_old_image"),
                }),
                (0, e.jsx)("img", { src: `${a.r.IMG_URL}${b}` }),
              ],
            }),
          u = (b) => {
            const [t, I] = (0, s.useState)(0);
            return (0, e.jsxs)("div", {
              className: l().TabbedMapComparison,
              children: [
                (0, e.jsx)("div", {
                  className: l().TabHeader,
                  children: b.labels.map((w, o) =>
                    (0, e.jsx)(
                      "div",
                      {
                        className: (0, m.A)(l().Tab, t == o && l().Active),
                        onClick: () => I(o),
                        children: (0, c.Wn)(w),
                      },
                      "tab_" + o,
                    ),
                  ),
                }),
                (0, e.jsx)("div", {
                  className: l().TabContents,
                  children: s.Children.map(b.children, (w, o) =>
                    (0, e.jsx)(
                      "div",
                      {
                        className: (0, m.A)(
                          l().TabContentContainer,
                          o == t && l().Active,
                        ),
                        children: w,
                      },
                      "tabelement_" + o,
                    ),
                  ),
                }),
              ],
            });
          };
      },
      8569: (d, x, r) => {
        "use strict";
        r.r(x), r.d(x, { default: () => D });
        var e = r(69500),
          s = r(2095),
          j = r(7552),
          l = r(45237),
          m = r(51031),
          a = r.n(m),
          c = r(15001),
          N = r(45488),
          u = r(3878),
          b = r(11778),
          t = r(8305),
          I = r(63177),
          w = r(42616),
          o = r(73202),
          v = r(84899),
          _ = r(32389),
          n = r(4665),
          y = r(83695),
          i = r(33883),
          M = Object.defineProperty,
          A = Object.getOwnPropertyDescriptor,
          L = (p, g, k, E) => {
            for (
              var h = E > 1 ? void 0 : E ? A(g, k) : g, O = p.length - 1, P;
              O >= 0;
              O--
            )
              (P = p[O]) && (h = (E ? P(g, k, h) : P(h)) || h);
            return E && h && M(g, k, h), h;
          };
        let D = class extends j.Component {
          render() {
            const p = N.o.getPatchNotes("7.29", s.r.LANGUAGE);
            return (0, e.jsxs)("div", {
              className: a().DawnbreakerPage,
              children: [
                (0, e.jsx)(I.A, { bOverlapping: !0 }),
                (0, e.jsx)(o.mg, {
                  children: (0, e.jsx)("title", {
                    children: (0, t.Wn)("#dawnbreaker_title"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: a().HeaderSection,
                  children: [
                    (0, e.jsx)("div", {
                      className: a().BackgroundVideoContainer,
                      children: (0, e.jsxs)("video", {
                        className: a().BackgroundVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${s.r.IMG_URL}dawnbreaker/dawnbreaker_sfm.jpg`,
                        children: [
                          (0, e.jsx)("source", {
                            type: "video/webm",
                            src: `${s.r.VIDEO_URL}dawnbreaker/dawnbreaker_sfm.webm`,
                          }),
                          (0, e.jsx)("source", {
                            type: "video/mp4",
                            src: `${s.r.VIDEO_URL}dawnbreaker/dawnbreaker_sfm.mp4`,
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: a().TitleContainer,
                      "data-aos": "fade-up",
                      "data-aos-delay": "200",
                      "data-aos-duration": "2000",
                      children: [
                        (0, e.jsx)("div", {
                          className: a().TitleIntro,
                          children: (0, t.Wn)("Introducing"),
                        }),
                        (0, e.jsx)("img", {
                          className: (0, c.A)(a().HeroLogo, a().Img1),
                          onError: (g) =>
                            (g.target.src = `${s.r.IMG_URL}/dawnbreaker/dawnbreaker_logo_english.png`),
                          src: `${s.r.IMG_URL}/dawnbreaker/dawnbreaker_logo_${s.r.LANGUAGE}.png`,
                        }),
                        (0, e.jsx)("div", {
                          className: a().Complexity,
                          children: (0, e.jsx)("img", {
                            src: `${s.r.IMG_URL}/dawnbreaker/difficulty.png`,
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: a().Roles,
                          children: [
                            (0, e.jsx)("div", {
                              className: a().HeroRole,
                              children: (0, t.Wn)("#dawnbreaker_role1"),
                            }),
                            (0, e.jsx)("div", {
                              className: a().HeroRole,
                              children: (0, t.Wn)("#dawnbreaker_role2"),
                            }),
                            (0, e.jsx)("div", {
                              className: a().HeroRole,
                              children: (0, t.Wn)("#dawnbreaker_role3"),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: a().HeroHype,
                          children: (0, t.Wn)("#dawnbreaker_hype"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: a().LoreSection,
                  children: [
                    (0, e.jsx)("div", { className: a().Divider }),
                    (0, e.jsx)("div", { className: a().DividerBottom }),
                    (0, e.jsxs)("div", {
                      className: a().Quote,
                      children: [
                        (0, e.jsx)("div", {
                          className: a().LoreHeader,
                          children: (0, t.Wn)("#dawnbreaker_lore_title"),
                        }),
                        (0, e.jsx)("div", {
                          className: a().LoreText,
                          children: (0, t.Wn)("#dawnbreaker_lore_desc"),
                        }),
                        (0, e.jsx)("div", {
                          className: a().LoreText,
                          children: (0, t.Wn)("#dawnbreaker_lore_desc2"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: a().AbilitySection,
                  children: (0, e.jsxs)(_.gi, {
                    className: a().AbilityCarousel,
                    naturalSlideWidth: 100,
                    naturalSlideHeight: 56.25,
                    totalSlides: 4,
                    children: [
                      (0, e.jsxs)(_.Ap, {
                        children: [
                          (0, e.jsx)(_.q7, {
                            index: 0,
                            children: (0, e.jsxs)("div", {
                              className: a().SlideContainer,
                              children: [
                                (0, e.jsxs)("video", {
                                  className: a().AbilityVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${s.r.VIDEO_URL}/abilities/dawnbreaker/dawnbreaker_fire_wreath.jpg`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${s.r.VIDEO_URL}/abilities/dawnbreaker/dawnbreaker_fire_wreath.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${s.r.VIDEO_URL}/abilities/dawnbreaker/dawnbreaker_fire_wreath.mp4`,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().SlideAbilityContainer,
                                  children: [
                                    (0, e.jsx)("img", {
                                      className: a().SlideAbilityIcon,
                                      src: `${s.r.IMG_URL}/dawnbreaker/dawnbreaker_fire_wreath.png`,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: a().AbilityText,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: a().AbilityName,
                                          children: (0, t.Wn)(
                                            "#dawnbreaker_ability1_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: a().AbilityDesc,
                                          children: (0, t.Wn)(
                                            "#dawnbreaker_ability1_desc",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)(_.q7, {
                            index: 1,
                            children: (0, e.jsxs)("div", {
                              className: a().SlideContainer,
                              children: [
                                (0, e.jsxs)("video", {
                                  className: a().AbilityVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${s.r.VIDEO_URL}/abilities/dawnbreaker/dawnbreaker_celestial_hammer.jpg`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${s.r.VIDEO_URL}/abilities/dawnbreaker/dawnbreaker_celestial_hammer.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${s.r.VIDEO_URL}/abilities/dawnbreaker/dawnbreaker_celestial_hammer.mp4`,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().SlideAbilityContainer,
                                  children: [
                                    (0, e.jsx)("img", {
                                      className: a().SlideAbilityIcon,
                                      src: `${s.r.IMG_URL}/dawnbreaker/dawnbreaker_celestial_hammer.png`,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: a().AbilityText,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: a().AbilityName,
                                          children: (0, t.Wn)(
                                            "#dawnbreaker_ability2_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: a().AbilityDesc,
                                          children: (0, t.Wn)(
                                            "#dawnbreaker_ability2_desc",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)(_.q7, {
                            index: 2,
                            children: (0, e.jsxs)("div", {
                              className: a().SlideContainer,
                              children: [
                                (0, e.jsxs)("video", {
                                  className: a().AbilityVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${s.r.VIDEO_URL}/abilities/dawnbreaker/dawnbreaker_luminosity.jpg`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${s.r.VIDEO_URL}/abilities/dawnbreaker/dawnbreaker_luminosity.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${s.r.VIDEO_URL}/abilities/dawnbreaker/dawnbreaker_luminosity.mp4`,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().SlideAbilityContainer,
                                  children: [
                                    (0, e.jsx)("img", {
                                      className: a().SlideAbilityIcon,
                                      src: `${s.r.IMG_URL}/dawnbreaker/dawnbreaker_luminosity.png`,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: a().AbilityText,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: a().AbilityName,
                                          children: (0, t.Wn)(
                                            "#dawnbreaker_ability3_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: a().AbilityDesc,
                                          children: (0, t.Wn)(
                                            "#dawnbreaker_ability3_desc",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)(_.q7, {
                            index: 3,
                            children: (0, e.jsxs)("div", {
                              className: a().SlideContainer,
                              children: [
                                (0, e.jsxs)("video", {
                                  className: a().AbilityVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${s.r.VIDEO_URL}/abilities/dawnbreaker/dawnbreaker_solar_guardian.jpg`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${s.r.VIDEO_URL}/abilities/dawnbreaker/dawnbreaker_solar_guardian.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${s.r.VIDEO_URL}/abilities/dawnbreaker/dawnbreaker_solar_guardian.mp4`,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().SlideAbilityContainer,
                                  children: [
                                    (0, e.jsx)("img", {
                                      className: a().SlideAbilityIcon,
                                      src: `${s.r.IMG_URL}/dawnbreaker/dawnbreaker_solar_flare.png`,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: a().AbilityText,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: a().AbilityName,
                                          children: (0, t.Wn)(
                                            "#dawnbreaker_ability4_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: a().AbilityDesc,
                                          children: (0, t.Wn)(
                                            "#dawnbreaker_ability4_desc",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: a().CarouselDots,
                        children: [
                          (0, e.jsx)(_.cL, {
                            className: (0, c.A)(
                              a().AbilitySelector,
                              a().Slide0,
                            ),
                            slide: 0,
                            children: (0, e.jsx)("div", {}),
                          }),
                          (0, e.jsx)(_.cL, {
                            className: (0, c.A)(
                              a().AbilitySelector,
                              a().Slide1,
                            ),
                            slide: 1,
                            children: (0, e.jsx)("div", {}),
                          }),
                          (0, e.jsx)(_.cL, {
                            className: (0, c.A)(
                              a().AbilitySelector,
                              a().Slide2,
                            ),
                            slide: 2,
                            children: (0, e.jsx)("div", {}),
                          }),
                          (0, e.jsx)(_.cL, {
                            className: (0, c.A)(
                              a().AbilitySelector,
                              a().Slide3,
                            ),
                            slide: 3,
                            children: (0, e.jsx)("div", {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: a().HeropediaSection,
                  children: [
                    (0, e.jsxs)("div", {
                      className: a().HeropediaText,
                      children: [
                        (0, t.Wn)("#dawnbreaker_heroes_title"),
                        (0, e.jsx)(l.N_, {
                          to: b.J.hero("dawnbreaker"),
                          children: (0, e.jsxs)("div", {
                            className: a().StandardButton,
                            children: [
                              (0, e.jsx)("div", {
                                className: a().ButtonText,
                                children: (0, t.Wn)("#dawnbreaker_heroes_btn"),
                              }),
                              (0, e.jsx)(y.U, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsx)("img", {
                        className: a().HeropediaImage,
                        src: `${s.r.IMG_URL}/heroes/crops/dawnbreaker.png`,
                      }),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: a().WallpaperSection,
                  children: [
                    (0, e.jsx)("div", {
                      className: a().WallpaperTitle,
                      children: (0, t.Wn)("#dawnbreaker_wallpapers"),
                    }),
                    (0, e.jsxs)("div", {
                      className: a().Wallpapers,
                      children: [
                        (0, e.jsx)("a", {
                          href: `${s.r.IMG_URL}dawnbreaker/wallpapers/dota_db_wallpaper.png`,
                          children: (0, e.jsx)("div", {
                            className: a().Wallpaper,
                            children: (0, e.jsx)("img", {
                              className: a().WallpaperImgDesktop,
                              src: `${s.r.IMG_URL}/dawnbreaker/wallpapers/dota_db_wallpaper_thumb.jpg`,
                            }),
                          }),
                        }),
                        (0, e.jsx)("a", {
                          href: `${s.r.IMG_URL}dawnbreaker/wallpapers/dota_db_wallpaper_mobile.png`,
                          children: (0, e.jsx)("div", {
                            className: a().Wallpaper,
                            children: (0, e.jsx)("img", {
                              className: a().WallpaperImgDesktop,
                              src: `${s.r.IMG_URL}/dawnbreaker/wallpapers/dota_db_wallpaper_mobile_thumb.jpg`,
                            }),
                          }),
                        }),
                        (0, e.jsx)("a", {
                          href: `${s.r.IMG_URL}dawnbreaker/wallpapers/dota_stars_wallpaper.jpg`,
                          children: (0, e.jsx)("div", {
                            className: a().Wallpaper,
                            children: (0, e.jsx)("img", {
                              className: a().WallpaperImgDesktop,
                              src: `${s.r.IMG_URL}/dawnbreaker/wallpapers/dota_stars_wallpaper_thumb.jpg`,
                            }),
                          }),
                        }),
                        (0, e.jsx)("a", {
                          href: `${s.r.IMG_URL}dawnbreaker/wallpapers/dota_stars_mobile.jpg`,
                          children: (0, e.jsx)("div", {
                            className: a().Wallpaper,
                            children: (0, e.jsx)("img", {
                              className: a().WallpaperImgDesktop,
                              src: `${s.r.IMG_URL}/dawnbreaker/wallpapers/dota_stars_mobile_thumb.jpg`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: a().PatchSection,
                  children: [
                    (0, e.jsx)("div", { className: a().Divider }),
                    (0, e.jsx)("div", {
                      className: a().PatchTitle,
                      children: (0, t.Wn)("#729_patch_title"),
                    }),
                    (0, e.jsxs)("div", {
                      className: a().PatchContainer,
                      children: [
                        (0, e.jsx)("img", {
                          className: a().PatchImage,
                          src: `${s.r.IMG_URL}/dawnbreaker/patch/patch_maps.png`,
                        }),
                        (0, e.jsxs)("div", {
                          className: a().MapSection,
                          children: [
                            (0, e.jsx)("div", {
                              className: a().HeaderLabel,
                              children: (0, t.Wn)("#729_patch_map_title"),
                            }),
                            (0, e.jsxs)("div", {
                              className: a().PatchContent,
                              children: [
                                (0, e.jsx)("div", {
                                  className: a().MapNote,
                                  children: (0, t.Wn)(
                                    "#729_patch_map_changes_desc",
                                  ),
                                }),
                                (0, e.jsxs)(i.U, {
                                  labels: [
                                    "#729_patch_map_change4_title",
                                    "#729_patch_map_change6_title",
                                    "#729_patch_map_change5_title",
                                    "#729_patch_map_change1_title",
                                    "#729_patch_map_change3_title",
                                    "#729_patch_map_change8_title",
                                    "#729_patch_map_change7_title",
                                    "#729_patch_map_change2_title",
                                    "#729_patch_map_change17_title",
                                  ],
                                  children: [
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_mid_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_mid_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_safelane_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_safelane_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_primary_jungle_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_primary_jungle_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/dire_primary_jungle_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/dire_primary_jungle_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/dire_triangle_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/dire_triangle_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/dire_safelane_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/dire_safelane_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_secret_shop_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_secret_shop_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_bot_ward_spot_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_bot_ward_spot_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/dire_bot_ward_spot_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/dire_bot_ward_spot_new.png",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, e.jsx)("div", {
                                  className: a().MapDivider,
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().MapHeader,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: a().MapImage,
                                      style: {
                                        backgroundImage: `url( ${s.r.IMG_URL}dawnbreaker/patch/map_icon.png )`,
                                      },
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: a().RightSection,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: a().HeroName,
                                          children: (0, t.Wn)(
                                            "#729_patch_map_grids_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: a().UpdateSubtitle,
                                          children: (0, t.Wn)(
                                            "#729_patch_map_label",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)(i.U, {
                                  labels: [
                                    "#729_patch_map_change9_title",
                                    "#729_patch_map_change10_title",
                                    "#729_patch_map_change11_title",
                                    "#729_patch_map_change12_title",
                                    "#729_patch_map_change13_title",
                                    "#729_patch_map_change14_title",
                                    "#729_patch_map_change15_title",
                                  ],
                                  children: [
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_top_red_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_top_red_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_mid_t2_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_mid_t2_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_bot_t2_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/radiant_bot_t2_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/dire_top_t2_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/dire_top_t2_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/dire_mid_t2_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/dire_mid_t2_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/dire_bot_t2_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/dire_bot_t2_new.png",
                                      }),
                                    }),
                                    (0, e.jsx)(n.EW, {
                                      itemOne: (0, e.jsx)(i.v, {
                                        is_new: !0,
                                        image:
                                          "dawnbreaker/patch/maps/dire_mid_t1_old.png",
                                      }),
                                      itemTwo: (0, e.jsx)(i.v, {
                                        is_new: !1,
                                        image:
                                          "dawnbreaker/patch/maps/dire_mid_t1_new.png",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: a().LowerPatch,
                          children: [
                            (0, e.jsx)("img", {
                              className: a().PatchImage,
                              src: `${s.r.IMG_URL}/dawnbreaker/patch/patch_general.png`,
                            }),
                            (0, e.jsx)(v.fs, { patchnotes: p?.general_notes }),
                            (0, e.jsx)(v.ZV, { patchnotes: p?.items }),
                            (0, e.jsx)(v.ZV, {
                              patchnotes: p?.neutral_items,
                              is_neutrals: !0,
                            }),
                            (0, e.jsx)(v.ob, { patchnotes: p?.heroes }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)(w.K, {}),
              ],
            });
          }
        };
        D = L([u.PA], D);
      },
      11417: (d) => {
        d.exports = {
          RightArrow: "_1aWAcVv4khhRKQHKyqIDl5",
          UpRightArrow: "_3KCtpfqeVGR0eaqc5YB4iF",
        };
      },
      85655: (d) => {
        d.exports = {
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
      51031: (d) => {
        d.exports = {
          Tooltip: "OauU7XYnGjhMEFNUgTX4v",
          CarouselFade: "_3ZZDoW4_Y9J9fXmuQTnx-6",
          StandardButton: "Jvvxrqazq9nd3pJbiVJIh",
          ButtonText: "_3xvF5xuKWapshL8FScGvvd",
          Icon: "_3IvBUAWm4ms1_RWaMklXnM",
          Play: "_2mNcB6CfbDBq_NsQwKcMtD",
          SteamLogo: "_3gtpeKroBYm347u_2oI3dw",
          ToolTip: "_28P6ShpSYac5BbfAoBQ3Ju",
          PlayerReportTooltip: "_3dUSNIZ5ScqquyWRSnOnN5",
          DawnbreakerPage: "_3R99960iXgU4kJP14mYQhb",
          HeaderSection: "_2logX3fPn3u6pyZK1n6fnG",
          BottomFade: "_1DvyFkOe9ebZgpFv0H3t0H",
          BackgroundVideoContainer: "_1yKP_TPrLElp93I0WhrcWf",
          PlayButtonPositioner: "a0Lfn6VNP5IYY9ekQFERl",
          TitleContainer: "j5OuL9Icky1jmAbxN4PPR",
          TitleIntro: "_3y8VYJeSh675uw8qYJ9l4O",
          HeroName: "_2kGT16ZUwpE7sb8K8XONKD",
          HeroLogo: "_2QoGFdStVFKJhw_RLSP_3-",
          Complexity: "_1RpIFm2a4gEhnV5Nogx7gh",
          Roles: "_2qRsDLWXfD1qofvcBMcKAJ",
          HeroRole: "_2JdLmqQXKOojMhVEYhEb5",
          HeroHype: "_20ZnO08zpW-KbayNYeu-ZQ",
          LoreSection: "PpzGdU664uXWOY0lAmxCs",
          LoreHeader: "_2sJHJbGMsHHHyNukpP1ZmT",
          LoreText: "_1FSgzMxbODsomysKADkhjy",
          AbilitySection: "_31TraWyqcARwZz8VjFobh",
          SlideContainer: "wP4oM86nfCwfFt-84yneA",
          CarouselDots: "_2zbMqZyLGxq9xMJHDdxADw",
          AbilitySelector: "_2GfiL5kQ9j1eDw1FEiMSVv",
          Slide0: "_3OLys8QiCOyIrnt-mZANpu",
          Slide1: "Zvk764jL58yRhTApiL_gN",
          Slide2: "_1RpgorUFhoACUKtUF5ivit",
          Slide3: "_2TPSNlQyGHxBlh2SpCEP_g",
          SlideAbilityContainer: "_20QY7EnZ0meXq7lNQf4isz",
          SlideAbilityIcon: "_1xd3XVq5Lgoz6J2bfNSOCs",
          AbilityName: "_1A8hj8TSTOhgdbcCBHVYgv",
          AbilityDesc: "-C7XO7sc3_PoI8tzb_Xbv",
          HeropediaSection: "_3jMwaP_25T_0VglPAENGyz",
          HeropediaImage: "_3ws6ZJezypiCd4pHkPn5Vf",
          HeropediaHeader: "_5fahvfEfUX7SPg9N8uSUe",
          HeropediaText: "_1uNVx1ildH8HKGFlK1QsU",
          WallpaperSection: "_2_zEbklWDPKXkTGuTQFtii",
          WallpaperTitle: "_2d5kn_GdX27JcCCeMYaOU-",
          Wallpapers: "_2YZ-KgZaa1FRzKx2Dv02-9",
          Wallpaper: "_2C3wWHVuwcL6__p_Kc-vQv",
          PatchSection: "A8h6cEFuIDqx7lSr6Arey",
          Divider: "_2x-ExHc3p8SiDxtNO862xH",
          PatchImage: "zPcizO7VWTVYKxT_QJ_mn",
          PatchTitle: "_1ggg2uRTK5dM0QormKp6Ze",
          PatchContainer: "_1GAs-761O7pkQnGe5PFEL6",
          HeaderLabel: "_1fH7I-THlglAuGPY3IzCbX",
          PatchContent: "_3uiQFAOOGz6Y2keOs1xv2n",
          MapSection: "_2emsLXv8GQ9eG9dhSDJgfm",
          MapHeader: "_2cx7f0T_CtsxmHp3hHprHo",
          MapImage: "_2iHJQohayKQ1XFD8Ctka7x",
          RightSection: "_10srkfX1jFB2BHcIux3HZ7",
          UpdateSubtitle: "_3zDQw-vxwgOyqlJ6rK27vi",
          MapNote: "JxLwHzN6Oax-2FNuvU5AT",
          MapPlacehold: "_3oLaGPfMe5n4NWfkhXo6J2",
          MapDivider: "rK29-jNJ2tWJBe5e_EkUC",
          LowerPatch: "_3xy7UHonIsh_FUgDIsHKLX",
          ComparisonImage: "I1mrPn37s6Apihmi9K-ri",
          ImageLabel: "zZF39VkXUryDHJ3dEfv88",
          IsNew: "_1G1ll_w0yaktrTVt4-D_yW",
          rotate: "_2ZiKU9xDpeOtVDgiB6hkgn",
        };
      },
    },
  ]);
})();
