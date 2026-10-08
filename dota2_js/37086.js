/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [37086],
    {
      37086: (t, i, n) => {
        "use strict";
        n.r(i), n.d(i, { default: () => l });
        var e = n(69500),
          a = n(2095),
          c = n(57693),
          h = n(74704),
          s = n.n(h),
          _ = n(15001),
          r = n(8305);
        const l = () =>
          (0, e.jsxs)("div", {
            className: s().Root,
            children: [
              (0, e.jsxs)("div", {
                className: (0, _.A)(s().KeyArt),
                children: [
                  (0, e.jsxs)("div", {
                    className: s().HeaderTitleContainer,
                    children: [
                      (0, e.jsx)("h2", {
                        children: (0, c.we)("#736_patch_header"),
                      }),
                      (0, e.jsx)("h1", {
                        children: (0, c.we)("#736_patch_header_number"),
                      }),
                    ],
                  }),
                  (0, e.jsx)("video", {
                    className: s().GameplayTeaserVideo,
                    autoPlay: !0,
                    preload: "auto",
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    children: (0, e.jsx)("source", {
                      type: "video/mp4",
                      src: `${a.r.VIDEO_URL}seventhreesix/teaser.mp4?v=1`,
                    }),
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, _.A)(s().Section, s().Innates),
                children: [
                  (0, e.jsx)("div", {
                    className: s().SectionBackgroundGradient,
                  }),
                  (0, e.jsx)("img", {
                    className: s().SectionBackgroundImage,
                    src: `${a.r.IMG_URL}seventhreesix/innates_header.png`,
                  }),
                  (0, e.jsxs)("div", {
                    className: s().SectionContent,
                    children: [
                      (0, e.jsx)("span", {
                        className: s().PreHeader,
                        children: (0, c.we)("#736_patch_innates_preheader"),
                      }),
                      (0, e.jsx)("h2", {
                        children: (0, c.we)("#736_patch_innates_header"),
                      }),
                      (0, e.jsx)("p", {
                        className: s().Description,
                        children: (0, r.Wn)("#736_patch_innates_description"),
                      }),
                      (0, e.jsxs)("div", {
                        className: s().Screenshots,
                        children: [
                          (0, e.jsxs)("div", {
                            children: [
                              a.r.LANGUAGE == "russian"
                                ? (0, e.jsx)("img", {
                                    className: s().Screenshot,
                                    src: `${a.r.IMG_URL}seventhreesix/innate_example_a_russian.png?v=5`,
                                  })
                                : a.r.LANGUAGE == "schinese"
                                  ? (0, e.jsx)("img", {
                                      className: s().Screenshot,
                                      src: `${a.r.IMG_URL}seventhreesix/innate_example_a_schinese.png?v=5`,
                                    })
                                  : (0, e.jsx)("img", {
                                      className: s().Screenshot,
                                      src: `${a.r.IMG_URL}seventhreesix/innate_example_a.png?v=5`,
                                    }),
                              (0, e.jsx)("p", {
                                children: (0, r.Wn)(
                                  "#736_patch_innates_example_a_description",
                                ),
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            children: [
                              a.r.LANGUAGE == "russian"
                                ? (0, e.jsx)("img", {
                                    className: s().Screenshot,
                                    src: `${a.r.IMG_URL}seventhreesix/innate_example_b_russian.png?v=5`,
                                  })
                                : a.r.LANGUAGE == "schinese"
                                  ? (0, e.jsx)("img", {
                                      className: s().Screenshot,
                                      src: `${a.r.IMG_URL}seventhreesix/innate_example_b_schinese.png?v=5`,
                                    })
                                  : (0, e.jsx)("img", {
                                      className: s().Screenshot,
                                      src: `${a.r.IMG_URL}seventhreesix/innate_example_b.png?v=5`,
                                    }),
                              (0, e.jsx)("p", {
                                children: (0, r.Wn)(
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
              (0, e.jsxs)("div", {
                className: (0, _.A)(s().Section, s().Facets),
                children: [
                  (0, e.jsx)("div", {
                    className: s().SectionBackgroundGradient,
                  }),
                  (0, e.jsx)("img", {
                    className: s().SectionBackgroundImage,
                    src: `${a.r.IMG_URL}seventhreesix/facets_header.png`,
                  }),
                  (0, e.jsxs)("div", {
                    className: s().SectionContent,
                    children: [
                      (0, e.jsx)("span", {
                        className: s().PreHeader,
                        children: (0, c.we)("#736_patch_facets_preheader"),
                      }),
                      (0, e.jsx)("h2", {
                        children: (0, c.we)("#736_patch_facets_header"),
                      }),
                      (0, e.jsx)("p", {
                        className: s().Description,
                        children: (0, r.Wn)("#736_patch_facets_description"),
                      }),
                      (0, e.jsxs)("div", {
                        className: s().Screenshots,
                        children: [
                          (0, e.jsxs)("div", {
                            children: [
                              a.r.LANGUAGE == "russian"
                                ? (0, e.jsx)("img", {
                                    className: s().Screenshot,
                                    src: `${a.r.IMG_URL}seventhreesix/facet_example_a_russian.png?v=5`,
                                  })
                                : a.r.LANGUAGE == "schinese"
                                  ? (0, e.jsx)("img", {
                                      className: s().Screenshot,
                                      src: `${a.r.IMG_URL}seventhreesix/facet_example_a_schinese.png?v=5`,
                                    })
                                  : (0, e.jsx)("img", {
                                      className: s().Screenshot,
                                      src: `${a.r.IMG_URL}seventhreesix/facet_example_a.png?v=5`,
                                    }),
                              (0, e.jsx)("p", {
                                children: (0, r.Wn)(
                                  "#736_patch_facets_example_a_description",
                                ),
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            children: [
                              a.r.LANGUAGE == "russian"
                                ? (0, e.jsx)("img", {
                                    className: s().Screenshot,
                                    src: `${a.r.IMG_URL}seventhreesix/facet_example_b_russian.png?v=5`,
                                  })
                                : a.r.LANGUAGE == "schinese"
                                  ? (0, e.jsx)("img", {
                                      className: s().Screenshot,
                                      src: `${a.r.IMG_URL}seventhreesix/facet_example_b_schinese.png?v=5`,
                                    })
                                  : (0, e.jsx)("img", {
                                      className: s().Screenshot,
                                      src: `${a.r.IMG_URL}seventhreesix/facet_example_b.png?v=5`,
                                    }),
                              (0, e.jsx)("p", {
                                children: (0, r.Wn)(
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
              (0, e.jsx)("div", {
                className: (0, _.A)(s().Section, s().ThePatch),
                children: (0, e.jsx)("h2", {
                  children: (0, c.we)("#736_patch_thepatch"),
                }),
              }),
            ],
          });
      },
      74704: (t) => {
        t.exports = {
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
    },
  ]);
})();
