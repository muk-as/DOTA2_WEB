// 10659.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [10659],
    {
      83695: (n, j, s) => {
        "use strict";
        s.d(j, { U: () => c });
        var e = s(69500),
          r = s(11417),
          v = s.n(r),
          l = s(2095);
        const c = () =>
            (0, e.jsx)("div", {
              className: v().RightArrow,
              style: {
                backgroundImage: `url( ${l.r.IMG_URL}/icons/arrow_right.svg )`,
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
      22586: (n, j, s) => {
        "use strict";
        s.d(j, { C: () => m, _: () => g });
        var e = s(69500),
          r = s(7552),
          v = s(68542),
          l = s.n(v),
          c = s(2095),
          t = s(8305),
          u = s(15001),
          N = s(37536),
          g = ((i) => (
            (i[(i.TOP = 0)] = "TOP"),
            (i[(i.BOTTOM = 1)] = "BOTTOM"),
            (i[(i.LEFT = 2)] = "LEFT"),
            (i[(i.RIGHT = 3)] = "RIGHT"),
            i
          ))(g || {});
        const m = (i) => {
          const [y, p] = (0, r.useState)(!1),
            [P, a] = (0, r.useState)(i.strYouTubeVideoID == null),
            L = (0, r.useRef)(null);
          let _ =
            ".LabelStyleHack { background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; ";
          i.labelColors &&
            (i.labelColors.length > 1
              ? (_ += `background-image: -webkit-linear-gradient( left, ${i.labelColors.join(", ")} ); `)
              : (_ += `background-image: -webkit-linear-gradient( left, ${i.labelColors[0]}, ${i.labelColors[0]} ); `));
          const o = i.glowDetails?.sort((d, R) => d.size - R.size);
          return (
            o &&
              ((_ += `-webkit-filter: ${o.map((d) => `drop-shadow( 0px 0px ${d.size}px ${d.color} )`).join(" ")}; `),
              (_ += `filter: ${o.map((d) => `drop-shadow( 0px 0px ${d.size}px ${d.color} )`).join(" ")}; `)),
            (0, e.jsxs)("div", {
              className: l().TrailerOverlay,
              children: [
                (0, e.jsx)("div", { className: l().FadeBottom }),
                i.strBackgroundImage &&
                  !i.strBackgroundVideo &&
                  (0, e.jsx)("img", {
                    className: l().BackgroundImage,
                    src: `${c.r.IMG_URL}${i.strBackgroundImage}`,
                  }),
                i.strBackgroundVideo &&
                  (0, e.jsx)("div", {
                    className: l().BackgroundVideo,
                    children: (0, e.jsxs)("video", {
                      className: l().BackgroundVideo,
                      autoPlay: !0,
                      preload: "auto",
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      poster: `${c.r.IMG_URL}${i.strBackgroundImage}`,
                      children: [
                        (0, e.jsx)("source", {
                          type: "video/webm",
                          src: `${c.r.VIDEO_URL}${i.strBackgroundVideo}.webm`,
                        }),
                        (0, e.jsx)("source", {
                          type: "video/mp4",
                          src: `${c.r.VIDEO_URL}${i.strBackgroundVideo}.mp4`,
                        }),
                      ],
                    }),
                  }),
                (0, e.jsxs)("div", {
                  className: (0, u.A)(l().TrailerContainer, y && l().Playing),
                  children: [
                    i.strYouTubeVideoID &&
                      (0, e.jsx)(N.N1, {
                        video: i.strYouTubeVideoID,
                        autoplay: !1,
                        playsInline: !0,
                        controls: !0,
                        ref: L,
                        onPlayerReady: () => a(!0),
                        onBuffering: () => p(!0),
                        onPlaying: () => p(!0),
                        onPaused: () => p(!1),
                        onMovieEnd: () => p(!1),
                      }),
                    i.strForegroundVideo &&
                      (0, e.jsxs)("video", {
                        className: l().BackgroundVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${c.r.IMG_URL}${i.strBackgroundImage}`,
                        children: [
                          (0, e.jsx)("source", {
                            type: "video/webm",
                            src: `${c.r.VIDEO_URL}${i.strForegroundVideo}.webm`,
                          }),
                          (0, e.jsx)("source", {
                            type: "video/mp4",
                            src: `${c.r.VIDEO_URL}${i.strForegroundVideo}.mp4`,
                          }),
                        ],
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, u.A)(
                    l().LogoElementContainer,
                    i.eLogoPosition == 0 && l().LogoTop,
                    i.eLogoPosition == 1 && l().LogoBottom,
                    i.eLogoPosition == 2 && l().LogoLeft,
                    i.eLogoPosition == 3 && l().LogoRight,
                  ),
                  children: [
                    i.logoElement,
                    (0, e.jsxs)("div", {
                      className: (0, u.A)(
                        l().PlayButtonContainer,
                        (y || !P) && l().Hide,
                      ),
                      onClick: () => {
                        p(!0), L.current?.PlayVideo(!1);
                      },
                      children: [
                        (0, e.jsx)("div", {
                          className: l().Button,
                          style: {
                            backgroundImage: `url( ${c.r.IMG_URL}${i.strPlayButton} )`,
                          },
                        }),
                        (0, e.jsx)("style", { children: _ }),
                        (0, e.jsx)("div", {
                          className: (0, u.A)(l().Label, "LabelStyleHack"),
                          children: (0, t.Wn)(i.strPlayButtonLabel),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      },
      10659: (n, j, s) => {
        "use strict";
        s.r(j), s.d(j, { default: () => E });
        var e = s(69500),
          r = s(2095),
          v = s(11778),
          l = s(8305),
          c = s(3878),
          t = s(32389),
          u = s(7552),
          N = s(73202),
          g = s(45237),
          m = s(15001),
          i = s(45488),
          y = s(63177),
          p = s(42616),
          P = s(15185),
          a = s.n(P),
          L = s(83695),
          _ = s(22586),
          o = s(73455),
          d = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          W = (M, h, A, I) => {
            for (
              var x = I > 1 ? void 0 : I ? R(h, A) : h, b = M.length - 1, D;
              b >= 0;
              b--
            )
              (D = M[b]) && (x = (I ? D(h, A, x) : D(x)) || x);
            return I && x && d(h, A, x), x;
          };
        let E = class extends u.Component {
          render() {
            const M = i.o.getPatchNotes("7.29", r.r.LANGUAGE);
            return (0, e.jsxs)("div", {
              className: a().MarciPage,
              children: [
                (0, e.jsx)(y.A, { bOverlapping: !0 }),
                (0, e.jsx)(N.mg, {
                  children: (0, e.jsx)("title", {
                    children: (0, l.Wn)("#marci_title"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: a().HeaderSection,
                  children: [
                    (0, e.jsx)(o.z, {
                      left: !0,
                      color: "#000000",
                      startPct: 90,
                      midPct: 100,
                      endPct: 90,
                    }),
                    (0, e.jsx)(o.z, {
                      right: !0,
                      color: "#000000",
                      startPct: 90,
                      midPct: 100,
                      endPct: 90,
                    }),
                    (0, e.jsx)(o.z, {
                      top: !0,
                      color: "#000000",
                      startPct: 0,
                      midPct: 100,
                      endPct: 20,
                    }),
                    (0, e.jsxs)("div", {
                      className: a().TitleContainer,
                      "data-aos": "fade-up",
                      "data-aos-delay": "200",
                      "data-aos-duration": "2000",
                      children: [
                        (0, e.jsx)(_.C, {
                          strBackgroundVideo: "marci/marci",
                          strPlayButton: "marci/play_button.png",
                          strPlayButtonLabel: "#marci_play_trailer",
                          strYouTubeVideoID: "CJuoqAi9ugA",
                          labelColors: ["#fff5c2"],
                          glowDetails: [{ size: 8, color: "#ff6b27" }],
                          eLogoPosition: _._.BOTTOM,
                        }),
                        (0, e.jsx)("div", {
                          className: a().TitleIntro,
                          children: (0, l.Wn)("#marci_intro"),
                        }),
                        (0, e.jsx)("img", {
                          className: (0, m.A)(a().HeroLogo, a().Img1),
                          onError: (h) =>
                            (h.target.src = `${r.r.IMG_URL}/marci/marci_logo_english.png`),
                          src: `${r.r.IMG_URL}/marci/marci_logo_${r.r.LANGUAGE}.png`,
                        }),
                        (0, e.jsx)("div", {
                          className: a().Complexity,
                          children: (0, e.jsx)("img", {
                            src: `${r.r.IMG_URL}/marci/difficulty.png`,
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: a().Roles,
                          children: [
                            (0, e.jsx)("div", {
                              className: a().HeroRole,
                              children: (0, l.Wn)("#marci_role1"),
                            }),
                            (0, e.jsx)("div", {
                              className: a().HeroRole,
                              children: (0, l.Wn)("#marci_role2"),
                            }),
                            (0, e.jsx)("div", {
                              className: a().HeroRole,
                              children: (0, l.Wn)("#marci_role3"),
                            }),
                            (0, e.jsx)("div", {
                              className: a().HeroRole,
                              children: (0, l.Wn)("#marci_role4"),
                            }),
                            (0, e.jsx)("div", {
                              className: a().HeroRole,
                              children: (0, l.Wn)("#marci_role5"),
                            }),
                            (0, e.jsx)("div", {
                              className: a().HeroRole,
                              children: (0, l.Wn)("#marci_role6"),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: a().HeroHype,
                          children: (0, l.Wn)("#marci_hype"),
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
                          children: (0, l.Wn)("#marci_lore_title"),
                        }),
                        (0, e.jsx)("div", {
                          className: a().LoreText,
                          children: (0, l.Wn)("#marci_lore_desc"),
                        }),
                        (0, e.jsx)("div", {
                          className: a().LoreText,
                          children: (0, l.Wn)("#marci_lore_desc2"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: a().AbilitySection,
                  children: (0, e.jsxs)(t.gi, {
                    className: a().AbilityCarousel,
                    naturalSlideWidth: 100,
                    naturalSlideHeight: 56.25,
                    totalSlides: 4,
                    children: [
                      (0, e.jsxs)(t.Ap, {
                        children: [
                          (0, e.jsx)(t.q7, {
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
                                  poster: `${r.r.VIDEO_URL}/abilities/marci/marci_dispose.jpg`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${r.r.VIDEO_URL}/abilities/marci/marci_dispose.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${r.r.VIDEO_URL}/abilities/marci/marci_dispose.mp4`,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().SlideAbilityContainer,
                                  children: [
                                    (0, e.jsx)("img", {
                                      className: a().SlideAbilityIcon,
                                      src: `${r.r.IMG_URL}/marci/marci_dispose.png`,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: a().AbilityText,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: a().AbilityName,
                                          children: (0, l.Wn)(
                                            "#marci_ability1_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: a().AbilityDesc,
                                          children: (0, l.Wn)(
                                            "#marci_ability1_desc",
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
                              className: a().SlideContainer,
                              children: [
                                (0, e.jsxs)("video", {
                                  className: a().AbilityVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${r.r.VIDEO_URL}/abilities/marci/marci_companion_run.jpg`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${r.r.VIDEO_URL}/abilities/marci/marci_companion_run.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${r.r.VIDEO_URL}/abilities/marci/marci_companion_run.mp4`,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().SlideAbilityContainer,
                                  children: [
                                    (0, e.jsx)("img", {
                                      className: a().SlideAbilityIcon,
                                      src: `${r.r.IMG_URL}/marci/marci_rebound.png`,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: a().AbilityText,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: a().AbilityName,
                                          children: (0, l.Wn)(
                                            "#marci_ability2_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: a().AbilityDesc,
                                          children: (0, l.Wn)(
                                            "#marci_ability2_desc",
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
                              className: a().SlideContainer,
                              children: [
                                (0, e.jsxs)("video", {
                                  className: a().AbilityVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${r.r.VIDEO_URL}/abilities/marci/marci_sidekick.jpg`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${r.r.VIDEO_URL}/abilities/marci/marci_guardian.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${r.r.VIDEO_URL}/abilities/marci/marci_guardian.mp4`,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().SlideAbilityContainer,
                                  children: [
                                    (0, e.jsx)("img", {
                                      className: a().SlideAbilityIcon,
                                      src: `${r.r.IMG_URL}/marci/marci_sidekick.png`,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: a().AbilityText,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: a().AbilityName,
                                          children: (0, l.Wn)(
                                            "#marci_ability3_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: a().AbilityDesc,
                                          children: (0, l.Wn)(
                                            "#marci_ability3_desc",
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
                              className: a().SlideContainer,
                              children: [
                                (0, e.jsxs)("video", {
                                  className: a().AbilityVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${r.r.VIDEO_URL}/abilities/marci/marci_unleash.jpg`,
                                  children: [
                                    (0, e.jsx)(o.z, {
                                      left: !0,
                                      color: "#000000",
                                      startPct: 50,
                                      midPct: 75,
                                      endPct: 100,
                                    }),
                                    (0, e.jsx)(o.z, {
                                      right: !0,
                                      color: "#000000",
                                      startPct: 90,
                                      midPct: 100,
                                      endPct: 90,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${r.r.VIDEO_URL}/abilities/marci/marci_unleash.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/mp4",
                                      src: `${r.r.VIDEO_URL}/abilities/marci/marci_unleash.mp4`,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().SlideAbilityContainer,
                                  children: [
                                    (0, e.jsx)("img", {
                                      className: a().SlideAbilityIcon,
                                      src: `${r.r.IMG_URL}/marci/marci_unleash.png`,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: a().AbilityText,
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: a().AbilityName,
                                          children: (0, l.Wn)(
                                            "#marci_ability4_title",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: a().AbilityDesc,
                                          children: (0, l.Wn)(
                                            "#marci_ability4_desc",
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
                          (0, e.jsx)(t.cL, {
                            className: (0, m.A)(
                              a().AbilitySelector,
                              a().Slide0,
                            ),
                            slide: 0,
                            children: (0, e.jsx)("div", {}),
                          }),
                          (0, e.jsx)(t.cL, {
                            className: (0, m.A)(
                              a().AbilitySelector,
                              a().Slide1,
                            ),
                            slide: 1,
                            children: (0, e.jsx)("div", {}),
                          }),
                          (0, e.jsx)(t.cL, {
                            className: (0, m.A)(
                              a().AbilitySelector,
                              a().Slide2,
                            ),
                            slide: 2,
                            children: (0, e.jsx)("div", {}),
                          }),
                          (0, e.jsx)(t.cL, {
                            className: (0, m.A)(
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
                        (0, l.Wn)("#marci_heroes_title"),
                        (0, e.jsx)(g.N_, {
                          to: v.J.hero("marci"),
                          children: (0, e.jsxs)("div", {
                            className: a().StandardButton,
                            children: [
                              (0, e.jsx)("div", {
                                className: a().ButtonText,
                                children: (0, l.Wn)("#marci_heroes_btn"),
                              }),
                              (0, e.jsx)(L.U, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsx)("img", {
                        className: a().HeropediaImage,
                        src: `${r.r.IMG_URL}/heroes/crops/marci.png`,
                      }),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: a().WallpaperSection,
                  children: [
                    (0, e.jsx)("div", {
                      className: a().WallpaperTitle,
                      children: (0, l.Wn)("#marci_wallpapers"),
                    }),
                    (0, e.jsxs)("div", {
                      className: a().Wallpapers,
                      children: [
                        (0, e.jsxs)("div", {
                          className: a().WallpaperGroup,
                          children: [
                            (0, e.jsx)("a", {
                              href: `${r.r.IMG_URL}marci/wallpapers/marci_wallpaper_1.png`,
                              children: (0, e.jsx)("div", {
                                className: a().Wallpaper,
                                children: (0, e.jsx)("img", {
                                  className: a().WallpaperImgDesktop,
                                  src: `${r.r.IMG_URL}/marci/wallpapers/marci_wallpaper_1_thumb.jpg`,
                                }),
                              }),
                            }),
                            (0, e.jsx)("a", {
                              href: `${r.r.IMG_URL}marci/wallpapers/marci_wallpaper_1_mobile.png`,
                              children: (0, e.jsx)("div", {
                                className: a().Wallpaper,
                                children: (0, e.jsx)("img", {
                                  className: a().WallpaperImgDesktop,
                                  src: `${r.r.IMG_URL}/marci/wallpapers/marci_wallpaper_1_mobile_thumb.jpg`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: a().WallpaperGroup,
                          children: [
                            (0, e.jsx)("a", {
                              href: `${r.r.IMG_URL}marci/wallpapers/marci_wallpaper_2.png`,
                              children: (0, e.jsx)("div", {
                                className: a().Wallpaper,
                                children: (0, e.jsx)("img", {
                                  className: a().WallpaperImgDesktop,
                                  src: `${r.r.IMG_URL}/marci/wallpapers/marci_wallpaper_2_thumb.jpg`,
                                }),
                              }),
                            }),
                            (0, e.jsx)("a", {
                              href: `${r.r.IMG_URL}marci/wallpapers/marci_wallpaper_2_mobile.png`,
                              children: (0, e.jsx)("div", {
                                className: a().Wallpaper,
                                children: (0, e.jsx)("img", {
                                  className: a().WallpaperImgDesktop,
                                  src: `${r.r.IMG_URL}/marci/wallpapers/marci_wallpaper_2_mobile_thumb.jpg`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: a().WallpaperGroup,
                          children: [
                            (0, e.jsx)("a", {
                              href: `${r.r.IMG_URL}marci/wallpapers/marci_wallpaper_3.png`,
                              children: (0, e.jsx)("div", {
                                className: a().Wallpaper,
                                children: (0, e.jsx)("img", {
                                  className: a().WallpaperImgDesktop,
                                  src: `${r.r.IMG_URL}/marci/wallpapers/marci_wallpaper_3_thumb.jpg`,
                                }),
                              }),
                            }),
                            (0, e.jsx)("a", {
                              href: `${r.r.IMG_URL}marci/wallpapers/marci_wallpaper_3_mobile.png`,
                              children: (0, e.jsx)("div", {
                                className: a().Wallpaper,
                                children: (0, e.jsx)("img", {
                                  className: a().WallpaperImgDesktop,
                                  src: `${r.r.IMG_URL}/marci/wallpapers/marci_wallpaper_3_mobile_thumb.jpg`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: a().WallpaperGroup,
                          children: [
                            (0, e.jsx)("a", {
                              href: `${r.r.IMG_URL}marci/wallpapers/marci_wallpaper_4.png`,
                              children: (0, e.jsx)("div", {
                                className: a().Wallpaper,
                                children: (0, e.jsx)("img", {
                                  className: a().WallpaperImgDesktop,
                                  src: `${r.r.IMG_URL}/marci/wallpapers/marci_wallpaper_4_thumb.jpg`,
                                }),
                              }),
                            }),
                            (0, e.jsx)("a", {
                              href: `${r.r.IMG_URL}marci/wallpapers/marci_wallpaper_4_mobile.png`,
                              children: (0, e.jsx)("div", {
                                className: a().Wallpaper,
                                children: (0, e.jsx)("img", {
                                  className: a().WallpaperImgDesktop,
                                  src: `${r.r.IMG_URL}/marci/wallpapers/marci_wallpaper_4_mobile_thumb.jpg`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)(p.K, {}),
              ],
            });
          }
        };
        E = W([c.PA], E);
      },
      11417: (n) => {
        n.exports = {
          RightArrow: "_1aWAcVv4khhRKQHKyqIDl5",
          UpRightArrow: "_3KCtpfqeVGR0eaqc5YB4iF",
        };
      },
      68542: (n) => {
        n.exports = {
          Tooltip: "vPqsoxB4SZ5OaBfKiEydA",
          CarouselFade: "hAvyIwR8b1rZkMv7x6W0R",
          StandardButton: "_2Zab103565xl_xT1cVpQEs",
          ButtonText: "_2a3EuJ4WeYLkoqwWpH5Ri9",
          Icon: "Y94c23Y_w2jokCR4lGKA_",
          Play: "_1CNtZLA2gHZ8ymgyQoHbxU",
          SteamLogo: "_3iteSkgq8UbR2X2WJ27v62",
          ToolTip: "_2nxCWm3g4YcFAY0KLSzCGA",
          PlayerReportTooltip: "_30rdien_0QJKd-3jEh9G5O",
          TrailerOverlay: "_1qRBJbPGm3QhLVrLWmySit",
          FadeBottom: "_2pwPAXt2k-rftAgv_wjzLA",
          BackgroundImage: "_3QPOXFbFzS9he7FQsj8NTs",
          BackgroundVideo: "cPWWJqsMRAF-SeFWNtnOY",
          TrailerContainer: "_6N_fnC6aRujycNcUlFNtc",
          Playing: "_20hTLVk2R6mvxAx2h7arvh",
          PlayButtonContainer: "_1pJy6fpDPQ6kiNjZxn9WPL",
          Hide: "_3QkmIDX_b-dy9_VS1ONsAk",
          Button: "YbfaFSIWFSENuH-j2DxDj",
          Label: "_1rT4Fa_dOdxV9pSL4QBPzH",
          LogoElementContainer: "_382RQUTfn1zhv67rVmnPE9",
          TitleIn: "_3jZp2TUtcQAlHXR5ZnLcaz",
          LogoTop: "_29trUxewuZY55AyMHZpZ58",
          LogoBottom: "D97oHluaL0iOS3OMOVXAB",
          LogoLeft: "_3NesB22LhOBs8xLXpNrWnM",
          LogoRight: "_20t2EwtIHCrooSxJDRyzLO",
        };
      },
      15185: (n) => {
        n.exports = {
          Tooltip: "_1h1rlRzCxcRyAzbP5vsMW1",
          CarouselFade: "_2v-4qlYdQKFlHgSg5HDun5",
          StandardButton: "_2fArQu8ov5BmjZzyEsFlXQ",
          ButtonText: "aPMwrrYVDxrLn80oMsc6j",
          Icon: "Wz_BvelENGvm9FfC2ZSeP",
          Play: "_2Ez0WrmfSQkq28pgMUtULW",
          SteamLogo: "_3hMlHkgYKSWgCFpNJmjoZh",
          ToolTip: "e0eeBhfQlp0rmnP0wyqMO",
          PlayerReportTooltip: "IUXgzXCrX_0hSMxYSNPbo",
          MarciPage: "_37c6_aknBUhcU7141a1IIB",
          HeaderSection: "_3Fan9jI1qc48ERMTz4b4em",
          BottomFade: "tBLlSxCspN7yh7Z0ErXIm",
          BackgroundVideoContainer: "o46kUaXC9BppzTgUyHwdn",
          PlayButtonPositioner: "_3pp-KQ8uP-vrBZrPhiqRCK",
          TitleContainer: "_2BJ2bMTwA771X3iMnZzNKg",
          TitleIntro: "_1L5ALcX63RjeADWV2LextU",
          HeroName: "EsoP6twsAZqlygBzLvW_G",
          HeroLogo: "_1BNq6W7pWzmaqBNadFS7qg",
          Complexity: "_2zffGMTKgPVC10R4AqS8tT",
          Roles: "_1k-bSRSANYJOA0kMyf-Ujr",
          HeroRole: "_2pVn5N9pKmF9iWZQSiP_pe",
          HeroHype: "A5A1daVhOjwGriZDOY-yq",
          LoreSection: "_3QWexvaPkVBufnk2eQCjna",
          LoreHeader: "_2nW__GeZvKEtvNT6RhJKGW",
          LoreText: "_1vQd64gisydUk2hGl0RNGf",
          AbilitySection: "_2k7w7LDoF0njOwjIx6-du0",
          SlideContainer: "_2AFcrCd_QpWx0aRvDHzpK7",
          CarouselDots: "_3G37r2IfMxeW9noFMlIT_n",
          AbilitySelector: "lTE8Myj2CdsF_HN3LuSvi",
          Slide0: "_3UFed5X0N3VJlIm3SXrfsG",
          Slide1: "_a5LbZ5UMdceWWwMaDziA",
          Slide2: "_2Oqm9PijctaZoQ7APwE1x6",
          Slide3: "fMmV0A6aWafNeFNxstwG6",
          SlideAbilityContainer: "_1M0oBVCR2WV0s6xp2Qxcgj",
          SlideAbilityIcon: "_40k-AGfls1ajgINgzFzj6",
          AbilityName: "bUHIFMlgyyEIPxeQLqKhj",
          AbilityDesc: "_2MqBDnmiw7cILDn90lz5E9",
          HeropediaSection: "_2V8of64fjgcxiMpYbPRnNN",
          HeropediaImage: "P-oJiRvnuYT7sB0kCMQAX",
          HeropediaHeader: "_2lfaOtf2LTjlljtx5vPgbC",
          HeropediaText: "_1TGJ8c_S39IqDOjXmyVXzy",
          WallpaperSection: "tLrG-PeAJ4vl-2NW0WfEM",
          WallpaperTitle: "_1j1Z2nns6ZxKjZ6_Rq_9s8",
          Wallpapers: "_3T90LY_olbPYC1mSKuK2aR",
          WallpaperGroup: "_3b9GZxiBb3U4J7_b4s9EZ4",
          Wallpaper: "_3nrF8fPs0FcOLsl1ZazYDA",
          rotate: "_1p9Cl9uMfdzrFHL1TlSkAB",
        };
      },
    },
  ]);
})();
