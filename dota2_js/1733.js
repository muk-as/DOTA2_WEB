/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [1733],
  {
    1479: (e) => {
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
    41733: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => m });
      var s = t(98142),
        n = t(66204),
        c = t(52472),
        r = t(1479),
        l = t.n(r),
        _ = t(5062),
        i = t(2580);
      const m = () =>
        n.createElement(
          "div",
          { className: l().Root },
          n.createElement(
            "div",
            { className: (0, _.Z)(l().KeyArt) },
            n.createElement(
              "div",
              { className: l().HeaderTitleContainer },
              n.createElement("h2", null, (0, c.Xx)("#736_patch_header")),
              n.createElement(
                "h1",
                null,
                (0, c.Xx)("#736_patch_header_number"),
              ),
            ),
            n.createElement(
              "video",
              {
                className: l().GameplayTeaserVideo,
                autoPlay: !0,
                preload: "auto",
                muted: !0,
                loop: !0,
                playsInline: !0,
              },
              n.createElement("source", {
                type: "video/mp4",
                src: `${s.Y.VIDEO_URL}seventhreesix/teaser.mp4?v=1`,
              }),
            ),
          ),
          n.createElement(
            "div",
            { className: (0, _.Z)(l().Section, l().Innates) },
            n.createElement("div", {
              className: l().SectionBackgroundGradient,
            }),
            n.createElement("img", {
              className: l().SectionBackgroundImage,
              src: `${s.Y.IMG_URL}seventhreesix/innates_header.png`,
            }),
            n.createElement(
              "div",
              { className: l().SectionContent },
              n.createElement(
                "span",
                { className: l().PreHeader },
                (0, c.Xx)("#736_patch_innates_preheader"),
              ),
              n.createElement(
                "h2",
                null,
                (0, c.Xx)("#736_patch_innates_header"),
              ),
              n.createElement(
                "p",
                { className: l().Description },
                (0, i.Jr)("#736_patch_innates_description"),
              ),
              n.createElement(
                "div",
                { className: l().Screenshots },
                n.createElement(
                  "div",
                  null,
                  "russian" == s.Y.LANGUAGE
                    ? n.createElement("img", {
                        className: l().Screenshot,
                        src: `${s.Y.IMG_URL}seventhreesix/innate_example_a_russian.png?v=5`,
                      })
                    : "schinese" == s.Y.LANGUAGE
                      ? n.createElement("img", {
                          className: l().Screenshot,
                          src: `${s.Y.IMG_URL}seventhreesix/innate_example_a_schinese.png?v=5`,
                        })
                      : n.createElement("img", {
                          className: l().Screenshot,
                          src: `${s.Y.IMG_URL}seventhreesix/innate_example_a.png?v=5`,
                        }),
                  n.createElement(
                    "p",
                    null,
                    (0, i.Jr)("#736_patch_innates_example_a_description"),
                  ),
                ),
                n.createElement(
                  "div",
                  null,
                  "russian" == s.Y.LANGUAGE
                    ? n.createElement("img", {
                        className: l().Screenshot,
                        src: `${s.Y.IMG_URL}seventhreesix/innate_example_b_russian.png?v=5`,
                      })
                    : "schinese" == s.Y.LANGUAGE
                      ? n.createElement("img", {
                          className: l().Screenshot,
                          src: `${s.Y.IMG_URL}seventhreesix/innate_example_b_schinese.png?v=5`,
                        })
                      : n.createElement("img", {
                          className: l().Screenshot,
                          src: `${s.Y.IMG_URL}seventhreesix/innate_example_b.png?v=5`,
                        }),
                  n.createElement(
                    "p",
                    null,
                    (0, i.Jr)("#736_patch_innates_example_b_description"),
                  ),
                ),
              ),
            ),
          ),
          n.createElement(
            "div",
            { className: (0, _.Z)(l().Section, l().Facets) },
            n.createElement("div", {
              className: l().SectionBackgroundGradient,
            }),
            n.createElement("img", {
              className: l().SectionBackgroundImage,
              src: `${s.Y.IMG_URL}seventhreesix/facets_header.png`,
            }),
            n.createElement(
              "div",
              { className: l().SectionContent },
              n.createElement(
                "span",
                { className: l().PreHeader },
                (0, c.Xx)("#736_patch_facets_preheader"),
              ),
              n.createElement(
                "h2",
                null,
                (0, c.Xx)("#736_patch_facets_header"),
              ),
              n.createElement(
                "p",
                { className: l().Description },
                (0, i.Jr)("#736_patch_facets_description"),
              ),
              n.createElement(
                "div",
                { className: l().Screenshots },
                n.createElement(
                  "div",
                  null,
                  "russian" == s.Y.LANGUAGE
                    ? n.createElement("img", {
                        className: l().Screenshot,
                        src: `${s.Y.IMG_URL}seventhreesix/facet_example_a_russian.png?v=5`,
                      })
                    : "schinese" == s.Y.LANGUAGE
                      ? n.createElement("img", {
                          className: l().Screenshot,
                          src: `${s.Y.IMG_URL}seventhreesix/facet_example_a_schinese.png?v=5`,
                        })
                      : n.createElement("img", {
                          className: l().Screenshot,
                          src: `${s.Y.IMG_URL}seventhreesix/facet_example_a.png?v=5`,
                        }),
                  n.createElement(
                    "p",
                    null,
                    (0, i.Jr)("#736_patch_facets_example_a_description"),
                  ),
                ),
                n.createElement(
                  "div",
                  null,
                  "russian" == s.Y.LANGUAGE
                    ? n.createElement("img", {
                        className: l().Screenshot,
                        src: `${s.Y.IMG_URL}seventhreesix/facet_example_b_russian.png?v=5`,
                      })
                    : "schinese" == s.Y.LANGUAGE
                      ? n.createElement("img", {
                          className: l().Screenshot,
                          src: `${s.Y.IMG_URL}seventhreesix/facet_example_b_schinese.png?v=5`,
                        })
                      : n.createElement("img", {
                          className: l().Screenshot,
                          src: `${s.Y.IMG_URL}seventhreesix/facet_example_b.png?v=5`,
                        }),
                  n.createElement(
                    "p",
                    null,
                    (0, i.Jr)("#736_patch_facets_example_b_description"),
                  ),
                ),
              ),
            ),
          ),
          n.createElement(
            "div",
            { className: (0, _.Z)(l().Section, l().ThePatch) },
            n.createElement("h2", null, (0, c.Xx)("#736_patch_thepatch")),
          ),
        );
    },
  },
]);
