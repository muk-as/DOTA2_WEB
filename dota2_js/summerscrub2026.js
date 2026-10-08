// 7937.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [7937],
    {
      7937: (j, f, c) => {
        "use strict";
        c.r(f), c.d(f, { InfoIcon: () => S, default: () => b });
        var s = c(69500),
          u = c(2095),
          D = c(84485),
          m = c(8305),
          I = c(3878),
          N = c(7552),
          L = c(73202),
          C = c(2130),
          r = c(15001),
          H = c(45488),
          v = c(63177),
          B = c(42616),
          T = c(62163),
          e = c.n(T),
          l = c(84899),
          A = c(71010),
          F = Object.defineProperty,
          E = Object.getOwnPropertyDescriptor,
          P = (t, n, _, d) => {
            for (
              var o = d > 1 ? void 0 : d ? E(n, _) : n, g = t.length - 1, p;
              g >= 0;
              g--
            )
              (p = t[g]) && (o = (d ? p(n, _, o) : p(o)) || o);
            return d && o && F(n, _, o), o;
          };
        const S = () =>
            (0, s.jsx)("div", {
              className: e().ControlIcon,
              style: {
                backgroundImage: `url( ${u.r.IMG_URL}/icons/info.svg )`,
              },
            }),
          M = "Summerscrub2026",
          h = (t) =>
            (0, s.jsxs)("div", {
              className: t
                ? (0, r.A)(e().SectionDivider, t)
                : (0, r.A)(e().SectionDivider),
              children: [
                (0, s.jsx)("div", { className: e().Pattern }),
                (0, s.jsx)("div", { className: e().Overlay }),
                (0, s.jsx)("div", { className: e().TopDash }),
                (0, s.jsx)("div", { className: e().BottomDash }),
              ],
            }),
          y = () =>
            (0, s.jsxs)("div", {
              className: e().SubsectionDivider,
              children: [
                (0, s.jsx)("div", { className: e().TopDash }),
                (0, s.jsx)("div", { className: e().Background }),
              ],
            }),
          x = (t) => {
            const n = (0, N.useRef)(void 0);
            return t.video
              ? (0, s.jsx)("video", {
                  className: (0, r.A)(t.additionalClassName),
                  ref: n,
                  muted: !0,
                  autoPlay: !0,
                  preload: "auto",
                  loop: !0,
                  playsInline: !0,
                  poster: `${u.r.IMG_URL}${t.image}`,
                  children: (0, s.jsx)("source", {
                    type: "video/webm",
                    src: `${u.r.VIDEO_URL}${t.video}`,
                  }),
                })
              : (0, s.jsx)("img", {
                  className: (0, r.A)(t.additionalClassName),
                  src: `${u.r.IMG_URL}/` + t.image,
                });
          },
          i = (t) =>
            (0, s.jsx)("div", {
              className: (0, r.A)(e().BugFix, t.additionalClassName),
              children: (0, s.jsx)("p", {
                className: (0, r.A)(e().BodyFont, e().BodyMedium),
                children: (0, m.Wn)(t.description),
              }),
            }),
          a = (0, I.PA)((t) => {
            let _ = D.B5.Get()
              .getHeroList()
              ?.heroes.find((o) => o.id == t.nHeroID);
            const d = _?.name.replace("npc_dota_hero_", "");
            return (0, s.jsxs)("div", {
              className: (0, r.A)(e().HeroNameBlock, t.additionalClassName),
              children: [
                (0, s.jsx)("img", {
                  className: e().HeroIcon,
                  src: `${u.r.IMG_URL}heroes/icons/${d}.png`,
                }),
                (0, s.jsx)("p", {
                  className: (0, r.A)(
                    e().HeroName,
                    e().BodyFont,
                    e().BodySmall,
                  ),
                  children: _?.name_loc,
                }),
              ],
            });
          });
        let b = class extends N.Component {
          convertAbilityDesc(t) {
            if (!t) return null;
            let n = t.desc_loc;
            return (
              t.special_values.forEach((_) => {
                let d =
                  _.values_float.length > 0 ? (0, A.F)(_.values_float[0]) : "0";
                (n = n.replace("%" + _.name + "%", d)),
                  (n = n.replace("%" + _.name.toLowerCase() + "%", d));
              }),
              (n = n.replace(/\%\%/g, "%")),
              (n = n.replace(/<h2>/g, "<b>")),
              (n = n.replace(/<\/h2>/g, "</b>")),
              (n = n.replace(/<h1>/g, "<b>")),
              (n = n.replace(
                /<\/h1>/g,
                `</b>

`,
              )),
              (0, m.Wn)(n)
            );
          }
          render() {
            const t = H.o.getPatchNotes("7.41e", u.r.LANGUAGE);
            let n = (0, C.wwZ)((0, C.sfN)(u.r.LANGUAGE));
            return (
              n === "zh-cn"
                ? (n = "zh-Hans")
                : n === "zh-tw" && (n = "zh-Hant"),
              (0, s.jsxs)("div", {
                id: M,
                className: e().Summerscrub2026,
                children: [
                  (0, s.jsx)(L.mg, {
                    children: (0, s.jsx)("title", {
                      children: (0, m.Wn)("#summerscrub2026_website_stub"),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: (0, r.A)(e().PageContainer),
                    children: [
                      (0, s.jsx)(v.A, { bOverlapping: !0 }),
                      (0, s.jsx)("div", {
                        className: (0, r.A)(e().HeaderGradient),
                      }),
                      (0, s.jsxs)("div", {
                        className: (0, r.A)(
                          e().WebsiteSection,
                          e().ImprovementsSection,
                        ),
                        children: [
                          (0, s.jsx)(x, {
                            image: "summerscrub2026/header_image.png",
                            additionalClassName: (0, r.A)(e().HeaderImage),
                          }),
                          (0, s.jsxs)("div", {
                            className: e().WebsiteSectionInner,
                            children: [
                              (0, s.jsxs)("div", {
                                className: (0, r.A)(e().HeaderTextSection),
                                children: [
                                  (0, s.jsx)("p", {
                                    className: (0, r.A)(
                                      e().WebsiteTitle,
                                      e().TitleFont,
                                      e().TitleExtraLarge,
                                    ),
                                    children: (0, m.Wn)(
                                      "#summerscrub2026_website_title",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, r.A)(
                                      e().WebsiteIntro,
                                      e().DisplayFont,
                                      e().DisplayMedium,
                                    ),
                                    children: (0, m.Wn)(
                                      "#summerscrub2026_website_introduction",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: e().SectionSpacer,
                              }),
                              y(),
                              (0, s.jsx)("div", {
                                className: e().SectionSpacer,
                              }),
                              (0, s.jsxs)("div", {
                                className: e().TextSection,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: e().DotaPlusBadge,
                                    children: [
                                      (0, s.jsx)("img", {
                                        src: `${u.r.IMG_URL}/icons/dota_plus.png`,
                                      }),
                                      (0, s.jsx)("p", {
                                        className: (0, r.A)(
                                          e().LabelFont,
                                          e().LabelSmall,
                                        ),
                                        children: (0, m.Wn)("#dota_plus"),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, r.A)(
                                      e().BlockTitle,
                                      e().TitleFont,
                                      e().TitleMedium,
                                    ),
                                    children: (0, m.Wn)(
                                      "#summerscrub2026_breakdowns_title",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().PostGameBreakdownsImageContainer,
                                children: [
                                  (0, s.jsx)(x, {
                                    image:
                                      "summerscrub2026/post-game-breakdowns-background.jpg",
                                    additionalClassName:
                                      e().PostGameBreakdownsImageBackground,
                                  }),
                                  (0, s.jsx)(x, {
                                    image:
                                      "summerscrub2026/post-game-breakdowns.png",
                                    additionalClassName:
                                      e().PostGameBreakdownsImage,
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().Grid_3,
                                children: [
                                  (0, s.jsx)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: (0, s.jsx)("div", {
                                      className: e().TextBlock,
                                      children: (0, s.jsx)("p", {
                                        className: (0, r.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, m.Wn)(
                                          "#summerscrub2026_breakdowns_description1",
                                        ),
                                      }),
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: (0, s.jsx)("div", {
                                      className: e().TextBlock,
                                      children: (0, s.jsx)("p", {
                                        className: (0, r.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, m.Wn)(
                                          "#summerscrub2026_breakdowns_description2",
                                        ),
                                      }),
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: (0, s.jsx)("div", {
                                      className: e().TextBlock,
                                      children: (0, s.jsx)("p", {
                                        className: (0, r.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, m.Wn)(
                                          "#summerscrub2026_breakdowns_description3",
                                        ),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)(x, {
                                image:
                                  "summerscrub2026/post-game-breakdowns-timeline.png",
                                additionalClassName: e().TimelineImage,
                              }),
                              (0, s.jsx)("p", {
                                className: (0, r.A)(
                                  e().BlockDescription,
                                  e().TimelineDescription,
                                  e().BodyFont,
                                  e().BodyLarge,
                                  e().LightGrayText,
                                ),
                                children: (0, m.Wn)(
                                  "#summerscrub2026_breakdowns_description4",
                                ),
                              }),
                              (0, s.jsx)("div", {
                                className: e().SectionSpacer,
                              }),
                              y(),
                              (0, s.jsx)("div", {
                                className: e().SectionSpacer,
                              }),
                              (0, s.jsxs)("div", {
                                className: (0, r.A)(
                                  e().TextBlock,
                                  e().HotKeysTextBlock,
                                ),
                                children: [
                                  (0, s.jsx)("p", {
                                    className: (0, r.A)(
                                      e().BlockTitle,
                                      e().TitleFont,
                                      e().TitleMedium,
                                    ),
                                    children: (0, m.Wn)(
                                      "#summerscrub2026_unithotkeys_title",
                                    ),
                                  }),
                                  (0, s.jsx)(x, {
                                    image: "summerscrub2026/unit-hot-keys.png",
                                    additionalClassName: e().HotKeysImage,
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, r.A)(
                                      e().BlockDescription,
                                      e().HotKeysDescription,
                                      e().BodyFont,
                                      e().BodyLarge,
                                      e().LightGrayText,
                                    ),
                                    children: (0, m.Wn)(
                                      "#summerscrub2026_unithotkeys_description",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      h(),
                      (0, s.jsx)("div", {
                        className: (0, r.A)(
                          e().WebsiteSection,
                          e().BugFixSection,
                        ),
                        children: (0, s.jsxs)("div", {
                          className: e().WebsiteSectionInner,
                          children: [
                            (0, s.jsx)("div", {
                              className: (0, r.A)(e().HeaderTextSection),
                              children: (0, s.jsx)("p", {
                                className: (0, r.A)(
                                  e().TitleFont,
                                  e().TitleExtraLarge,
                                ),
                                children: (0, m.Wn)(
                                  "#summerscrub2026_bugfixes_title",
                                ),
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: (0, r.A)(e().BugfixListContainer),
                              children: [
                                (0, s.jsx)("p", {
                                  className: (0, r.A)(
                                    e().BugFixCategoryTitle,
                                    e().LabelFont,
                                    e().LabelExtraLarge,
                                  ),
                                  children: (0, m.Wn)(
                                    "#summerscrub2026_gameplay_bugfix_title",
                                  ),
                                }),
                                (0, s.jsxs)("div", {
                                  className: (0, r.A)(e().BugfixListColumn),
                                  children: [
                                    (0, s.jsx)("p", {
                                      className: (0, r.A)(
                                        e().BugFixSubCategoryTitle,
                                        e().First,
                                        e().LabelFont,
                                        e().LabelMedium,
                                      ),
                                      children: (0, m.Wn)("#header_general"),
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_1",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_2",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_4",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_15",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_19",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_20",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_33",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_35",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_40",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_41",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_46",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_47",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_56",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_57",
                                    }),
                                    (0, s.jsx)("p", {
                                      className: (0, r.A)(
                                        e().BugFixSubCategoryTitle,
                                        e().LabelFont,
                                        e().LabelMedium,
                                      ),
                                      children: (0, m.Wn)("#header_heroes"),
                                    }),
                                    (0, s.jsx)(a, {
                                      nHeroID: 38,
                                      additionalClassName: e().FirstHero,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_3",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 62 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_6",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 78 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_60",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 99 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_7",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 61 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_8",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 81 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_9",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 5 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_10",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 107 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_14",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 58 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_55",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 121 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_16",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 72 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_17",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 123 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_18",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 64 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_21",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 145 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_58",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 104 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_11",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_13",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_22",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_52",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 52 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_32",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 25 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_59",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 77 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_23",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_24",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_51",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 94 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_25",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 82 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_26",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_27",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_54",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 10 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_28",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_29",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_30",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 36 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_31",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 44 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_5",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 110 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_34",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 45 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_36",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 131 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_37",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 86 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_38",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_39",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 71 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_53",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 34 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_42",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 95 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_43",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 100 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_44",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 108 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_45",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 92 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_48",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 63 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_49",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 112 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_bugfix_50",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)("p", {
                                      className: (0, r.A)(
                                        e().BugFixSubCategoryTitle,
                                        e().LabelFont,
                                        e().LabelMedium,
                                      ),
                                      children: (0, m.Wn)(
                                        "#gamemode_ability_draft",
                                      ),
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_1",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_2",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_3",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_4",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_5",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_6",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_7",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_8",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_9",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_10",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_11",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_12",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_13",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_14",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_15",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_16",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_17",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_18",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_19",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_20",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_21",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_22",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_23",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_24",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_25",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_26",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_27",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_28",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_29",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_30",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_31",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_32",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_gameplay_ad_bugfix_33",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: (0, r.A)(e().BugfixListContainer),
                              children: [
                                (0, s.jsx)("p", {
                                  className: (0, r.A)(
                                    e().BugFixCategoryTitle,
                                    e().LabelFont,
                                    e().LabelExtraLarge,
                                  ),
                                  children: (0, m.Wn)(
                                    "#summerscrub2026_matchmaking_bugfix_title",
                                  ),
                                }),
                                (0, s.jsxs)("div", {
                                  className: (0, r.A)(e().BugfixListColumn),
                                  children: [
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_matchmaking_bugfix_4",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_matchmaking_bugfix_6",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_matchmaking_bugfix_5",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_matchmaking_bugfix_1",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_matchmaking_bugfix_2",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_matchmaking_bugfix_3",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: (0, r.A)(e().BugfixListContainer),
                              children: [
                                (0, s.jsx)("p", {
                                  className: (0, r.A)(
                                    e().BugFixCategoryTitle,
                                    e().LabelFont,
                                    e().LabelExtraLarge,
                                  ),
                                  children: (0, m.Wn)(
                                    "#summerscrub2026_cosmetics_bugfix_title",
                                  ),
                                }),
                                (0, s.jsxs)("div", {
                                  className: (0, r.A)(
                                    e().BugfixListColumn,
                                    e().Hero,
                                  ),
                                  children: [
                                    (0, s.jsx)("p", {
                                      className: (0, r.A)(
                                        e().BugFixSubCategoryTitle,
                                        e().First,
                                        e().LabelFont,
                                        e().LabelMedium,
                                      ),
                                      children: (0, m.Wn)("#header_general"),
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_visual_bugfix_1",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_visual_bugfix_2",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_visual_bugfix_3",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_visual_bugfix_4",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_visual_bugfix_5",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_visual_bugfix_6",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_visual_bugfix_7",
                                    }),
                                    (0, s.jsx)("p", {
                                      className: (0, r.A)(
                                        e().BugFixSubCategoryTitle,
                                        e().LabelFont,
                                        e().LabelMedium,
                                      ),
                                      children: (0, m.Wn)("#header_heroes"),
                                    }),
                                    (0, s.jsx)(a, {
                                      nHeroID: 102,
                                      additionalClassName: e().FirstHero,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_1",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 2 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_2",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 38 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_3",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 62 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_4",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_5",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_6",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 96 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_7",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 43 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_8",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 49 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_9",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 6 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_10",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_11",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 106 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_12",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 72 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_13",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 59 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_14",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 74 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_15",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 90 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_16",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 104 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_17",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_18",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_19",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_20",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 31 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_21",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 80 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_22",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_23",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 77 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_24",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 97 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_25",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 9 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_26",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_27",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 114 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_28",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 36 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_29",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_30",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 88 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_31",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 44 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_32",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 12 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_33",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 14 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_34",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_35",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_36",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 45 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_37",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 86 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_38",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_39",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_40",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_41",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_42",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_43",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_44",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_45",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_46",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_47",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_67",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_69",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 79 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_48",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 75 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_49",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_50",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 93 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_51",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 35 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_52",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 67 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_53",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 105 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_54",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_56",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_57",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_58",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_59",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_60",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_61",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_62",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_63",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_68",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 29 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_64",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 19 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_65",
                                      additionalClassName: e().Indent1,
                                    }),
                                    (0, s.jsx)(a, { nHeroID: 92 }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_cosmetics_bugfix_66",
                                      additionalClassName: e().Indent1,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: (0, r.A)(e().BugfixListContainer),
                              children: [
                                (0, s.jsx)("p", {
                                  className: (0, r.A)(
                                    e().BugFixCategoryTitle,
                                    e().LabelFont,
                                    e().LabelExtraLarge,
                                  ),
                                  children: (0, m.Wn)(
                                    "#summerscrub2026_misc_bugfix_title",
                                  ),
                                }),
                                (0, s.jsxs)("div", {
                                  className: (0, r.A)(e().BugfixListColumn),
                                  children: [
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_1",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_2",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_3",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_4",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_5",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_6",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_7",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_8",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_9",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_10",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_11",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_12",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_13",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_14",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_15",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_16",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_17",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_18",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_19",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_20",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_21",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_22",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_misc_bugfix_23",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: (0, r.A)(e().BugfixListContainer),
                              children: [
                                (0, s.jsx)("p", {
                                  className: (0, r.A)(
                                    e().BugFixCategoryTitle,
                                    e().LabelFont,
                                    e().LabelExtraLarge,
                                  ),
                                  children: (0, m.Wn)("#dota_labs"),
                                }),
                                (0, s.jsxs)("div", {
                                  className: (0, r.A)(e().BugfixListColumn),
                                  children: [
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_labs_bugfix_1",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_labs_bugfix_2",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_labs_bugfix_3",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_labs_bugfix_4",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_labs_bugfix_5",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_labs_bugfix_6",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: (0, r.A)(
                                e().BugfixListContainer,
                                e().DotaPlusContainer,
                              ),
                              children: [
                                (0, s.jsx)("p", {
                                  className: (0, r.A)(
                                    e().BugFixCategoryTitle,
                                    e().LabelFont,
                                    e().LabelExtraLarge,
                                  ),
                                  children: (0, m.Wn)("#dota_plus"),
                                }),
                                (0, s.jsxs)("div", {
                                  className: (0, r.A)(e().BugfixListColumn),
                                  children: [
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_1",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_2",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_3",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_4",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_5",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_8",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_6",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_14",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_7",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_10",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_11",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_17",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_12",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_15",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_16",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_9",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_18",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_19",
                                    }),
                                    (0, s.jsx)(i, {
                                      description:
                                        "#summerscrub2026_dotaplus_bugfix_13",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      h(),
                      (0, s.jsx)("div", {
                        className: (0, r.A)(
                          e().WebsiteSection,
                          e().GameplayUpdateContainer,
                        ),
                        children: (0, s.jsxs)("div", {
                          className: e().WebsiteSectionInner,
                          children: [
                            (0, s.jsxs)("div", {
                              className: e().WebsiteSectionHeader,
                              children: [
                                (0, s.jsx)("p", {
                                  className: (0, r.A)(
                                    e().SectionSubHeaderLabel,
                                    e().LabelFont,
                                    e().LabelMedium,
                                  ),
                                  children: (0, m.Wn)("#patchnotes_update"),
                                }),
                                (0, s.jsx)("h2", {
                                  className: (0, r.A)(
                                    e().SectionHeaderLabel,
                                    e().TitleFont,
                                    e().TitleExtraLarge,
                                  ),
                                  children: (0, m.Wn)(
                                    "#patch738_gameplayupdate_title",
                                  ),
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", { className: e().SectionSpacer }),
                            (0, s.jsxs)("div", {
                              className: e().PatchnotesContainer,
                              children: [
                                (0, s.jsx)(l.fs, {
                                  patchnotes: t?.general_notes,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                                (0, s.jsx)(l.wL, {
                                  patchnotes: t?.neutral_creeps,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                                (0, s.jsx)(l.ZV, {
                                  patchnotes: t?.items,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                                (0, s.jsx)(l.ZV, {
                                  patchnotes: t?.neutral_items,
                                  is_neutrals: !0,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                                (0, s.jsx)(l.ob, {
                                  patchnotes: t?.heroes,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)(B.K, {}),
                    ],
                  }),
                ],
              })
            );
          }
        };
        b = P([I.PA], b);
      },
      62163: (j) => {
        j.exports = {
          Tooltip: "_2VI11vARYNj1_iyiGNypQA",
          CarouselFade: "_2afEkOrBY2Dl393tA1EAB5",
          StandardButton: "_1OLiq-jpA70Vy8LE5qjbZM",
          ButtonText: "_3YuE8_EYEy8ywLoxRFGk9r",
          Icon: "cMvltywwHjireQUo9hswr",
          Play: "y6QXbxiVMyCkpDYrddKe0",
          SteamLogo: "hTpbXwed3_k9hEWKWfPC8",
          ToolTip: "_1k7cE5GvRSnGsAT6QrVux3",
          PlayerReportTooltip: "_1fJ7IgPhNsgb7EGg3HiAHB",
          TitleFont: "_1XN7tVCtz_zVslBnVhOyh",
          TitleExtraLarge: "_3O1Knhv6tcIUkm-OqoO7ze",
          TitleLarge: "_3hlsTHV3Si72jpwGsst9Op",
          TitleMedium: "_7NuCiwX4De2g75q4Cqa4R",
          TitleSmall: "_1JaoHhZSwGCl3v-SE7FecI",
          TitleExtraSmall: "_1sm6cS7SJD9Mpyt7wdBUou",
          DisplayFont: "_18sWvPtUg0F5HMvTXESjqN",
          DisplayExtraLarge: "_3g4CWu3T7Ywnff3Qu4FaCm",
          DisplayLarge: "_1NWcn82ArE9jkIpR-8f-iz",
          DisplayMedium: "_1FwmE_oYvFiLKkCmdM0ucR",
          DisplaySmall: "_64eVd0GXQ3PcnxyO9rLWA",
          BodyFont: "uDjlPg4_h4vWusMzWaYVZ",
          BodyExtraLarge: "_1utLhaIbwhFyQcZ_tts8I2",
          BodyLarge: "_2-FXfinlTXtyzQndpK6Qit",
          BodyMedium: "_3oCd3hpMZOSqRct-LaqLmY",
          BodySmall: "_11tJrQddnwEZyNZ6V8-ivF",
          LabelFont: "_7Ap0NoBVVSMRf-wjF6szv",
          LabelExtraLarge: "_21gmkIb5fH1XV73DXJ5zGJ",
          LabelLarge: "_2zIMj_u_MJdvZOxOvQflj-",
          LabelMedium: "kIZyaIiVwPIm7k7F4RsJm",
          LabelSmall: "_2ip1Fi3Y0QxiPYct_U7oeS",
          LightGrayText: "_2HZUM7TPeAaj6H8kqsElCh",
          GrayText: "_1Qt7d-UkkSKJNarBmd7_13",
          ControlIcon: "_1tn7CYjf0crBGCanF50h9W",
          ImprovementsSection: "_24p0CQiud9Ya_RKUzKsSpK",
          HeaderTextSection: "SOhzhphkvqx0xspe0FKqX",
          WebsiteTitle: "_1_kp2lXojkoCRNyPZOSQGr",
          HotKeysTextBlock: "_1Tl4tshpX8875I9mt54xet",
          HotKeysImage: "_2qm0jpxh3OM7vDEodHIieY",
          HotKeysDescription: "_7Zx-BH-WZskLy5hO74UrX",
          TimelineDescription: "Tg3Yx-u8Lx__b3yeTR6tQ",
          PageContainer: "_3XMwpRvL2HWX3Bien18_tD",
          Hidden: "_3V40Y8L-u-_LLR9YZUIlVL",
          Summerscrub2026: "_2gfbhlpzD4gMF1I6FLrX9G",
          WebsiteSection: "_1xgvoKWysMlSVLnckRkcx4",
          WebsiteSectionInner: "_1hIZjXbe5yiHSD2bn_Z7ns",
          WebsiteSectionHeader: "aL0m2ai-E2NN5VmRrXnyB",
          ButtonsSection: "_33XE9fPpQnlBagi2n98LL2",
          SectionDivider: "Xjvca9xp8V2xlstoS5VhD",
          Pattern: "_2TIJcp8-nNtZsWIwtnB9Vr",
          Overlay: "_1n-zCmsADbj_LcqRU_xNew",
          TopDash: "_3iciUPi96UZ0eyRZajJgoi",
          BottomDash: "_2v7ffFhzJ8tHttE6XYUz1C",
          SubsectionDivider: "_3xtxjdRnTgFe1VIMP64TJR",
          Background: "_28jlVlODxSPk2oemuukBxG",
          Grid_2: "_3Q8t8hKlCXa9wk8icavBLa",
          Grid_3: "_1ZoXt-eHhdelGoxxvxS4x8",
          TextImageBlockVertical: "_3VAS8F3WT4mh_15IAihasg",
          TextBlock: "_39PwkE8hQvMQMlVXNvF6p0",
          TextSection: "SNFkRC3wxM79ZB03BsGRt",
          FullWidthImage: "_3oFeaylfskB4eFOA12CuF9",
          DotaPlusBadge: "_2UVlOBTwEAgcGUOpp0YW7D",
          HeaderSection: "FJKghJJeqKTyZdwr9GV6G",
          HeaderGradient: "_3A59yqWBhLkAy6N0n7J02J",
          HeaderImage: "_1ib1POFlvpDzIejXqqWvUU",
          WebsiteIntro: "n28ftMlHYhYodn0x4JaQ",
          DashedSectionSubHeader: "_3rzs5iyGR0Rl3p8DRLYNsB",
          SubHeader: "RMMaXrPP1MUu1dCISDUG6",
          DashLeft: "_3ECiPgYNRUop7kKpEhmEge",
          DashRight: "_2d-EPskPLal5hj6qaVyxVr",
          TextImageBlockHorizontal: "_2WgOyU6v4L_Kt_Zx-i8O42",
          Flipped: "_2ZpZRIkGnB6RBOx_5htBht",
          NarrowImage: "_3NkJGbT78CjVh5jGiH3Zu7",
          WideImage: "_2hDMddEH7A9W_ykVPZZfOi",
          PostGameBreakdownsImageContainer: "_3N4J7oXHRLG5LGFCrxA2sh",
          PostGameBreakdownsImageBackground: "_13NH2aMzVFkFMGdFCTYE5A",
          PostGameBreakdownsImage: "_22_JzL5ry_VCCjGzSXtYhw",
          TimelineImage: "_1ZmG3HyDDu-ecK2F03ocG3",
          BugfixListContainer: "ZpIDv0RRJUXAwIpC9pp9w",
          BugFixCategoryTitle: "_2PY8ORkXiu839sVZ9DLmFK",
          BugFixSubCategoryTitle: "LECEQtxRiWoUn60FgC3b",
          First: "dbIL-KrLrLcRueeX8wefr",
          BugfixListColumn: "_3q80efhHgluJedeexc6NRn",
          DotaPlusContainer: "_2d94fKtD-DwwcsLZ6DmZxo",
          BugFix: "_3cCAYJMwcFfOGp8H2bFngv",
          Indent1: "_2aw-Is7lZVVIYXf0vLuIKi",
          HeroNameBlock: "_3QXIvQlCQ42DccNMoOw1Ub",
          FirstHero: "_1mRO4y8auhn5l_qd5BkzOf",
          HeroIcon: "azJJGYp4X1U9fslsTqPst",
          HeroCosmeticFix: "_3t4RerNngiI-s9C1FcHFJH",
          CosmeticFixTooltip: "_3juHjE3M7RqDpuv7PmH1Dn",
          TooltipTextContainer: "_88RSiQjM-oyiFAYqIRoGZ",
          BugFixSection: "_3qZWpCb32hQjF5WGObGNNd",
          GameplayUpdateContainer: "_3_ONqYcjDFRLUE1uBj7rTJ",
          PatchnotesContainer: "_2mOjxq2Dj7CWsplFF1gcdm",
          GameplaySubSection: "_2LEhW2ipQB5MhYUwNf1gUJ",
        };
      },
    },
  ]);
})();
