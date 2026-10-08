// 52329.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [52329],
    {
      83695: (h, x, l) => {
        "use strict";
        l.d(x, { U: () => g });
        var e = l(69500),
          i = l(11417),
          j = l.n(i),
          a = l(2095);
        const g = () =>
            (0, e.jsx)("div", {
              className: j().RightArrow,
              style: {
                backgroundImage: `url( ${a.r.IMG_URL}/icons/arrow_right.svg )`,
              },
            }),
          r = () =>
            jsx("div", {
              className: styles.UpRightArrow,
              style: {
                backgroundImage: `url( ${ConfigDota.IMG_URL}/icons/arrow_top_right.svg )`,
              },
            });
      },
      82237: (h, x, l) => {
        "use strict";
        l.d(x, { V: () => r });
        var e = l(8305),
          i = l(3878),
          j = l(7552),
          a = l(45488);
        function g(o, p) {
          (0, j.useEffect)(() => {
            a.o.RequestBPPrices([o]);
          }, [o]);
          const D = a.o.GetBPPrice(o);
          return D && D != "undefined" ? D : p;
        }
        const r = (0, i.PA)((o) => {
          const p = g(o.nItemDefID, o.strDefaultPrice);
          return (0, e.Wn)(o.strLocString, p);
        });
      },
      52329: (h, x, l) => {
        "use strict";
        l.r(x), l.d(x, { default: () => I });
        var e = l(69500),
          i = l(2095),
          j = l(11778),
          a = l(8305),
          g = l(3878),
          r = l(32389),
          o = l(7552),
          p = l(73202),
          D = l(45237),
          _ = l(15001),
          W = l(45488),
          R = l(63177),
          f = l(42616),
          C = l(42313),
          s = l.n(C),
          b = l(84899),
          S = l(83695),
          M = l(2130),
          P = l(82237),
          T = l(85286),
          y = l.n(T),
          A = Object.defineProperty,
          U = Object.getOwnPropertyDescriptor,
          O = (n, c, t, d) => {
            for (
              var m = d > 1 ? void 0 : d ? U(c, t) : c, u = n.length - 1, E;
              u >= 0;
              u--
            )
              (E = n[u]) && (m = (d ? E(c, t, m) : E(m)) || m);
            return d && m && A(c, t, m), m;
          };
        const v = [
            {
              posterDir: "abilities/muerta/muerta_dead_shot.jpg",
              videoSrcMp4: "abilities/muerta/muerta_dead_shot.mp4",
              imgSrc: "abilities/muerta_dead_shot.png",
              abilityName: "#muerta_ability1_title",
              abilityDesc: "#muerta_ability1_desc",
            },
            {
              posterDir: "abilities/muerta/muerta_the_calling.jpg",
              videoSrcMp4: "abilities/muerta/muerta_the_calling.mp4",
              imgSrc: "abilities/muerta_the_calling.png",
              abilityName: "#muerta_ability2_title",
              abilityDesc: "#muerta_ability2_desc",
            },
            {
              posterDir: "abilities/muerta/muerta_gunslinger.jpg",
              videoSrcMp4: "abilities/muerta/muerta_gunslinger.mp4",
              imgSrc: "abilities/muerta_gunslinger.png",
              abilityName: "#muerta_ability3_title",
              abilityDesc: "#muerta_ability3_desc",
            },
            {
              posterDir: "abilities/muerta/muerta_pierce_the_veil.jpg",
              videoSrcMp4: "abilities/muerta/muerta_pierce_the_veil.mp4",
              imgSrc: "abilities/muerta_pierce_the_veil.png",
              abilityName: "#muerta_ability4_title",
              abilityDesc: "#muerta_ability4_desc",
            },
          ],
          N = ({ index: n, video: c, name: t, onSlideIn: d }) => {
            const m = (0, o.useContext)(r.Yc),
              u = (0, o.useRef)(void 0),
              E =
                navigator.userAgent.toLowerCase().indexOf("safari") != -1 &&
                navigator.userAgent.toLowerCase().indexOf("macintosh") != -1;
            return (
              (0, o.useEffect)(() => {
                function L() {
                  u &&
                    u.current &&
                    m.state.currentSlide == n &&
                    (u.current.play(), d(t));
                }
                return m.subscribe(L), () => m.unsubscribe(L);
              }, [m, n, t, d]),
              (0, e.jsxs)("div", {
                className: s().SlideContainer,
                children: [
                  "$",
                  E
                    ? (0, e.jsx)("img", {
                        className: s().TreasureVideo,
                        src: `${i.r.VIDEO_URL}/muerta/${c}.png`,
                      })
                    : (0, e.jsx)("video", {
                        ref: u,
                        className: s().TreasureVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${i.r.VIDEO_URL}/muerta/${c}.png`,
                        children: (0, e.jsx)("source", {
                          type: "video/webm",
                          src: `${i.r.VIDEO_URL}/muerta/${c}.webm`,
                        }),
                      }),
                ],
              })
            );
          };
        let I = class extends o.Component {
          videoRef = o.createRef();
          navbarRef = o.createRef();
          introRef = o.createRef();
          eventRef = o.createRef();
          janitorsCornerRef = o.createRef();
          gameplayPatchRef = o.createRef();
          parallaxContainerRef = o.createRef();
          layer1Ref = o.createRef();
          bIsMacSafariBrowser;
          constructor(n) {
            super(n),
              (this.state = {
                bPlayingVideo: !1,
                treasureName: "#muerta_minigame_treasure_name3",
              }),
              (this.bIsMacSafariBrowser =
                navigator.userAgent.toLowerCase().indexOf("safari") != -1 &&
                navigator.userAgent.toLowerCase().indexOf("macintosh") != -1);
          }
          setPlayingVideo(n) {
            this.setState({ bPlayingVideo: n }),
              n ? this.videoRef.current.play() : this.videoRef.current.pause();
          }
          scrollToTarget(n) {
            n == this.introRef
              ? (console.log("scrolling"),
                this.parallaxContainerRef.current.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                }))
              : n.current.scrollIntoView({ behavior: "smooth" });
          }
          handleScroll = (n) => {
            const c = this.layer1Ref.current.getBoundingClientRect().top;
            (this.navbarRef.current.style.opacity = `${this.clamp(this.remapValue(c, 0, -100, 0, 1), 0, 1)}`),
              c > 0
                ? (this.navbarRef.current.style.visibility = "hidden")
                : (this.navbarRef.current.style.visibility = "visible"),
              y().refresh();
          };
          remapValue(n, c, t, d, m) {
            return d + ((m - d) * (n - c)) / (t - c);
          }
          clamp = (n, c, t) => Math.min(Math.max(n, c), t);
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
            const n = W.o.getPatchNotes("7.32e", i.r.LANGUAGE);
            let c = (0, M.wwZ)((0, M.sfN)(i.r.LANGUAGE));
            return (
              c === "zh-cn"
                ? (c = "zh-Hans")
                : c === "zh-tw" && (c = "zh-Hant"),
              (0, e.jsxs)("div", {
                className: s().MuertaPage,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, _.A)(
                      s().TrailerContainer,
                      this.state.bPlayingVideo ? null : s().Hidden,
                    ),
                    children: [
                      (0, e.jsxs)("video", {
                        ref: this.videoRef,
                        className: (0, _.A)(s().TrailerVideo),
                        autoPlay: !1,
                        preload: "none",
                        muted: !1,
                        loop: !1,
                        playsInline: !1,
                        controls: !0,
                        poster: `${i.r.IMG_URL}/muerta/muerta_trailer.jpg`,
                        crossOrigin: "anonymous",
                        children: [
                          (0, e.jsx)("source", {
                            type: "video/mp4",
                            src: `${i.r.VIDEO_URL}/muerta/muerta_trailer_${i.r.LANGUAGE}.mp4?reload1`,
                          }),
                          (0, e.jsx)("source", {
                            type: "video/mp4",
                            src: `${i.r.VIDEO_URL}/muerta/muerta_trailer_english.mp4`,
                          }),
                          (0, e.jsx)("track", {
                            label: `${i.r.LANGUAGE}`,
                            kind: "captions",
                            srcLang: c,
                            src: `${i.r.VIDEO_URL}/muerta/Muerta_${i.r.LANGUAGE}.vtt`,
                            default: !0,
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: s().CloseButton,
                        onClick: () => this.setPlayingVideo(!1),
                        children: (0, e.jsx)("img", {
                          className: s().CloseButtonImage,
                          src: `${i.r.IMG_URL}/close.png`,
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    ref: this.navbarRef,
                    className: (0, _.A)(s().AnchorNavigation),
                    children: [
                      (0, e.jsx)("div", {
                        className: s().AnchorLink,
                        onClick: () => this.scrollToTarget(this.introRef),
                        children: (0, a.Wn)("#muerta_navigation_intro"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().AnchorLink,
                        onClick: () => this.scrollToTarget(this.eventRef),
                        children: (0, a.Wn)("#muerta_navigation_event"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().AnchorLink,
                        onClick: () =>
                          this.scrollToTarget(this.janitorsCornerRef),
                        children: (0, a.Wn)("#muerta_navigation_janitor"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().AnchorLink,
                        onClick: () =>
                          this.scrollToTarget(this.gameplayPatchRef),
                        children: (0, a.Wn)("#muerta_navigation_gameplay"),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    ref: this.parallaxContainerRef,
                    className: s().ParallaxContainer,
                    children: [
                      (0, e.jsxs)("div", {
                        className: (0, _.A)(s().ParallaxLayer, s().Layer2),
                        children: [
                          (0, e.jsx)(R.A, { bOverlapping: !0 }),
                          (0, e.jsx)(p.mg, {
                            children: (0, e.jsx)("title", {
                              children: (0, a.Wn)("#muerta_title"),
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            ref: this.introRef,
                            className: s().BackgroundVideoContainer,
                            children: [
                              (0, e.jsx)("video", {
                                className: (0, _.A)(s().ForegroundVideo),
                                autoPlay: !0,
                                preload: "auto",
                                muted: !0,
                                loop: !0,
                                playsInline: !0,
                                controls: !1,
                                poster: `${i.r.IMG_URL}/muerta/muerta_loop.png`,
                                children: (0, e.jsx)("source", {
                                  type: "video/mp4",
                                  src: `${i.r.VIDEO_URL}/muerta/muerta_loop.mp4`,
                                }),
                              }),
                              (0, e.jsxs)("div", {
                                className: (0, _.A)(
                                  s().TitleContainer,
                                  this.state.bPlayingVideo && s().Hide,
                                ),
                                children: [
                                  (0, e.jsx)("div", {
                                    className: s().TitleIntro1,
                                    children: (0, a.Wn)("#muerta_title_pre"),
                                  }),
                                  (0, e.jsxs)("video", {
                                    className: s().TitleVideo,
                                    autoPlay: !0,
                                    preload: "auto",
                                    muted: !0,
                                    loop: !0,
                                    playsInline: !0,
                                    controls: !1,
                                    poster: `${i.r.VIDEO_URL}/muerta/dead_reckoning_logo_${i.r.LANGUAGE}.png`,
                                    children: [
                                      (0, e.jsx)("source", {
                                        type: 'video/mp4; codecs="hvc1"',
                                        src: `${i.r.VIDEO_URL}/muerta/dead_reckoning_logo_${i.r.LANGUAGE}.mov`,
                                      }),
                                      (0, e.jsx)("source", {
                                        type: "video/webm",
                                        src: `${i.r.VIDEO_URL}/muerta/dead_reckoning_logo_${i.r.LANGUAGE}.webm`,
                                      }),
                                      (0, e.jsx)("source", {
                                        type: "video/webm",
                                        src: `${i.r.VIDEO_URL}/muerta/dead_reckoning_logo_english.webm`,
                                      }),
                                    ],
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().TitleIntro2,
                                    children: (0, a.Wn)("#muerta_title_post"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        ref: this.layer1Ref,
                        className: (0, _.A)(s().ParallaxLayer, s().Layer1),
                        children: [
                          (0, e.jsx)("div", {
                            className: s().HeroInfoContainer,
                            children: (0, e.jsxs)("div", {
                              className: (0, _.A)(s().HeroInfoSection),
                              children: [
                                (0, e.jsxs)("video", {
                                  className: s().HeroLogo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  controls: !1,
                                  poster: `${i.r.VIDEO_URL}/muerta/muerta_logo_${i.r.LANGUAGE}.png`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: 'video/mp4; codecs="hvc1"',
                                      src: `${i.r.VIDEO_URL}/muerta/muerta_logo_${i.r.LANGUAGE}.mov`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${i.r.VIDEO_URL}/muerta/muerta_logo_${i.r.LANGUAGE}.webm`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${i.r.VIDEO_URL}/muerta/muerta_logo_english.webm`,
                                    }),
                                  ],
                                }),
                                (0, e.jsx)("div", {
                                  className: s().HeroIntroTitle,
                                  children: (0, a.Wn)("#new_hero_tag"),
                                }),
                                (0, e.jsx)("div", {
                                  className: s().Complexity,
                                  children: (0, e.jsx)("img", {
                                    src: `${i.r.IMG_URL}/muerta/difficulty.png`,
                                  }),
                                }),
                                (0, e.jsxs)("div", {
                                  className: s().Roles,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: s().HeroRole,
                                      children: (0, a.Wn)("#muerta_role1"),
                                    }),
                                    (0, e.jsx)("div", {
                                      className: s().HeroRole,
                                      children: (0, a.Wn)("#muerta_role2"),
                                    }),
                                    (0, e.jsx)("div", {
                                      className: s().HeroRole,
                                      children: (0, a.Wn)("#muerta_role3"),
                                    }),
                                    (0, e.jsx)("div", {
                                      className: s().HeroRole,
                                      children: (0, a.Wn)("#muerta_role4"),
                                    }),
                                  ],
                                }),
                                (0, e.jsx)("div", {
                                  className: s().HeroIntro,
                                  children: (0, a.Wn)("#muerta_intro"),
                                }),
                                (0, e.jsxs)("div", {
                                  className: s().ButtonsSection,
                                  children: [
                                    (0, e.jsx)(D.N_, {
                                      to: j.J.hero("muerta"),
                                      children: (0, e.jsxs)("div", {
                                        className: s().StandardButton,
                                        children: [
                                          (0, e.jsx)("div", {
                                            className: s().ButtonText,
                                            children: (0, a.Wn)(
                                              "#muerta_heroes_btn",
                                            ),
                                          }),
                                          (0, e.jsx)(S.U, {}),
                                        ],
                                      }),
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: s().StandardButton,
                                      onClick: () => this.setPlayingVideo(!0),
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: s().ButtonText,
                                          children: (0, a.Wn)(
                                            "#muerta_play_trailer",
                                          ),
                                        }),
                                        (0, e.jsx)(S.U, {}),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)("div", { className: s().ThickBorder }),
                          (0, e.jsx)("div", {
                            className: s().AbilitySection,
                            children: (0, e.jsxs)(r.gi, {
                              className: s().AbilityCarousel,
                              naturalSlideWidth: 100,
                              naturalSlideHeight: 56.25,
                              totalSlides: v.length,
                              children: [
                                (0, e.jsx)(r.Ap, {
                                  className: s().AbilitySlider,
                                  children: v.map((t, d) =>
                                    (0, e.jsxs)(
                                      r.q7,
                                      {
                                        index: d,
                                        children: [
                                          (0, e.jsxs)("video", {
                                            className: s().AbilityVideo,
                                            autoPlay: !0,
                                            preload: "auto",
                                            muted: !0,
                                            loop: !0,
                                            playsInline: !0,
                                            poster: `${i.r.VIDEO_URL}/${t.posterDir}`,
                                            children: [
                                              t.videoSrcWebm &&
                                                (0, e.jsx)("source", {
                                                  type: "video/webm",
                                                  src: `${i.r.VIDEO_URL}/${t.videoSrcWebm}`,
                                                }),
                                              t.videoSrcMp4 &&
                                                (0, e.jsx)("source", {
                                                  type: "video/mp4",
                                                  src: `${i.r.VIDEO_URL}/${t.videoSrcMp4}`,
                                                }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className:
                                              s().SlideAbilityContainer,
                                            children: [
                                              (0, e.jsx)("img", {
                                                className: s().SlideAbilityIcon,
                                                src: `${i.r.IMG_URL}/${t.imgSrc}`,
                                              }),
                                              (0, e.jsxs)("div", {
                                                className: s().AbilityText,
                                                children: [
                                                  (0, e.jsx)("div", {
                                                    className: s().AbilityName,
                                                    children: (0, a.Wn)(
                                                      `${t.abilityName}`,
                                                    ),
                                                  }),
                                                  (0, e.jsx)("div", {
                                                    className: s().AbilityDesc,
                                                    children: (0, a.Wn)(
                                                      `${t.abilityDesc}`,
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      `HeroAbilitySlide-${d}`,
                                    ),
                                  ),
                                }),
                                (0, e.jsx)("div", {
                                  className: s().CarouselDots,
                                  children: v.map((t, d) =>
                                    (0, e.jsx)(
                                      r.cL,
                                      {
                                        slide: d,
                                        className: s().AbilitySelector,
                                        style: {
                                          backgroundImage: `url( ${i.r.IMG_URL}/${t.dotBackgroundImage ? t.dotBackgroundImage : t.imgSrc} )`,
                                          backgroundSize: "cover",
                                        },
                                        children: (0, e.jsx)("div", {}),
                                      },
                                      `HeroAbilityDot-${d}`,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)("div", {
                            className: s().AbilitySectionMobileView,
                            children: (0, e.jsxs)(r.gi, {
                              className: s().AbilityCarousel,
                              naturalSlideWidth: 100,
                              naturalSlideHeight: 75,
                              totalSlides: v.length,
                              children: [
                                (0, e.jsx)(r.Ap, {
                                  className: s().AbilitySlider,
                                  children: v.map((t, d) =>
                                    (0, e.jsx)(
                                      r.q7,
                                      {
                                        index: d,
                                        children: (0, e.jsxs)("div", {
                                          className:
                                            s().AbilitySlideContainerMobile,
                                          children: [
                                            (0, e.jsx)("div", {
                                              className:
                                                s().AbilityVideoContainer,
                                              children: (0, e.jsxs)("video", {
                                                className: s().AbilityVideo,
                                                autoPlay: !0,
                                                preload: "auto",
                                                muted: !0,
                                                loop: !0,
                                                playsInline: !0,
                                                poster: `${i.r.VIDEO_URL}/${t.posterDir}`,
                                                children: [
                                                  t.videoSrcWebm &&
                                                    (0, e.jsx)("source", {
                                                      type: "video/webm",
                                                      src: `${i.r.VIDEO_URL}/${t.videoSrcWebm}`,
                                                    }),
                                                  t.videoSrcMp4 &&
                                                    (0, e.jsx)("source", {
                                                      type: "video/mp4",
                                                      src: `${i.r.VIDEO_URL}/${t.videoSrcMp4}`,
                                                    }),
                                                ],
                                              }),
                                            }),
                                            (0, e.jsxs)("div", {
                                              className:
                                                s().SlideAbilityContainer,
                                              children: [
                                                (0, e.jsx)("img", {
                                                  className:
                                                    s().SlideAbilityIcon,
                                                  src: `${i.r.IMG_URL}/${t.imgSrc}`,
                                                }),
                                                (0, e.jsxs)("div", {
                                                  className: s().AbilityText,
                                                  children: [
                                                    (0, e.jsx)("div", {
                                                      className:
                                                        s().AbilityName,
                                                      children: (0, a.Wn)(
                                                        `${t.abilityName}`,
                                                      ),
                                                    }),
                                                    (0, e.jsx)("div", {
                                                      className:
                                                        s().AbilityDesc,
                                                      children: (0, a.Wn)(
                                                        `${t.abilityDesc}`,
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      `HeroAbilitySlide-${d}`,
                                    ),
                                  ),
                                }),
                                (0, e.jsx)("div", {
                                  className: s().CarouselDotsMobile,
                                  children: v.map((t, d) =>
                                    (0, e.jsx)(
                                      r.cL,
                                      {
                                        slide: d,
                                        className: s().AbilitySelector,
                                        style: {
                                          backgroundImage: `url( ${i.r.IMG_URL}/${t.dotBackgroundImage ? t.dotBackgroundImage : t.imgSrc} )`,
                                          backgroundSize: "cover",
                                        },
                                        children: (0, e.jsx)("div", {}),
                                      },
                                      `HeroAbilityDot-${d}`,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            ref: this.eventRef,
                            className: s().MinigameSection,
                            children: [
                              (0, e.jsxs)("div", {
                                className: s().MinigameHeading,
                                children: [
                                  (0, e.jsxs)("video", {
                                    className: s().EventLogo,
                                    autoPlay: !0,
                                    preload: "auto",
                                    muted: !0,
                                    loop: !0,
                                    playsInline: !0,
                                    controls: !1,
                                    poster: `${i.r.VIDEO_URL}/muerta/dead_reckoning_logo_${i.r.LANGUAGE}.png`,
                                    children: [
                                      (0, e.jsx)("source", {
                                        type: 'video/mp4; codecs="hvc1"',
                                        src: `${i.r.VIDEO_URL}/muerta/dead_reckoning_logo_${i.r.LANGUAGE}.mov`,
                                      }),
                                      (0, e.jsx)("source", {
                                        type: "video/webm",
                                        src: `${i.r.VIDEO_URL}/muerta/dead_reckoning_logo_${i.r.LANGUAGE}.webm`,
                                      }),
                                      (0, e.jsx)("source", {
                                        type: "video/webm",
                                        src: `${i.r.VIDEO_URL}/muerta/dead_reckoning_logo_english.webm`,
                                      }),
                                    ],
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().MinigameText,
                                    children: (0, a.Wn)(
                                      "#muerta_minigame_title",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().MinigameDate,
                                    children: (0, a.Wn)("#muerta_title_date"),
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: s().EventHype,
                                    children: [
                                      (0, e.jsx)("img", {
                                        className: (0, _.A)(
                                          s().EventSplash,
                                          s().Left,
                                        ),
                                        src: `${i.r.IMG_URL}/muerta/minigame_sniper.png`,
                                      }),
                                      (0, e.jsxs)("div", {
                                        className: s().MinigameFlair,
                                        children: [
                                          (0, e.jsx)("div", {
                                            className: s().MinigameFlairTitle,
                                            children: (0, a.Wn)(
                                              "#muerta_minigame_subtitle",
                                            ),
                                          }),
                                          (0, e.jsx)("div", {
                                            className: s().MinigameFlairDesc,
                                            children: (0, a.Wn)(
                                              "#muerta_minigame_subtitle2",
                                            ),
                                          }),
                                          (0, e.jsx)("img", {
                                            className: s().MinigameFlairMark,
                                            src: `${i.r.IMG_URL}/muerta/paper_mark.png`,
                                          }),
                                          (0, e.jsx)("img", {
                                            className: s().MinigameFlairCandles,
                                            src: `${i.r.IMG_URL}/muerta/minigame_text_candles_bg.png`,
                                          }),
                                        ],
                                      }),
                                      (0, e.jsx)("img", {
                                        className: (0, _.A)(
                                          s().EventSplash,
                                          s().Right,
                                        ),
                                        src: `${i.r.IMG_URL}/muerta/minigame_am.png`,
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: s().MinigameFlairMobileView,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: s().MinigameFlairTitle,
                                        children: (0, a.Wn)(
                                          "#muerta_minigame_subtitle",
                                        ),
                                      }),
                                      (0, e.jsx)("div", {
                                        className: s().MinigameFlairDesc,
                                        children: (0, a.Wn)(
                                          "#muerta_minigame_subtitle2",
                                        ),
                                      }),
                                      (0, e.jsx)("img", {
                                        className: s().MinigameFlairMark,
                                        src: `${i.r.IMG_URL}/muerta/paper_mark.png`,
                                      }),
                                      (0, e.jsx)("img", {
                                        className: s().MinigameFlairCandles,
                                        src: `${i.r.IMG_URL}/muerta/minigame_text_candles_bg.png`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: s().MinigameRulesSection,
                                children: [
                                  (0, e.jsxs)("div", {
                                    className: s().RulesColumn,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: (0, _.A)(
                                          s().MinigameImageContainer,
                                          s().MinigameImage1,
                                        ),
                                      }),
                                      (0, e.jsxs)("div", {
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "200",
                                        "data-aos-duration": "2000",
                                        children: [
                                          (0, e.jsx)("div", {
                                            className: s().MinigameRulesTitle,
                                            children: (0, a.Wn)(
                                              "#muerta_minigame_rules_title",
                                            ),
                                          }),
                                          (0, e.jsx)("div", {
                                            className: s().MinigameRulesDesc,
                                            children: (0, a.Wn)(
                                              "#muerta_minigame_rules_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className:
                                      s().RulesColumnReverseMarginForMobile,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: (0, _.A)(
                                          s().MinigameImageContainer,
                                          s().MinigameImage2,
                                        ),
                                      }),
                                      (0, e.jsxs)("div", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "200",
                                        "data-aos-duration": "2000",
                                        children: [
                                          (0, e.jsx)("div", {
                                            className: s().MinigameRulesTitle,
                                            children: (0, a.Wn)(
                                              "#muerta_minigame_rules_title2",
                                            ),
                                          }),
                                          (0, e.jsx)("div", {
                                            className: s().MinigameRulesDesc,
                                            children: (0, a.Wn)(
                                              "#muerta_minigame_rules_desc2",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: s().RulesColumn,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: (0, _.A)(
                                          s().MinigameImageContainer,
                                          s().MinigameImage3,
                                        ),
                                      }),
                                      (0, e.jsxs)("div", {
                                        "data-aos": "fade-left",
                                        "data-aos-delay": "200",
                                        "data-aos-duration": "2000",
                                        children: [
                                          (0, e.jsx)("div", {
                                            className: s().MinigameRulesTitle,
                                            children: (0, a.Wn)(
                                              "#muerta_minigame_rules_title3",
                                            ),
                                          }),
                                          (0, e.jsx)("div", {
                                            className: s().MinigameRulesDesc,
                                            children: (0, e.jsx)(P.V, {
                                              strLocString:
                                                "#muerta_minigame_rules_desc3",
                                              nItemDefID: 23789,
                                              strDefaultPrice: "$2.49 USD",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, e.jsx)("div", {
                                className: s().MinigameDivider,
                              }),
                              (0, e.jsxs)("div", {
                                className: s().MinigameTreasureSection,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: s().TreasureTitle,
                                    children: (0, a.Wn)(
                                      "#muerta_treasure_title",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().TreasureSubtitle,
                                    children: (0, a.Wn)(
                                      "#muerta_treasure_content_desc",
                                    ),
                                  }),
                                  (0, e.jsxs)(r.gi, {
                                    className: s().TreasureCarousel,
                                    naturalSlideWidth: 540,
                                    naturalSlideHeight: 960,
                                    totalSlides: 8,
                                    currentSlide: 2,
                                    infinite: !0,
                                    touchEnabled: !0,
                                    dragEnabled: !1,
                                    children: [
                                      (0, e.jsxs)(r.Ap, {
                                        className: s().TreasureSlider,
                                        children: [
                                          (0, e.jsx)(r.q7, {
                                            index: 0,
                                            className: s().TreasureSlide,
                                            innerClassName:
                                              s().TreasureInnerSlide,
                                            classNameHidden:
                                              s().TreasureSlideHidden,
                                            children: (0, e.jsx)(N, {
                                              index: 0,
                                              video: "treasure_antimage",
                                              name: "#muerta_minigame_treasure_name1",
                                              onSlideIn: (t) => {
                                                this.setState({
                                                  treasureName: t,
                                                });
                                              },
                                            }),
                                          }),
                                          (0, e.jsx)(r.q7, {
                                            index: 1,
                                            className: s().TreasureSlide,
                                            innerClassName:
                                              s().TreasureInnerSlide,
                                            classNameHidden:
                                              s().TreasureSlideHidden,
                                            children: (0, e.jsx)(N, {
                                              index: 1,
                                              video: "treasure_dawnbreaker",
                                              name: "#muerta_minigame_treasure_name2",
                                              onSlideIn: (t) => {
                                                this.setState({
                                                  treasureName: t,
                                                });
                                              },
                                            }),
                                          }),
                                          (0, e.jsx)(r.q7, {
                                            index: 2,
                                            className: s().TreasureSlide,
                                            innerClassName:
                                              s().TreasureInnerSlide,
                                            classNameHidden:
                                              s().TreasureSlideHidden,
                                            children: (0, e.jsx)(N, {
                                              index: 2,
                                              video: "treasure_io",
                                              name: "#muerta_minigame_treasure_name3",
                                              onSlideIn: (t) => {
                                                this.setState({
                                                  treasureName: t,
                                                });
                                              },
                                            }),
                                          }),
                                          (0, e.jsx)(r.q7, {
                                            index: 3,
                                            className: s().TreasureSlide,
                                            innerClassName:
                                              s().TreasureInnerSlide,
                                            classNameHidden:
                                              s().TreasureSlideHidden,
                                            children: (0, e.jsx)(N, {
                                              index: 3,
                                              video: "treasure_lina",
                                              name: "#muerta_minigame_treasure_name4",
                                              onSlideIn: (t) => {
                                                this.setState({
                                                  treasureName: t,
                                                });
                                              },
                                            }),
                                          }),
                                          (0, e.jsx)(r.q7, {
                                            index: 4,
                                            className: s().TreasureSlide,
                                            innerClassName:
                                              s().TreasureInnerSlide,
                                            classNameHidden:
                                              s().TreasureSlideHidden,
                                            children: (0, e.jsx)(N, {
                                              index: 4,
                                              video: "treasure_medusa",
                                              name: "#muerta_minigame_treasure_name5",
                                              onSlideIn: (t) => {
                                                this.setState({
                                                  treasureName: t,
                                                });
                                              },
                                            }),
                                          }),
                                          (0, e.jsx)(r.q7, {
                                            index: 5,
                                            className: s().TreasureSlide,
                                            innerClassName:
                                              s().TreasureInnerSlide,
                                            classNameHidden:
                                              s().TreasureSlideHidden,
                                            children: (0, e.jsx)(N, {
                                              index: 5,
                                              video: "treasure_pudge",
                                              name: "#muerta_minigame_treasure_name6",
                                              onSlideIn: (t) => {
                                                this.setState({
                                                  treasureName: t,
                                                });
                                              },
                                            }),
                                          }),
                                          (0, e.jsx)(r.q7, {
                                            index: 6,
                                            className: s().TreasureSlide,
                                            innerClassName:
                                              s().TreasureInnerSlide,
                                            classNameHidden:
                                              s().TreasureSlideHidden,
                                            children: (0, e.jsx)(N, {
                                              index: 6,
                                              video: "treasure_sniper",
                                              name: "#muerta_minigame_treasure_name7",
                                              onSlideIn: (t) => {
                                                this.setState({
                                                  treasureName: t,
                                                });
                                              },
                                            }),
                                          }),
                                          (0, e.jsx)(r.q7, {
                                            index: 7,
                                            className: s().TreasureSlide,
                                            innerClassName:
                                              s().TreasureInnerSlide,
                                            classNameHidden:
                                              s().TreasureSlideHidden,
                                            children: (0, e.jsx)(N, {
                                              index: 7,
                                              video: "treasure_viper",
                                              name: "#muerta_minigame_treasure_name8",
                                              onSlideIn: (t) => {
                                                this.setState({
                                                  treasureName: t,
                                                });
                                              },
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, e.jsx)("div", {
                                        className: s().TreasureName,
                                        children: (0, a.Wn)(
                                          this.state.treasureName,
                                        ),
                                      }),
                                      (0, e.jsxs)("div", {
                                        className: s().CarouselDots,
                                        children: [
                                          (0, e.jsx)(r._X, {
                                            className: s().TreasureBack,
                                            children: (0, e.jsx)("div", {}),
                                          }),
                                          (0, e.jsx)(r.cL, {
                                            className: s().TreasureSelector,
                                            slide: 0,
                                            children: (0, e.jsx)("div", {}),
                                          }),
                                          (0, e.jsx)(r.cL, {
                                            className: s().TreasureSelector,
                                            slide: 1,
                                            children: (0, e.jsx)("div", {}),
                                          }),
                                          (0, e.jsx)(r.cL, {
                                            className: s().TreasureSelector,
                                            slide: 2,
                                            children: (0, e.jsx)("div", {}),
                                          }),
                                          (0, e.jsx)(r.cL, {
                                            className: s().TreasureSelector,
                                            slide: 3,
                                            children: (0, e.jsx)("div", {}),
                                          }),
                                          (0, e.jsx)(r.cL, {
                                            className: s().TreasureSelector,
                                            slide: 4,
                                            children: (0, e.jsx)("div", {}),
                                          }),
                                          (0, e.jsx)(r.cL, {
                                            className: s().TreasureSelector,
                                            slide: 5,
                                            children: (0, e.jsx)("div", {}),
                                          }),
                                          (0, e.jsx)(r.cL, {
                                            className: s().TreasureSelector,
                                            slide: 6,
                                            children: (0, e.jsx)("div", {}),
                                          }),
                                          (0, e.jsx)(r.cL, {
                                            className: s().TreasureSelector,
                                            slide: 7,
                                            children: (0, e.jsx)("div", {}),
                                          }),
                                          (0, e.jsx)(r.CC, {
                                            className: s().TreasureNext,
                                            children: (0, e.jsx)("div", {}),
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
                            className: s().WallpaperSection,
                            children: [
                              (0, e.jsx)("div", {
                                className: s().WallpaperTitle,
                                children: (0, a.Wn)("#muerta_wallpaper"),
                              }),
                              (0, e.jsxs)("div", {
                                className: s().Wallpapers,
                                children: [
                                  (0, e.jsxs)("div", {
                                    className: s().WallpaperGroup,
                                    children: [
                                      (0, e.jsx)("a", {
                                        href: `${i.r.IMG_URL}/muerta/wallpaper1.png`,
                                        children: (0, e.jsx)("div", {
                                          className: s().Wallpaper,
                                          children: (0, e.jsx)("img", {
                                            className: s().WallpaperImgDesktop,
                                            src: `${i.r.IMG_URL}/muerta/wallpaper_thumbnail1.png`,
                                          }),
                                        }),
                                      }),
                                      (0, e.jsx)("a", {
                                        href: `${i.r.IMG_URL}/muerta/wallpaper2.png`,
                                        children: (0, e.jsx)("div", {
                                          className: s().Wallpaper,
                                          children: (0, e.jsx)("img", {
                                            className: s().WallpaperImgDesktop,
                                            src: `${i.r.IMG_URL}/muerta/wallpaper_thumbnail2.png`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: s().WallpaperGroup,
                                    children: [
                                      (0, e.jsx)("a", {
                                        href: `${i.r.IMG_URL}/muerta/wallpaper3.png`,
                                        children: (0, e.jsx)("div", {
                                          className: s().Wallpaper,
                                          children: (0, e.jsx)("img", {
                                            className: s().WallpaperImgDesktop,
                                            src: `${i.r.IMG_URL}/muerta/wallpaper_thumbnail3.png`,
                                          }),
                                        }),
                                      }),
                                      (0, e.jsx)("a", {
                                        href: `${i.r.IMG_URL}/muerta/wallpaper4.png`,
                                        children: (0, e.jsx)("div", {
                                          className: s().Wallpaper,
                                          children: (0, e.jsx)("img", {
                                            className: s().WallpaperImgDesktop,
                                            src: `${i.r.IMG_URL}/muerta/wallpaper_thumbnail4.png`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: s().WallpaperGroup,
                                    children: [
                                      (0, e.jsx)("a", {
                                        href: `${i.r.IMG_URL}/muerta/wallpaper5.png`,
                                        children: (0, e.jsx)("div", {
                                          className: s().Wallpaper,
                                          children: (0, e.jsx)("img", {
                                            className: s().WallpaperImgDesktop,
                                            src: `${i.r.IMG_URL}/muerta/wallpaper_thumbnail5.png`,
                                          }),
                                        }),
                                      }),
                                      (0, e.jsx)("a", {
                                        href: `${i.r.IMG_URL}/muerta/wallpaper6.png`,
                                        children: (0, e.jsx)("div", {
                                          className: s().Wallpaper,
                                          children: (0, e.jsx)("img", {
                                            className: s().WallpaperImgDesktop,
                                            src: `${i.r.IMG_URL}/muerta/wallpaper_thumbnail6.png`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, e.jsx)("div", {
                            ref: this.janitorsCornerRef,
                            className: s().JanitorsCornerSection,
                            children: (0, e.jsxs)("div", {
                              className: s().PatchContainer,
                              children: [
                                (0, e.jsx)("img", {
                                  className: s().SplashImage,
                                  src: `${i.r.IMG_URL}/muerta/janitors_corner_splash.png`,
                                }),
                                (0, e.jsx)("div", {
                                  className: s().PatchTitle,
                                  children: (0, a.Wn)("#janitors_corner_title"),
                                }),
                                (0, e.jsxs)("div", {
                                  className: s().AdvancedStatsSection,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: s().HeaderLabel,
                                      children: (0, a.Wn)(
                                        "#732e_patch_dotaplus_advancedstats_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: s().PatchContent,
                                      children: [
                                        (0, e.jsxs)("div", {
                                          className: s().AdvancedStatsText,
                                          children: [
                                            (0, e.jsx)("div", {
                                              className:
                                                s().AdvancedStatsChangeSubtitle,
                                              children: (0, a.Wn)(
                                                "#732e_patch_dotaplus_advancedstats_subtitle",
                                              ),
                                            }),
                                            (0, e.jsx)("div", {
                                              className:
                                                s()
                                                  .AdvancedStatsChangeDescription,
                                              children: (0, a.Wn)(
                                                "#732e_patch_dotaplus_advancedstats_desc",
                                              ),
                                            }),
                                            (0, e.jsx)("div", {
                                              className:
                                                s()
                                                  .AdvancedStatsChangeDescription,
                                              children: (0, a.Wn)(
                                                "#732e_patch_dotaplus_advancedstats_desc2",
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, e.jsx)("img", {
                                          className: s().PatchImage,
                                          src: `${i.r.IMG_URL}/muerta/advancedstats_sneakpeak.png`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: s().QuickKeysSection,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: s().HeaderLabel,
                                      children: (0, a.Wn)(
                                        "#732e_patch_quickkeys_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: s().PatchContent,
                                      children: [
                                        (0, e.jsx)("img", {
                                          className: s().PatchImage,
                                          src: `${i.r.IMG_URL}/muerta/quickkeys_sneakpeak.png`,
                                        }),
                                        (0, e.jsxs)("div", {
                                          className: s().QuickKeysText,
                                          children: [
                                            (0, e.jsx)("div", {
                                              className:
                                                s().QuickKeysChangeSubtitle,
                                              children: (0, a.Wn)(
                                                "#732e_patch_quickkeys_subtitle",
                                              ),
                                            }),
                                            (0, e.jsx)("div", {
                                              className:
                                                s().QuickKeysChangeDescription,
                                              children: (0, a.Wn)(
                                                "#732e_patch_quickkeys_desc",
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: s().FriendsListSection,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: s().HeaderLabel,
                                      children: (0, a.Wn)(
                                        "#732e_patch_friendslist_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: s().PatchContent,
                                      children: [
                                        (0, e.jsxs)("div", {
                                          className: s().FriendsListText,
                                          children: [
                                            (0, e.jsx)("div", {
                                              className:
                                                s().FriendsListChangeSubtitle,
                                              children: (0, a.Wn)(
                                                "#732e_patch_friendslist_subtitle",
                                              ),
                                            }),
                                            (0, e.jsx)("div", {
                                              className:
                                                s()
                                                  .FriendsListChangeDescription,
                                              children: (0, a.Wn)(
                                                "#732e_patch_friendslist_desc",
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, e.jsx)("img", {
                                          className: s().PatchImage,
                                          src: `${i.r.IMG_URL}/muerta/friendslist_sneakpeak.png`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)("div", { className: s().ThickBorder }),
                          (0, e.jsxs)("div", {
                            ref: this.gameplayPatchRef,
                            className: s().PatchSection,
                            children: [
                              (0, e.jsx)("div", { className: s().Divider }),
                              (0, e.jsxs)("div", {
                                className: s().PatchContainer,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: s().PatchTitle,
                                    children: (0, a.Wn)("#732e_patch_title"),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().PatchSubtitle,
                                    children: (0, a.Wn)("#732e_patch_subtitle"),
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: s().TurboSection,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: s().PatchNotesHeaderLabel,
                                        children: (0, a.Wn)(
                                          "#732e_patch_turbo_title",
                                        ),
                                      }),
                                      (0, e.jsxs)("div", {
                                        className: s().PatchNotesList,
                                        children: [
                                          (0, e.jsx)("div", {
                                            className: s().PatchNotesDesc,
                                            children: (0, a.Wn)(
                                              "#732e_patch_turbo_intro",
                                            ),
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes1",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes2",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes3",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes4",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes5",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes15",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes7",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes8",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes6",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes10",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes14",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes13",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes12",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes9",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_patch_turbo_change_notes11",
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, e.jsx)(b.fs, {
                                    patchnotes: n?.general_notes,
                                    headerClassName: s().PatchNotesHeaderLabel,
                                    notesListClassName: s().PatchNotesList,
                                  }),
                                  (0, e.jsx)(b.wL, {
                                    patchnotes: n?.neutral_creeps,
                                    headerClassName: s().PatchNotesHeaderLabel,
                                    notesListClassName: s().PatchNotesList,
                                  }),
                                  (0, e.jsx)(b.ZV, {
                                    patchnotes: n?.items,
                                    headerClassName: s().PatchNotesHeaderLabel,
                                    notesListClassName: s().PatchNotesList,
                                  }),
                                  (0, e.jsx)(b.ZV, {
                                    patchnotes: n?.neutral_items,
                                    is_neutrals: !0,
                                    headerClassName: s().PatchNotesHeaderLabel,
                                    notesListClassName: s().PatchNotesList,
                                  }),
                                  (0, e.jsx)(b.ob, {
                                    patchnotes: n?.heroes,
                                    headerClassName: s().PatchNotesHeaderLabel,
                                    notesListClassName: s().PatchNotesList,
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: s().BugFixesSection,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: s().PatchNotesHeaderLabel,
                                        children: (0, a.Wn)(
                                          "#732e_bug_fixes_title",
                                        ),
                                      }),
                                      (0, e.jsxs)("div", {
                                        className: s().PatchNotesList,
                                        children: [
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes40",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes41",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes42",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes1",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes2",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes3",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes4",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes5",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes6",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes7",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes8",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes9",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes10",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes11",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes12",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes13",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes14",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes15",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes16",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes17",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes18",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes19",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes20",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes21",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes22",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes38",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes39",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElement,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes23",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes24",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes25",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes26",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes27",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes28",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes29",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes30",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes31",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes32",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes33",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes34",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes35",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes36",
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            className: s().NoteElementIndented,
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: s().Dot,
                                              }),
                                              (0, e.jsx)("div", {
                                                className: s().Note,
                                                children: (0, a.Wn)(
                                                  "#732e_bug_fixes_notes37",
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
                          (0, e.jsx)("div", { className: s().ThickBorder }),
                          (0, e.jsx)(f.K, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            );
          }
        };
        I = O([g.PA], I);
      },
      11417: (h) => {
        h.exports = {
          RightArrow: "_1aWAcVv4khhRKQHKyqIDl5",
          UpRightArrow: "_3KCtpfqeVGR0eaqc5YB4iF",
        };
      },
      42313: (h) => {
        h.exports = {
          Tooltip: "_2KOufCWr8cpHhxkqlofQFy",
          CarouselFade: "_1uXpQjAd2g8qwSMDu0SoXs",
          StandardButton: "_2f_qbC1TFqnOWCtqS7z1EE",
          ButtonText: "_2dZYPK3G_NBGwhgkaWblWX",
          Icon: "_3qviTO27bXKzCvlJUfmknk",
          Play: "_3qKIy7OKSjT5A8Lit6z6z1",
          SteamLogo: "_3XZ-ATygeIzPysB85R_kyr",
          ToolTip: "_2wAwhChODOFfHePtn7y2as",
          PlayerReportTooltip: "_2KXwVYa1oouY4WDXP-Vtkt",
          MuertaPage: "_2ebB9QOoUHWdfJaiEXTlba",
          ParallaxContainer: "_3hgHoZDoitw0Dw8Jmz5bHL",
          ParallaxLayer: "_204JzjAmJyO3hU1i4EoY6G",
          Layer1: "-UnUZ-mXe-JIua-kTtLB5",
          Layer2: "us8X7hEBaNBrVefBcQqQF",
          TrailerContainer: "zGQA5W27dM2Z7pIbrYmRM",
          Hidden: "_26f691gNqSymeNBPTYGj-C",
          TrailerVideo: "_2FBxippEZEecC2KgYn8LbY",
          CloseButton: "PX2fKMtmXZTotzP3KHKkE",
          CloseButtonImage: "_3GcGMThlSygVdzqQc75VQy",
          BackgroundVideoContainer: "gxRbyZewDbAo76-vjjmHV",
          ForegroundVideo: "_2d0WjeaBPg-nqttNHYTw7a",
          VideoPlaying: "_2DyGncX8CdhOSvNtVQxMtQ",
          TitleContainer: "_3FZFOUG04deRbYe4vMbG_-",
          Hide: "_2FRoEs8RDDIMDrIg3OAl_p",
          TitleIntro1: "_1DAysgB6J2KCkDyHrPzSDJ",
          TitleIntro2: "vI3XlM35pRgPcHeoA3WFW",
          TitleVideo: "_2nbahYfdT6o1BmIEk8bI7F",
          PlayButtonContainer: "_2A64NxBwon34Pv1QmAQM8r",
          PlayButton: "_3tBrdmEJgZT_IM4fc1EzbH",
          PlayTrailer: "_1s50WtGODEb1cd05lBRIJq",
          HeroInfoContainer: "_3FZWJC9T1iGwymXPnCY0ps",
          HeroInfoSection: "_3XGkIsGpH2El-wHpGWppLB",
          HeroIntroTitle: "_1jgfz6bsTh7tpRZwh3hddM",
          HeroLogo: "Pl6kVzePmKJs0FPpu3Fjw",
          Complexity: "Nc0S4pVXFuzhBTRwvIxNF",
          Roles: "_2qx-ubuuwTf47bhQbj6qP7",
          HeroRole: "_3dUTtWwORPIMKCyI8RQjKN",
          HeroIntro: "Q01LaRp1T9JNmGI1SgDSh",
          ButtonsSection: "pfWN5o1os-wSUHPqbP6go",
          AnchorNavigation: "_3nQGv00Lxbg0NTtNsfm0K6",
          AnchorLink: "_2DN0_e438VO_UBFmz6FYN5",
          ThickBorder: "_3iWWovO2BIje3ZC_AzkA2M",
          AbilitySection: "_2Z5HKbm1AalOiyC3N9NrLQ",
          AbilitySectionMobileView: "mXOvC16_kmjEy4TF-0q2c",
          AbilityHeader: "kmGPS78IF3-F0pJgrigGk",
          AbilitySlider: "_2UKo4R8zLb-oTf_l0HbOYZ",
          SlideContainer: "_3y5kaE5giS1eFjz-FCqdUN",
          CarouselDots: "_2sE56FLslhtYP84m6lriSp",
          AbilitySelector: "_3Z_Ig1XVwS2jjlnvVuF0yu",
          CarouselArrow: "uYJXbWWnzaS1IWJGGbcU6",
          Right: "_3jBx81pqi3XiBuo5Q9VK9y",
          ArrowImage: "_2-Z19i2zx1o6b7PT-M5qNU",
          SlideAbilityContainer: "_3n-QgXhc63lm2-WkuFXCpN",
          SlideAbilityIcon: "OEcHaaU_N8NPbMxP-4EUw",
          AbilityName: "_2LtFm1n0AVZjBRNNKRezni",
          AbilityDesc: "CqZRYr6Lyb2JBxbjXa5yZ",
          AbilitySlideContainerMobile: "_2O1FMGigTB35aCoi_Bnr2O",
          CarouselDotsMobile: "_3xUHjicyqFXaeDCP5xbTMg",
          WallpaperSection: "_3HrRDA63J3ZmLDwzXnPfxO",
          WallpaperTitle: "_2jeo_yPHqM-KzDhPHpIAP8",
          Wallpapers: "ecpeq-FNvOJYzpMViKCRD",
          WallpaperGroup: "_2kmvHzGwabEi-VuMYwVMty",
          Wallpaper: "_32pe0SzCOr7zLPFGVMSeS",
          MinigameSection: "_1imfRSxZ2qmuzTtAN61IzY",
          EventLogo: "_1GJ2TWsvj6H_g5SDwpDuHM",
          MinigameText: "_3iLqsYe8A8mz_LF9g8NmsJ",
          MinigameDate: "_2sJBp-ld6lX8SQwSUie-My",
          EventHype: "_3DsCWepAM7DF6Bu0oczjWz",
          EventSplash: "_2SRHlPmrncyI8-Jr9xd-kW",
          Left: "_1ky3ugwQXGbzDRoR_HZPU7",
          MinigameFlair: "_3GqGbhkko2FOFaSqGPEWya",
          MinigameFlairTitle: "_3p2hTuCvVVdDNmgc-QLadh",
          MinigameFlairDesc: "_3dWnQcr5j2wn7EfG4I5K68",
          MinigameFlairMobileView: "_1Er3lIZt7xHJ059OGOGZYa",
          MinigameSubTitle: "_2FRM1GZso5LKpwmhlWDwHc",
          MinigameFlairMark: "_2T_SHhFnB_7BzacU5X9-pL",
          MinigameFlairCandles: "_2vkkJe_hi7_bJjdEka6aZk",
          MinigameDivider: "_1O0cOldc0qlcYBjfMlPyOy",
          TreasureTitle: "_3DSp17z3UV4_NJmKfx-EZK",
          TreasureSubtitle: "_2FDk0SrocWFs9EjiYPdxr",
          MinigameRulesSection: "VuJxESlEjDMudt0Vt-Exe",
          RulesColumn: "_2fkdXSf2MveywCAA4Kptl1",
          RulesColumnReverseMarginForMobile: "_2BItmTm4h7VXN0EByPxjHL",
          MinigameImageContainer: "_133NXkeuKR-lSUic-Uho6w",
          MinigameImage1: "_22GTvhY8B7nDFNxA1EPGCf",
          MinigameImage2: "_3b8oDs7qqb-ywhvwhHDWIm",
          MinigameImage3: "_2vO6wM0Qjebqz_E6TqJP_c",
          MinigameRulesTitle: "iuyLm10luIajPwBmk81NX",
          MinigameRulesDesc: "u6RmygGqmXcXPt-DMR9tR",
          MinigameTreasureSection: "owdCCKyXsuGkK2ZuWuYFE",
          TreasureCarousel: "_3snCujNLdiHahatYt_rNmE",
          TreasureSlider: "_1Ig1E3lLhrbe42S-qxITTA",
          TreasureSlide: "_2ojCni0ve7jXdim0MOOhzC",
          TreasureSlideHidden: "_3qFVMeyNeuAE688NwPMMSh",
          TreasureName: "_1CL1KD6xbDRCQWY4LrEs7k",
          TreasureSelector: "_3UHBaZXgWZrVmq2mlhse_A",
          TreasureBack: "gaB2pOipoCCjHLHsQzXx0",
          TreasureNext: "_2nCtxtlHyjWwhnqW03OfyM",
          JanitorsCornerSection: "_38cqiAkExID7Ro1q3mahEP",
          PatchTitle: "hFu863YZ_GRj-CP_8wxfW",
          SplashImage: "_3LKcPQilpRcrqEYfdJUnKT",
          PatchContainer: "_3-Hp4AVQ8TXmPRD-iRXtxP",
          HeaderLabel: "_3zBQC1V9S4Pa5ZeBthnGGX",
          PatchContent: "_3ZhoZasq9di0BM45IuneSN",
          AdvancedStatsSection: "_2vuPirVDHYQRgOj73mkuYD",
          PatchImage: "_3_XaPxxT5k0CtHeK-KkL3V",
          AdvancedStatsText: "_332h4FgYCiVGXWpDFwDit2",
          AdvancedStatsChangeSubtitle: "MICme-lvCCq_G0QbnYJyK",
          AdvancedStatsChangeDescription: "_39AQ_qpHf-9obRocp3xGeM",
          QuickKeysSection: "_3qnnjUsm7zNwyd27z6OqYb",
          QuickKeysText: "_3UJi5Lz-eAjC34JTxeTFhd",
          QuickKeysChangeSubtitle: "_1S5U4_pZhnasJIlHd1s3NW",
          QuickKeysChangeDescription: "yBCfi7hvw4hjHkTCZFh90",
          FriendsListSection: "Ur7_Ni__PaLzUYOhvrw2U",
          FriendsListText: "_2C76o70I1jFVHzJEfFMH85",
          FriendsListChangeSubtitle: "_2azT0dhD_iBZ_h6sQu7KmG",
          FriendsListChangeDescription: "_1omASNsLrRskdZuJlyD1fL",
          PatchSection: "_2Vl1d_C5QwTrWsbDrwoZrp",
          Divider: "_36A3Lqe6n83zuSGx91msGN",
          PatchSubtitle: "RQrjvi6EJcddzyKuBLNI-",
          ShowcaseVideo: "_3F2eDwqRNI_EUgcJSNVPr7",
          PatchNotesHeaderLabel: "_2RuCem92hH7a_lPFHf7ad-",
          PatchNotesDesc: "_3LQq0lmtSBWCou4FcLG-8y",
          PatchNotesList: "_1LaVFPlm8AUyPqdZGbwuBG",
          TurboSection: "PAxCw8VH4V5qYimewAuVk",
          TurboHeading: "U8lKqu2wU1a2Akqc7NzqD",
          TurboChangeDescription: "_2WzFpAmhbIuIu6WdBHM1M0",
          NoteElement: "_6xIlssgnxYTN61zTw5qgc",
          NoteElementIndented: "_1Wf6hwOdFyXpDRCAqmo7QA",
          Dot: "sRcfl1pYRJjIB0GoBi1Dr",
          IsHidden: "lyACFNk0hiyl50hUvfzUy",
          Note: "_2R-_Wil5C3HKQGs-4aYBu6",
          BugFixesSection: "_39AIqY7RKMeIpcRwYie4h2",
          UpdatesSection: "woQhLGll1OrU0Z6dZAewe",
          ItemChangeDescription: "_3XGlm7yTH8UHHc1Vw2-v1-",
          PatchItemsImage: "_1cpOKqRJL0XFAijNL-sE-B",
          LowerPatch: "_3_5cvbG84lpiGBg31d7ZoK",
          rotate: "_3g5CwGaDrttoGuI6ckOMnf",
        };
      },
    },
  ]);
})();
