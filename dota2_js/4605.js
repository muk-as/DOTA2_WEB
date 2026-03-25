/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [4605],
  {
    74704: (e) => {
      e.exports = {
        Tooltip: "_3gVGJQbscPm-epaMHgL4-g",
        CarouselFade: "_1ScZDq76_Jqcq38VrybDGa",
        StandardButton: "_1QuT6Jzw-j2XfSd1kIyF_p",
        ButtonText: "_3QZrWp6w82Vhcstz9Dy9KT",
        Icon: "_2zTu-42srl9KOr_mK7W-l2",
        Play: "_2T7-8wwPE83s8aJV5tz58_",
        SteamLogo: "_34TfaOQbGte2H-TkoDHKny",
        ToolTip: "_3sj2xM9Aam7U6B2NawaVIb",
        PlayerReportTooltip: "_113LAqgYIisdOLEKPM3acs",
        Root: "_1x1Ct0jCJmquY0RpNBzJSd",
        Section: "_1Tm9jpmkyy2JdX-yrBa7yt",
        SectionBackgroundGradient: "_29qNfOCOeCchU_A_3mv7x4",
        SectionBackgroundImage: "_2qVRDKdJW_07PxKaEz7TjL",
        SectionContent: "_3eo2gB07vrxC3ApspvUKnS",
        PreHeader: "_1_zckqGvJNY5psj00TOrx3",
        PostHeader: "UZuSG-Eod-nVMdgXKcYD6",
        Description: "_3lMyyO5yqa6xI_D8k5iKFd",
        Separator: "_3u79Ejj6WqcXtGsdDiHJ1t",
        KeyArt: "_8R8_srHQZpd-0hvCvVZ-l",
        GameplayTeaserVideo: "_3rq-KvM1yBDRJsxcCgYK78",
        HeaderTitleContainer: "_3bCSc0vTcha5Qfo2c1xS6M",
        Innates: "_1cw_B_wsWvZIidb7fuuTlf",
        Facets: "_3yK4X7aG6ewCeuglyLwGr",
        Screenshots: "_36r3_1TEGPYVn2ajzkglRc",
        Screenshot: "_CbYSqmzcZ_smTi8TSGmf",
        ThePatch: "_2nksf-LCV41Ii_ATXqhre2",
      };
    },
    44605: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => l });
      var n = a(69500),
        c = a(89506),
        r = a(68613),
        i = a(74704),
        t = a.n(i),
        _ = a(21384),
        h = a(40045);
      const l = () =>
        (0, n.jsxs)("div", {
          className: t().Root,
          children: [
            (0, n.jsxs)("div", {
              className: (0, _.A)(t().KeyArt),
              children: [
                (0, n.jsxs)("div", {
                  className: t().HeaderTitleContainer,
                  children: [
                    (0, n.jsx)("h2", {
                      children: (0, r.we)("#736_patch_header"),
                    }),
                    (0, n.jsx)("h1", {
                      children: (0, r.we)("#736_patch_header_number"),
                    }),
                  ],
                }),
                (0, n.jsx)("video", {
                  className: t().GameplayTeaserVideo,
                  autoPlay: !0,
                  preload: "auto",
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  children: (0, n.jsx)("source", {
                    type: "video/mp4",
                    src: `${c.r.VIDEO_URL}seventhreesix/teaser.mp4?v=1`,
                  }),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: (0, _.A)(t().Section, t().Innates),
              children: [
                (0, n.jsx)("div", { className: t().SectionBackgroundGradient }),
                (0, n.jsx)("img", {
                  className: t().SectionBackgroundImage,
                  src: `${c.r.IMG_URL}seventhreesix/innates_header.png`,
                }),
                (0, n.jsxs)("div", {
                  className: t().SectionContent,
                  children: [
                    (0, n.jsx)("span", {
                      className: t().PreHeader,
                      children: (0, r.we)("#736_patch_innates_preheader"),
                    }),
                    (0, n.jsx)("h2", {
                      children: (0, r.we)("#736_patch_innates_header"),
                    }),
                    (0, n.jsx)("p", {
                      className: t().Description,
                      children: (0, h.Wn)("#736_patch_innates_description"),
                    }),
                    (0, n.jsxs)("div", {
                      className: t().Screenshots,
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            "russian" == c.r.LANGUAGE
                              ? (0, n.jsx)("img", {
                                  className: t().Screenshot,
                                  src: `${c.r.IMG_URL}seventhreesix/innate_example_a_russian.png?v=5`,
                                })
                              : "schinese" == c.r.LANGUAGE
                                ? (0, n.jsx)("img", {
                                    className: t().Screenshot,
                                    src: `${c.r.IMG_URL}seventhreesix/innate_example_a_schinese.png?v=5`,
                                  })
                                : (0, n.jsx)("img", {
                                    className: t().Screenshot,
                                    src: `${c.r.IMG_URL}seventhreesix/innate_example_a.png?v=5`,
                                  }),
                            (0, n.jsx)("p", {
                              children: (0, h.Wn)(
                                "#736_patch_innates_example_a_description",
                              ),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          children: [
                            "russian" == c.r.LANGUAGE
                              ? (0, n.jsx)("img", {
                                  className: t().Screenshot,
                                  src: `${c.r.IMG_URL}seventhreesix/innate_example_b_russian.png?v=5`,
                                })
                              : "schinese" == c.r.LANGUAGE
                                ? (0, n.jsx)("img", {
                                    className: t().Screenshot,
                                    src: `${c.r.IMG_URL}seventhreesix/innate_example_b_schinese.png?v=5`,
                                  })
                                : (0, n.jsx)("img", {
                                    className: t().Screenshot,
                                    src: `${c.r.IMG_URL}seventhreesix/innate_example_b.png?v=5`,
                                  }),
                            (0, n.jsx)("p", {
                              children: (0, h.Wn)(
                                "#736_patch_innates_example_b_description",
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
            (0, n.jsxs)("div", {
              className: (0, _.A)(t().Section, t().Facets),
              children: [
                (0, n.jsx)("div", { className: t().SectionBackgroundGradient }),
                (0, n.jsx)("img", {
                  className: t().SectionBackgroundImage,
                  src: `${c.r.IMG_URL}seventhreesix/facets_header.png`,
                }),
                (0, n.jsxs)("div", {
                  className: t().SectionContent,
                  children: [
                    (0, n.jsx)("span", {
                      className: t().PreHeader,
                      children: (0, r.we)("#736_patch_facets_preheader"),
                    }),
                    (0, n.jsx)("h2", {
                      children: (0, r.we)("#736_patch_facets_header"),
                    }),
                    (0, n.jsx)("p", {
                      className: t().Description,
                      children: (0, h.Wn)("#736_patch_facets_description"),
                    }),
                    (0, n.jsxs)("div", {
                      className: t().Screenshots,
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            "russian" == c.r.LANGUAGE
                              ? (0, n.jsx)("img", {
                                  className: t().Screenshot,
                                  src: `${c.r.IMG_URL}seventhreesix/facet_example_a_russian.png?v=5`,
                                })
                              : "schinese" == c.r.LANGUAGE
                                ? (0, n.jsx)("img", {
                                    className: t().Screenshot,
                                    src: `${c.r.IMG_URL}seventhreesix/facet_example_a_schinese.png?v=5`,
                                  })
                                : (0, n.jsx)("img", {
                                    className: t().Screenshot,
                                    src: `${c.r.IMG_URL}seventhreesix/facet_example_a.png?v=5`,
                                  }),
                            (0, n.jsx)("p", {
                              children: (0, h.Wn)(
                                "#736_patch_facets_example_a_description",
                              ),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          children: [
                            "russian" == c.r.LANGUAGE
                              ? (0, n.jsx)("img", {
                                  className: t().Screenshot,
                                  src: `${c.r.IMG_URL}seventhreesix/facet_example_b_russian.png?v=5`,
                                })
                              : "schinese" == c.r.LANGUAGE
                                ? (0, n.jsx)("img", {
                                    className: t().Screenshot,
                                    src: `${c.r.IMG_URL}seventhreesix/facet_example_b_schinese.png?v=5`,
                                  })
                                : (0, n.jsx)("img", {
                                    className: t().Screenshot,
                                    src: `${c.r.IMG_URL}seventhreesix/facet_example_b.png?v=5`,
                                  }),
                            (0, n.jsx)("p", {
                              children: (0, h.Wn)(
                                "#736_patch_facets_example_b_description",
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
            (0, n.jsx)("div", {
              className: (0, _.A)(t().Section, t().ThePatch),
              children: (0, n.jsx)("h2", {
                children: (0, r.we)("#736_patch_thepatch"),
              }),
            }),
          ],
        });
    },
  },
]);
