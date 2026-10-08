// 19791.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [19791],
    {
      83695: (d, o, l) => {
        "use strict";
        l.d(o, { U: () => b });
        var e = l(69500),
          i = l(11417),
          m = l.n(i),
          a = l(2095);
        const b = () =>
            (0, e.jsx)("div", {
              className: m().RightArrow,
              style: {
                backgroundImage: `url( ${a.r.IMG_URL}/icons/arrow_right.svg )`,
              },
            }),
          t = () =>
            jsx("div", {
              className: styles.UpRightArrow,
              style: {
                backgroundImage: `url( ${ConfigDota.IMG_URL}/icons/arrow_top_right.svg )`,
              },
            });
      },
      19791: (d, o, l) => {
        "use strict";
        l.r(o), l.d(o, { default: () => x });
        var e = l(69500),
          i = l(2095),
          m = l(11778),
          a = l(8305),
          b = l(3878),
          t = l(32389),
          I = l(7552),
          u = l(73202),
          y = l(45237),
          p = l(15001),
          D = l(45488),
          T = l(63177),
          L = l(42616),
          E = l(60901),
          s = l.n(E),
          n = l(84899),
          g = l(83695),
          A = l(73455),
          W = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          P = (r, _, j, h) => {
            for (
              var c = h > 1 ? void 0 : h ? R(_, j) : _, v = r.length - 1, N;
              v >= 0;
              v--
            )
              (N = r[v]) && (c = (h ? N(_, j, c) : N(c)) || c);
            return h && c && W(_, j, c), c;
          };
        let x = class extends I.Component {
          render() {
            const r = D.o.getPatchNotes("7.31", i.r.LANGUAGE);
            return (0, e.jsxs)("div", {
              className: s().PrimalBeastPage,
              children: [
                (0, e.jsx)(T.A, { bOverlapping: !0 }),
                (0, e.jsx)(u.mg, {
                  children: (0, e.jsx)("title", {
                    children: (0, a.Wn)("#primalbeast_title"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: s().HeaderSection,
                  children: [
                    (0, e.jsxs)("div", {
                      className: s().BackgroundVideoContainer,
                      children: [
                        (0, e.jsxs)("video", {
                          className: s().BackgroundVideo,
                          autoPlay: !0,
                          preload: "auto",
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          poster: `${i.r.IMG_URL}pb_header_loop.jpg`,
                          children: [
                            (0, e.jsx)("source", {
                              type: "video/webm",
                              src: `${i.r.VIDEO_URL}pb_header_loop.webm`,
                            }),
                            (0, e.jsx)("source", {
                              type: "video/mp4",
                              src: `${i.r.VIDEO_URL}pb_header_loop.mp4`,
                            }),
                          ],
                        }),
                        (0, e.jsx)("img", {
                          className: s().LeavesLeft,
                          "data-aos": "fade-left",
                          "data-aos-delay": "300",
                          "data-aos-duration": "2000",
                          src: `${i.r.IMG_URL}/primalbeast/leaves_left.png`,
                        }),
                        (0, e.jsx)("img", {
                          className: s().LeavesRight,
                          "data-aos": "fade-right",
                          "data-aos-delay": "300",
                          "data-aos-duration": "2000",
                          src: `${i.r.IMG_URL}/primalbeast/leaves_right.png`,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: s().TitleContainer,
                      children: (0, e.jsxs)("div", {
                        className: s().TitleContainer,
                        "data-aos": "fade-up",
                        "data-aos-delay": "200",
                        "data-aos-duration": "2000",
                        children: [
                          (0, e.jsx)("div", {
                            className: s().TitleIntro,
                            children: (0, a.Wn)("#primalbeast_intro_title"),
                          }),
                          (0, e.jsx)("img", {
                            className: s().HeroLogo,
                            onError: (_) =>
                              (_.target.src = `${i.r.IMG_URL}/primalbeast/pb_logo_en.png`),
                            src: `${i.r.IMG_URL}/primalbeast/pb_logo_${i.r.LANGUAGE}.png`,
                          }),
                          (0, e.jsx)("div", {
                            className: s().Complexity,
                            children: (0, e.jsx)("img", {
                              src: `${i.r.IMG_URL}/primalbeast/difficulty.png`,
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            className: s().Roles,
                            children: [
                              (0, e.jsx)("div", {
                                className: s().HeroRole,
                                children: (0, a.Wn)("#primalbeast_role1"),
                              }),
                              (0, e.jsx)("div", {
                                className: s().HeroRole,
                                children: (0, a.Wn)("#primalbeast_role2"),
                              }),
                              (0, e.jsx)("div", {
                                className: s().HeroRole,
                                children: (0, a.Wn)("#primalbeast_role3"),
                              }),
                            ],
                          }),
                          (0, e.jsx)("div", {
                            className: s().HeroIntro,
                            children: (0, a.Wn)("#primalbeast_intro"),
                          }),
                          (0, e.jsxs)("div", {
                            className: s().LoreSection,
                            children: [
                              (0, e.jsx)("div", { className: s().Divider }),
                              (0, e.jsx)("div", {
                                className: s().DividerBottom,
                              }),
                              (0, e.jsxs)("div", {
                                className: s().Quote,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: s().LoreHeader,
                                    children: (0, a.Wn)(
                                      "#primalbeast_lore_title",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().LoreText,
                                    children: (0, a.Wn)(
                                      "#primalbeast_lore_desc",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().LoreText,
                                    children: (0, a.Wn)(
                                      "#primalbeast_lore_desc2",
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
                (0, e.jsx)("div", {
                  className: s().AbilitySection,
                  children: (0, e.jsxs)(t.gi, {
                    className: s().AbilityCarousel,
                    naturalSlideWidth: 100,
                    naturalSlideHeight: 56.25,
                    totalSlides: 4,
                    children: [
                      (0, e.jsxs)(t.Ap, {
                        children: [
                          (0, e.jsx)(t.q7, {
                            index: 0,
                            children: (0, e.jsxs)("div", {
                              className: s().SlideContainer,
                              children: [
                                (0, e.jsxs)("video", {
                                  className: s().AbilityVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${i.r.VIDEO_URL}/abilities/primal_beast/primal_beast_onslaught_point.jpg`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${i.r.VIDEO_URL}/abilities/primal_beast/primal_beast_onslaught_point.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${i.r.VIDEO_URL}/abilities/primal_beast/primal_beast_onslaught_point.mp4`,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: s().SlideAbilityContainer,
                                  children: [
                                    (0, e.jsx)("img", {
                                      className: s().SlideAbilityIcon,
                                      src: `${i.r.IMG_URL}/primalbeast/primal_beast_onslaught_point.png`,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: s().AbilityText,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: s().AbilityName,
                                          children: (0, a.Wn)(
                                            "#primalbeast_ability1_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: s().AbilityDesc,
                                          children: (0, a.Wn)(
                                            "#primalbeast_ability1_desc",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)(t.q7, {
                            index: 1,
                            children: (0, e.jsxs)("div", {
                              className: s().SlideContainer,
                              children: [
                                (0, e.jsxs)("video", {
                                  className: s().AbilityVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${i.r.VIDEO_URL}/abilities/primal_beast/primalbeast_heavysteps.jpg`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${i.r.VIDEO_URL}/abilities/primal_beast/primalbeast_heavysteps.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${i.r.VIDEO_URL}/abilities/primal_beast/primalbeast_heavysteps.mp4`,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: s().SlideAbilityContainer,
                                  children: [
                                    (0, e.jsx)("img", {
                                      className: s().SlideAbilityIcon,
                                      src: `${i.r.IMG_URL}/primalbeast/primal_beast_heavysteps.png`,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: s().AbilityText,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: s().AbilityName,
                                          children: (0, a.Wn)(
                                            "#primalbeast_ability2_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: s().AbilityDesc,
                                          children: (0, a.Wn)(
                                            "#primalbeast_ability2_desc",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)(t.q7, {
                            index: 2,
                            children: (0, e.jsxs)("div", {
                              className: s().SlideContainer,
                              children: [
                                (0, e.jsxs)("video", {
                                  className: s().AbilityVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${i.r.VIDEO_URL}/abilities/primal_beast/primal_beast_inhibition.jpg`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${i.r.VIDEO_URL}/abilities/primal_beast/primal_beast_inhibition.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${i.r.VIDEO_URL}/abilities/primal_beast/primal_beast_inhibition.mp4`,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: s().SlideAbilityContainer,
                                  children: [
                                    (0, e.jsx)("img", {
                                      className: s().SlideAbilityIcon,
                                      src: `${i.r.IMG_URL}/primalbeast/primal_beast_inhibition.png`,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: s().AbilityText,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: s().AbilityName,
                                          children: (0, a.Wn)(
                                            "#primalbeast_ability3_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: s().AbilityDesc,
                                          children: (0, a.Wn)(
                                            "#primalbeast_ability3_desc",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)(t.q7, {
                            index: 3,
                            children: (0, e.jsxs)("div", {
                              className: s().SlideContainer,
                              children: [
                                (0, e.jsxs)("video", {
                                  className: s().AbilityVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${i.r.VIDEO_URL}/abilities/primal_beast/primalbeast_pummel.jpg`,
                                  children: [
                                    (0, e.jsx)(A.z, {
                                      left: !0,
                                      color: "#000000",
                                      startPct: 50,
                                      midPct: 75,
                                      endPct: 100,
                                    }),
                                    (0, e.jsx)(A.z, {
                                      right: !0,
                                      color: "#000000",
                                      startPct: 90,
                                      midPct: 100,
                                      endPct: 90,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${i.r.VIDEO_URL}/abilities/primal_beast/primalbeast_pummel.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${i.r.VIDEO_URL}/abilities/primal_beast/primalbeast_pummel.mp4`,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: s().SlideAbilityContainer,
                                  children: [
                                    (0, e.jsx)("img", {
                                      className: s().SlideAbilityIcon,
                                      src: `${i.r.IMG_URL}/primalbeast/primal_beast_pummel.png`,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: s().AbilityText,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: s().AbilityName,
                                          children: (0, a.Wn)(
                                            "#primalbeast_ability4_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: s().AbilityDesc,
                                          children: (0, a.Wn)(
                                            "#primalbeast_ability4_desc",
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
                        className: s().CarouselDots,
                        children: [
                          (0, e.jsx)(t.cL, {
                            className: (0, p.A)(
                              s().AbilitySelector,
                              s().Slide0,
                            ),
                            slide: 0,
                            children: (0, e.jsx)("div", {}),
                          }),
                          (0, e.jsx)(t.cL, {
                            className: (0, p.A)(
                              s().AbilitySelector,
                              s().Slide1,
                            ),
                            slide: 1,
                            children: (0, e.jsx)("div", {}),
                          }),
                          (0, e.jsx)(t.cL, {
                            className: (0, p.A)(
                              s().AbilitySelector,
                              s().Slide2,
                            ),
                            slide: 2,
                            children: (0, e.jsx)("div", {}),
                          }),
                          (0, e.jsx)(t.cL, {
                            className: (0, p.A)(
                              s().AbilitySelector,
                              s().Slide3,
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
                  className: s().HeropediaSection,
                  children: [
                    (0, e.jsxs)("div", {
                      className: s().HeropediaText,
                      children: [
                        (0, a.Wn)("#primalbeast_heroes_title"),
                        (0, e.jsx)(y.N_, {
                          to: m.J.hero("primalbeast"),
                          children: (0, e.jsxs)("div", {
                            className: s().StandardButton,
                            children: [
                              (0, e.jsx)("div", {
                                className: s().ButtonText,
                                children: (0, a.Wn)("#primalbeast_heroes_btn"),
                              }),
                              (0, e.jsx)(g.U, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsx)("img", {
                        className: s().HeropediaImage,
                        src: `${i.r.IMG_URL}/heroes/crops/primal_beast.png`,
                      }),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: s().WallpaperSection,
                  children: [
                    (0, e.jsx)("div", {
                      className: s().WallpaperTitle,
                      children: (0, a.Wn)("#primalbeast_wallpaper"),
                    }),
                    (0, e.jsxs)("div", {
                      className: s().Wallpapers,
                      children: [
                        (0, e.jsxs)("div", {
                          className: s().WallpaperGroup,
                          children: [
                            (0, e.jsx)("a", {
                              href: `${i.r.IMG_URL}primalbeast/wallpapers/pb_wallpaper.jpg`,
                              children: (0, e.jsx)("div", {
                                className: s().Wallpaper,
                                children: (0, e.jsx)("img", {
                                  className: s().WallpaperImgDesktop,
                                  src: `${i.r.IMG_URL}/primalbeast/wallpapers/pb_wallpaper_thumb.jpg`,
                                }),
                              }),
                            }),
                            (0, e.jsx)("a", {
                              href: `${i.r.IMG_URL}primalbeast/wallpapers/pb_wallpaper_mobile.jpg`,
                              children: (0, e.jsx)("div", {
                                className: s().Wallpaper,
                                children: (0, e.jsx)("img", {
                                  className: s().WallpaperImgDesktop,
                                  src: `${i.r.IMG_URL}/primalbeast/wallpapers/pb_wallpaper_mobile_thumb.jpg`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: s().WallpaperGroup,
                          children: [
                            (0, e.jsx)("a", {
                              href: `${i.r.IMG_URL}primalbeast/wallpapers/pb_wallpaper_02.jpg`,
                              children: (0, e.jsx)("div", {
                                className: s().Wallpaper,
                                children: (0, e.jsx)("img", {
                                  className: s().WallpaperImgDesktop,
                                  src: `${i.r.IMG_URL}/primalbeast/wallpapers/pb_wallpaper_02_thumb.jpg`,
                                }),
                              }),
                            }),
                            (0, e.jsx)("a", {
                              href: `${i.r.IMG_URL}primalbeast/wallpapers/pb_wallpaper_02_mobile.jpg`,
                              children: (0, e.jsx)("div", {
                                className: s().Wallpaper,
                                children: (0, e.jsx)("img", {
                                  className: s().WallpaperImgDesktop,
                                  src: `${i.r.IMG_URL}/primalbeast/wallpapers/pb_wallpaper_mobile_02_thumb.jpg`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: s().PatchSection,
                  children: [
                    (0, e.jsx)("div", { className: s().Divider }),
                    (0, e.jsx)("div", {
                      className: s().PatchTitle,
                      children: (0, a.Wn)("#731_patch_title"),
                    }),
                    (0, e.jsxs)("div", {
                      className: s().PatchContainer,
                      children: [
                        (0, e.jsxs)("div", {
                          className: s().CreepsSection,
                          children: [
                            (0, e.jsx)("img", {
                              className: s().PatchImage,
                              src: `${i.r.IMG_URL}/primalbeast/new_creeps.png`,
                            }),
                            (0, e.jsx)("div", {
                              className: s().HeaderLabel,
                              children: (0, a.Wn)("#731_patch_creeps_title"),
                            }),
                            (0, e.jsxs)("div", {
                              className: s().PatchContent,
                              children: [
                                (0, e.jsx)("div", {
                                  className: s().CreepChangeDescription,
                                  children: (0, a.Wn)(
                                    "#731_patch_creeps_changes_desc",
                                  ),
                                }),
                                (0, e.jsxs)("video", {
                                  className: s().ShowcaseVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${i.r.VIDEO_URL}primalbeast/creeps_731.jpg`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${i.r.VIDEO_URL}primalbeast/creeps_731.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${i.r.VIDEO_URL}primalbeast/creeps_731.webm`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: s().TechiesSection,
                          children: [
                            (0, e.jsx)("img", {
                              className: s().PatchImage,
                              src: `${i.r.IMG_URL}/primalbeast/techies_spot_short.png`,
                            }),
                            (0, e.jsx)("div", {
                              className: s().HeaderLabel,
                              children: (0, a.Wn)("#731_patch_techies_title"),
                            }),
                            (0, e.jsxs)("div", {
                              className: s().PatchContent,
                              children: [
                                (0, e.jsx)("div", {
                                  className: s().TechiesChangeDescription,
                                  children: (0, a.Wn)(
                                    "#731_patch_techies_changes_desc",
                                  ),
                                }),
                                (0, e.jsx)("div", {
                                  className: s().TechiesAbilitiesTitle,
                                  children: (0, a.Wn)(
                                    "#731_patch_techies_abilities_title",
                                  ),
                                }),
                                (0, e.jsxs)("div", {
                                  className: s().TechiesAbilities,
                                  children: [
                                    (0, e.jsxs)("div", {
                                      className: s().TechiesAbility,
                                      children: [
                                        (0, e.jsx)("img", {
                                          className: s().TechiesAbilityImage,
                                          src: `${i.r.IMG_URL}/primalbeast/techies_sticky_bomb.png`,
                                        }),
                                        (0, e.jsxs)("div", {
                                          className: s().TechiesAbilityContent,
                                          children: [
                                            (0, e.jsxs)("div", {
                                              className:
                                                s().TechiesAbilityTitle,
                                              children: [
                                                (0, a.Wn)(
                                                  "#731_patch_techies_ability1_title",
                                                ),
                                                (0, e.jsx)("div", {
                                                  className:
                                                    s().NewAbilityLabel,
                                                  children: (0, a.Wn)(
                                                    "#731_patch_techies_abilities_label",
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, e.jsx)("div", {
                                              className: s().TechiesAbilityDesc,
                                              children: (0, a.Wn)(
                                                "#731_patch_techies_ability1_desc",
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: s().TechiesAbility,
                                      children: [
                                        (0, e.jsx)("img", {
                                          className: s().TechiesAbilityImage,
                                          src: `${i.r.IMG_URL}/primalbeast/techies_reactive_taser.png`,
                                        }),
                                        (0, e.jsxs)("div", {
                                          className: s().TechiesAbilityContent,
                                          children: [
                                            (0, e.jsxs)("div", {
                                              className:
                                                s().TechiesAbilityTitle,
                                              children: [
                                                (0, a.Wn)(
                                                  "#731_patch_techies_ability2_title",
                                                ),
                                                (0, e.jsx)("div", {
                                                  className:
                                                    s().NewAbilityLabel,
                                                  children: (0, a.Wn)(
                                                    "#731_patch_techies_abilities_label",
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, e.jsx)("div", {
                                              className: s().TechiesAbilityDesc,
                                              children: (0, a.Wn)(
                                                "#731_patch_techies_ability2_desc",
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: s().TechiesAbility,
                                      children: [
                                        (0, e.jsx)("img", {
                                          className: s().TechiesAbilityImage,
                                          src: `${i.r.IMG_URL}/primalbeast/techies_blast_off.png`,
                                        }),
                                        (0, e.jsxs)("div", {
                                          className: s().TechiesAbilityContent,
                                          children: [
                                            (0, e.jsx)("div", {
                                              className:
                                                s().TechiesAbilityTitle,
                                              children: (0, a.Wn)(
                                                "#731_patch_techies_ability3_title",
                                              ),
                                            }),
                                            (0, e.jsx)("div", {
                                              className: s().TechiesAbilityDesc,
                                              children: (0, a.Wn)(
                                                "#731_patch_techies_ability3_desc",
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: s().TechiesAbility,
                                      children: [
                                        (0, e.jsx)("img", {
                                          className: s().TechiesAbilityImage,
                                          src: `${i.r.IMG_URL}/primalbeast/techies_land_mines.png`,
                                        }),
                                        (0, e.jsxs)("div", {
                                          className: s().TechiesAbilityContent,
                                          children: [
                                            (0, e.jsx)("div", {
                                              className:
                                                s().TechiesAbilityTitle,
                                              children: (0, a.Wn)(
                                                "#731_patch_techies_ability4_title",
                                              ),
                                            }),
                                            (0, e.jsx)("div", {
                                              className: s().TechiesAbilityDesc,
                                              children: (0, a.Wn)(
                                                "#731_patch_techies_ability4_desc",
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
                            (0, e.jsxs)("div", {
                              className: s().HeropediaSection,
                              children: [
                                (0, e.jsxs)("div", {
                                  className: s().HeropediaText,
                                  children: [
                                    (0, a.Wn)(
                                      "#731_patch_techies_details_header",
                                    ),
                                    (0, e.jsx)(y.N_, {
                                      to: m.J.hero("techies"),
                                      children: (0, e.jsxs)("div", {
                                        className: s().StandardButton,
                                        children: [
                                          (0, e.jsx)("div", {
                                            className: s().ButtonText,
                                            children: (0, a.Wn)(
                                              "#primalbeast_heroes_btn",
                                            ),
                                          }),
                                          (0, e.jsx)(g.U, {}),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, e.jsx)("div", {
                                  children: (0, e.jsx)("img", {
                                    className: s().HeropediaImage,
                                    src: `${i.r.IMG_URL}/heroes/crops/techies.png`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: s().LowerPatch,
                          children: [
                            (0, e.jsx)(n.fs, { patchnotes: r?.general_notes }),
                            (0, e.jsx)(n.wL, { patchnotes: r?.neutral_creeps }),
                            (0, e.jsx)(n.ZV, {
                              patchnotes: r?.items,
                              header: (0, e.jsxs)("div", {
                                className: s().ItemsSection,
                                children: [
                                  (0, e.jsx)("img", {
                                    className: s().PatchImage,
                                    src: `${i.r.IMG_URL}/primalbeast/items.png`,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().ItemChangeDescription,
                                    children: (0, a.Wn)(
                                      "#731_patch_items_changes_desc",
                                    ),
                                  }),
                                ],
                              }),
                            }),
                            (0, e.jsx)(n.ZV, {
                              patchnotes: r?.neutral_items,
                              is_neutrals: !0,
                            }),
                            (0, e.jsx)(n.ob, { patchnotes: r?.heroes }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)(L.K, {}),
              ],
            });
          }
        };
        x = P([b.PA], x);
      },
      11417: (d) => {
        d.exports = {
          RightArrow: "_1aWAcVv4khhRKQHKyqIDl5",
          UpRightArrow: "_3KCtpfqeVGR0eaqc5YB4iF",
        };
      },
      60901: (d) => {
        d.exports = {
          Tooltip: "_2FBKvDaa7o3ZdxnBhsjEVV",
          CarouselFade: "_3qj-rjgAD4epxDQflyLDH4",
          StandardButton: "AABmqSJ4FUaokDGqK7LuB",
          ButtonText: "fdxoHZ-1eDumWkX7EZQwr",
          Icon: "_34WavVBFTL3Z4ralXsTEbE",
          Play: "_2JCY1vDw4X8fkMh6QFjAPA",
          SteamLogo: "_1vJld-1iabfWUbjbJTsMJn",
          ToolTip: "exPNn7WfC7bF1L4yvq1ak",
          PlayerReportTooltip: "N7XaJDWnz2KlNDtQqQ66l",
          PrimalBeastPage: "_1loT6zyNYv-rZF5WMeNJK2",
          HeaderSection: "_35jV5inDRoRJ5SAFgVYIwu",
          BottomFade: "_1Qst_1DhoOllkcotTRPytU",
          BackgroundVideoContainer: "_3SElaec3we-7T4OAiFAgnW",
          LeavesLeft: "_349MYJGNpBksxoirH6gjfW",
          LeavesRight: "_31uj63dymD-vB-p0SNzCUh",
          TitleContainer: "_2fKTOGR2qCLx0lidyQIAbM",
          TitleIntro: "_3YpgxoT6jYbZ8nRKtk0i8",
          HeroName: "_3wAMjxTBvuueBKgafHZH61",
          HeroLogo: "UdiMmmOseDcelVTiqN0y5",
          Complexity: "_17y_03-b448Kze05qKLRkW",
          Roles: "_88lTj-Jv1GvQmw4fJ6yPj",
          HeroRole: "_8DJKvKNbe8tbZIngmfYAp",
          HeroIntro: "_2cS0otL1l_E9_pCkH4Y36U",
          LoreSection: "mnIkJXGIM3thIWa778tgm",
          LoreHeader: "_1z6s08nk2n7RRmzAsFfQ4",
          LoreText: "_1IfTtfrAF_1lqdyCL9DWRz",
          AbilitySection: "_2yK1CPDC7H4ZS_IneiRMWP",
          SlideContainer: "_2apDuhWEjCzlWdaKyvwTpJ",
          CarouselDots: "_3BQj6zTscB3QmbSpYndaxF",
          AbilitySelector: "_2D9KZne1xmoWFZ94murK55",
          Slide0: "_2TxMdzw0js2aNFNDySu1lS",
          Slide1: "_12WwrcFa02xHni8mQHhx9x",
          Slide2: "_2pompVlS7210hC1hles2bN",
          Slide3: "_3zX2BEiHvWBIx_Fu8bRX6p",
          SlideAbilityContainer: "_1GE-xcMnkRXd3e_V3ohNkz",
          SlideAbilityIcon: "_39XW0xAzlUEOfYCn0Xljf3",
          AbilityName: "_3uADOXmx19M-aoW8a8nl_P",
          AbilityDesc: "_1dyzFz3P0l-qeHlC9MuRBN",
          HeropediaSection: "_33H2Ukxk1SUfyf618S0R7W",
          HeropediaImage: "_2kyS3FDVMSU7Q7JKgJ9j5-",
          HeropediaHeader: "_1Nx4-DeVsx70QTWOFUsU-Z",
          HeropediaText: "_13tEBJCAIESb7EjzP67zwO",
          WallpaperSection: "Fi9K-0nmBrmb35Vj7x5Uz",
          WallpaperTitle: "_2SyKfvkFTsTBZT_WhfZ0hX",
          Wallpapers: "B3Gehg7azqA6lTGbDp6UR",
          WallpaperGroup: "_3EhrquEGZJQ7ebJ7tlZ2lQ",
          Wallpaper: "_1hsc3wziuYBvrY1u5edOBB",
          PatchSection: "_1VHhmOCzAJNmiM9NqTX35s",
          Divider: "JCYR8OL3buX1mfGavphGF",
          PatchTitle: "_5txd6KwUdgraw9fGcYsq0",
          PatchImage: "_3GGOrHExMB37neYtgSmita",
          ShowcaseVideo: "O5eiPr7DeEo0qgVWwGTy3",
          CreepsSection: "_2xsXR9RWXrviko4TFo69qp",
          PatchContainer: "_2WmfKO9mIvQ5DAF1mAwdA4",
          HeaderLabel: "_3puUPYiEod_pk6OnTHBWHE",
          PatchContent: "J7JEAIPGweJXHvwegmlAa",
          CreepChangeDescription: "_2Ok6HI5IiCl_kUmGAGzML3",
          PatchCreepsImage: "_1DH4NxfJCmQWvGDqtw5les",
          TechiesChangeDescription: "_3Ym0EOBQENAVfrdnpsCV2s",
          PatchTechiesImage: "_32S9_oZwS618iy8ZsGkLEN",
          ItemChangeDescription: "_13AkmrBoF0FMEs_1NWw3Xf",
          PatchItemsImage: "VFg98CXd9X3Vo6iHDn-fA",
          LowerPatch: "KhTWpjl1r7GnIp_tyhR5C",
          TechiesAbilitiesTitle: "l3mk4VuLymUam1oH_xZJY",
          TechiesAbilities: "_1vjVZz-J_t36NiXujOZzMr",
          TechiesAbility: "pXMMrZKWTQifa2uIX_2UI",
          TechiesAbilityImage: "_3h0kkNuvyR7TFC1b73i1Ae",
          TechiesAbilityContent: "TFKgh29Eybe25OBZbXTrK",
          TechiesAbilityTitle: "_32KTypEj6QLpDkboV4lwb4",
          NewAbilityLabel: "_3gTPJW3TNAtFeBby7vPOL2",
          TechiesAbilityDesc: "kNIsaYVZ-ZM2UZiqu4I0I",
          TechiesSection: "_1VVnNIxh6oZP1ETsertgr3",
          rotate: "_22ADA2u6XiD_C9JefALU4u",
        };
      },
    },
  ]);
})();
