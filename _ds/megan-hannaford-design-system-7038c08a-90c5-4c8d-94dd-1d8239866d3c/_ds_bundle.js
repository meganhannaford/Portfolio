/* @ds-bundle: {"format":4,"namespace":"MeganHannafordDesignSystem_7038c0","components":[{"name":"NavLink","sourcePath":"components/core/NavLink.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"SiteHeader","sourcePath":"components/core/SiteHeader.jsx"},{"name":"Tagline","sourcePath":"components/core/Tagline.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"FooterLinkColumn","sourcePath":"components/site/FooterLinkColumn.jsx"},{"name":"ScrollTopButton","sourcePath":"components/site/ScrollTopButton.jsx"},{"name":"SiteFooter","sourcePath":"components/site/SiteFooter.jsx"},{"name":"SocialIcon","sourcePath":"components/site/SocialIcon.jsx"},{"name":"Badge","sourcePath":"components/work/Badge.jsx"},{"name":"MediaFrame","sourcePath":"components/work/MediaFrame.jsx"},{"name":"ProjectTile","sourcePath":"components/work/ProjectTile.jsx"},{"name":"SplitPanel","sourcePath":"components/work/SplitPanel.jsx"},{"name":"TileCaption","sourcePath":"components/work/TileCaption.jsx"},{"name":"WorkGrid","sourcePath":"components/work/WorkGrid.jsx"}],"sourceHashes":{"components/core/NavLink.jsx":"55b98d9e7454","components/core/Rule.jsx":"a5a27bae5919","components/core/SiteHeader.jsx":"b5437917b9bd","components/core/Tagline.jsx":"321c5b7968eb","components/core/Wordmark.jsx":"6268f8dbac6b","components/site/FooterLinkColumn.jsx":"500a39a9ae7d","components/site/ScrollTopButton.jsx":"60a93ce0d01d","components/site/SiteFooter.jsx":"07a0bd1328c0","components/site/SocialIcon.jsx":"3bc3a43ae589","components/work/Badge.jsx":"e9ff73dd96ac","components/work/MediaFrame.jsx":"0c4a052faeab","components/work/ProjectTile.jsx":"8277aa21cd10","components/work/SplitPanel.jsx":"3cc4439881aa","components/work/TileCaption.jsx":"1c4f0f0db203","components/work/WorkGrid.jsx":"6ee55dfe85c1","ui_kits/portfolio/About.jsx":"0f7e6b771c9b","ui_kits/portfolio/App.jsx":"999a1b87bd93","ui_kits/portfolio/CaseStudy.jsx":"1b98ee6c1755","ui_kits/portfolio/WorkIndex.jsx":"921bb45841a8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MeganHannafordDesignSystem_7038c0 = window.MeganHannafordDesignSystem_7038c0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavLink({
  children,
  href = "#",
  active = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    "aria-current": active ? "page" : undefined,
    style: {
      font: "var(--type-nav)",
      letterSpacing: "var(--track-nav)",
      textTransform: "uppercase",
      color: active ? "var(--text-strong)" : "var(--link)",
      textDecoration: active ? "underline" : "none",
      textDecorationThickness: "var(--border-underline)",
      textUnderlineOffset: "7px",
      paddingBottom: "2px",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function Rule({
  tone = "quiet",
  inset = false
}) {
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      height: 1,
      background: tone === "ink" ? "var(--rule)" : "var(--rule-quiet)",
      margin: inset ? "0 var(--page-gutter)" : 0
    }
  });
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/SiteHeader.jsx
try { (() => {
function SiteHeader({
  brand,
  nav,
  actions,
  layout = "split",
  sticky = false,
  children
}) {
  const centered = layout === "centered";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? "sticky" : "relative",
      top: 0,
      zIndex: 20,
      background: "var(--surface-page)",
      padding: centered ? "var(--space-9) var(--page-gutter) var(--space-7)" : "var(--space-6) var(--page-gutter)",
      display: "flex",
      flexDirection: centered ? "column" : "row",
      alignItems: centered ? "center" : "flex-end",
      justifyContent: "space-between",
      gap: centered ? "var(--space-4)" : "var(--space-7)",
      flexWrap: "wrap"
    }
  }, centered && nav ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "absolute",
      top: "var(--space-5)",
      right: "var(--page-gutter)",
      display: "flex",
      gap: "var(--space-6)"
    }
  }, nav), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(var(--space-5) + 44px)",
      left: "var(--page-gutter)",
      right: "var(--page-gutter)",
      height: 1,
      background: "var(--rule)"
    }
  })) : null, /*#__PURE__*/React.createElement("div", null, brand), centered ? children : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: "var(--space-7)",
      flexWrap: "wrap"
    }
  }, nav ? /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, nav) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      alignItems: "center"
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Tagline.jsx
try { (() => {
function Tagline({
  children,
  marker = false,
  align = "center",
  tone = "accent"
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-label)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      textAlign: align,
      color: tone === "accent" ? "var(--text-accent)" : "var(--text-strong)",
      display: "flex",
      gap: "var(--space-2)",
      justifyContent: align === "center" ? "center" : "flex-start"
    }
  }, marker ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2731") : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Tagline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tagline.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
/** Typeset brand mark. No logo files were supplied with the source material, so the
 *  wordmark is always live type — see readme.md > Logo. */
function Wordmark({
  name = "Megan Hannaford",
  role,
  size = "md",
  align = "left",
  as = "div"
}) {
  const Tag = as;
  const sizes = {
    sm: "var(--size-wordmark-sm)",
    md: "var(--size-wordmark)",
    lg: "clamp(34px,4vw,64px)"
  };
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      gap: "var(--space-1)",
      color: "var(--text-strong)",
      textAlign: align,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-wordmark)",
      fontSize: sizes[size],
      letterSpacing: "var(--track-wordmark)",
      textTransform: "uppercase"
    }
  }, name), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, role) : null);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/site/FooterLinkColumn.jsx
try { (() => {
function FooterLinkColumn({
  items = [],
  align = "right"
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      textAlign: align,
      alignItems: align === "right" ? "flex-end" : "flex-start"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: typeof it === "string" ? it : it.label
  }, /*#__PURE__*/React.createElement("a", {
    href: typeof it === "string" ? "#" : it.href || "#",
    style: {
      font: "var(--type-nav)",
      textDecoration: "underline",
      textDecorationThickness: "1px",
      textUnderlineOffset: "5px"
    }
  }, typeof it === "string" ? it : it.label))));
}
Object.assign(__ds_scope, { FooterLinkColumn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/FooterLinkColumn.jsx", error: String((e && e.message) || e) }); }

// components/site/ScrollTopButton.jsx
try { (() => {
function ScrollTopButton({
  tone = "accent",
  label = "Back to top",
  onClick,
  position = "fixed"
}) {
  const [down, setDown] = React.useState(false);
  const tones = {
    accent: {
      background: "var(--accent)",
      color: "var(--text-on-accent)"
    },
    plum: {
      background: "var(--plum-deep)",
      color: "var(--baby-blue-pale)"
    },
    blue: {
      background: "var(--baby-blue-deep)",
      color: "var(--plum-deep)"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    onClick: onClick || (() => window.scrollTo({
      top: 0,
      behavior: "smooth"
    })),
    onPointerDown: () => setDown(true),
    onPointerUp: () => setDown(false),
    onPointerLeave: () => setDown(false),
    style: {
      ...(tones[tone] || tones.accent),
      position,
      right: position === "fixed" ? "var(--space-6)" : undefined,
      bottom: position === "fixed" ? "var(--space-6)" : undefined,
      width: 64,
      height: 64,
      borderRadius: "var(--radius-pill)",
      border: 0,
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      boxShadow: "var(--shadow-float)",
      transform: down ? "scale(var(--press-scale))" : "none",
      transition: "transform var(--dur-fast) var(--ease-out), opacity var(--dur-base) var(--ease-out)",
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up",
    style: {
      width: 26,
      height: 26
    }
  }));
}
Object.assign(__ds_scope, { ScrollTopButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/ScrollTopButton.jsx", error: String((e && e.message) || e) }); }

// components/site/SiteFooter.jsx
try { (() => {
function SiteFooter({
  brand,
  columns,
  socials,
  ground
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: ground || "var(--surface-footer)",
      padding: "var(--space-9) var(--page-gutter)",
      marginTop: "var(--section-gap)",
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      alignItems: "flex-start",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, brand, socials ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, socials) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-9)",
      flexWrap: "wrap"
    }
  }, columns));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/site/SocialIcon.jsx
try { (() => {
function SocialIcon({
  name = "linkedin",
  href = "#",
  label,
  size = 22
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": label || name,
    style: {
      display: "grid",
      placeItems: "center",
      color: "var(--link)",
      width: size + 14,
      height: size + 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size
    }
  }));
}
Object.assign(__ds_scope, { SocialIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SocialIcon.jsx", error: String((e && e.message) || e) }); }

// components/work/Badge.jsx
try { (() => {
const TONES = {
  blue: {
    background: "var(--baby-blue-pale)",
    color: "var(--plum)"
  },
  accent: {
    background: "var(--accent)",
    color: "var(--text-on-accent)"
  },
  plum: {
    background: "var(--plum-deep)",
    color: "var(--baby-blue-pale)"
  }
};
function Badge({
  children,
  tone = "blue",
  shape = "circle"
}) {
  const t = TONES[tone] || TONES.blue;
  const circle = shape === "circle";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...t,
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      font: "var(--type-label)",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      borderRadius: "var(--radius-pill)",
      width: circle ? 62 : "auto",
      height: circle ? 62 : "auto",
      padding: circle ? 0 : "6px 12px",
      lineHeight: 1.15
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/Badge.jsx", error: String((e && e.message) || e) }); }

// components/work/MediaFrame.jsx
try { (() => {
const RATIOS = {
  wide: "var(--media-ratio-wide)",
  square: "var(--media-ratio-square)",
  portrait: "var(--media-ratio-portrait)"
};
function MediaFrame({
  src,
  alt = "",
  ratio = "wide",
  fill = "var(--surface-media)",
  radius = "none",
  label,
  hidePlaceholder = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: RATIOS[ratio],
      background: fill,
      borderRadius: "var(--radius-" + radius + ")",
      overflow: "hidden",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--plum)",
      textAlign: "center",
      padding: "var(--space-4)",
      opacity: hidePlaceholder ? 0 : 1,
      transition: "opacity var(--dur-base) var(--ease-out)"
    }
  }, label || "Image"), children);
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/work/ProjectTile.jsx
try { (() => {
function ProjectTile({
  title,
  client,
  href = "#",
  src,
  alt,
  ratio = "wide",
  radius = "none",
  badge,
  caption,
  overlay = "hover",
  titleTone = "light",
  label,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const show = overlay === "always" || overlay === "hover" && hover;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setHover(true),
    onBlur: () => setHover(false),
    onClick: onClick,
    style: {
      display: "block",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MediaFrame, {
    src: src,
    alt: alt || title,
    ratio: ratio,
    radius: radius,
    label: label || title,
    hidePlaceholder: show
  }, badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "var(--space-4)",
      right: "var(--space-4)",
      zIndex: 2,
      opacity: show ? 0 : 1,
      transition: "opacity var(--dur-base) var(--ease-out)"
    }
  }, badge) : null, overlay === "none" ? null : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      padding: "var(--space-5)",
      textAlign: "center",
      background: titleTone === "light" ? "rgba(61,21,38,0.62)" : "rgba(238,246,252,0.9)",
      opacity: show ? 1 : 0,
      transition: "opacity var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-display)",
      fontSize: "var(--size-display-md)",
      letterSpacing: "var(--track-display)",
      color: titleTone === "light" ? "var(--baby-blue-pale)" : "var(--plum-deep)"
    }
  }, title, client ? /*#__PURE__*/React.createElement("em", {
    style: {
      display: "block",
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      fontStyle: "normal",
      marginTop: "var(--space-3)"
    }
  }, client) : null)))), caption ? caption : null);
}
Object.assign(__ds_scope, { ProjectTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/ProjectTile.jsx", error: String((e && e.message) || e) }); }

// components/work/SplitPanel.jsx
try { (() => {
function SplitPanel({
  children,
  ground = "var(--baby-blue-deep)",
  minHeight = "56vh",
  align = "center",
  href
}) {
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    style: {
      background: ground,
      minHeight,
      display: "grid",
      placeItems: align === "center" ? "center" : "end start",
      padding: "var(--space-8) var(--space-7)",
      position: "relative",
      overflow: "hidden",
      color: "inherit"
    }
  }, children);
}
Object.assign(__ds_scope, { SplitPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/SplitPanel.jsx", error: String((e && e.message) || e) }); }

// components/work/TileCaption.jsx
try { (() => {
function TileCaption({
  children,
  href,
  align = "center",
  tone = "quiet"
}) {
  const color = tone === "quiet" ? "var(--accent-quiet)" : "var(--text-strong)";
  const inner = /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--size-caption)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color,
      borderBottom: "1px solid " + color,
      paddingBottom: "6px"
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: align === "center" ? "center" : "flex-start",
      paddingTop: "var(--space-5)"
    }
  }, href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color
    }
  }, inner) : inner);
}
Object.assign(__ds_scope, { TileCaption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/TileCaption.jsx", error: String((e && e.message) || e) }); }

// components/work/WorkGrid.jsx
try { (() => {
function WorkGrid({
  children,
  columns = 3,
  gap = "normal",
  style
}) {
  const g = gap === "tight" ? "var(--grid-gap-tight)" : gap === "none" ? "0px" : "var(--grid-gap)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + columns + ",minmax(0,1fr))",
      columnGap: g,
      rowGap: g,
      padding: gap === "none" ? 0 : "0 var(--page-gutter)",
      maxWidth: gap === "none" ? "none" : "var(--page-max)",
      margin: "0 auto",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { WorkGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/WorkGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
const {
  Wordmark,
  SiteHeader,
  MediaFrame,
  Tagline,
  SiteFooter,
  FooterLinkColumn,
  SocialIcon
} = window.MeganHannafordDesignSystem_7038c0;
function About({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    brand: /*#__PURE__*/React.createElement(Wordmark, {
      name: "Megan Hannaford",
      role: "Art Director",
      size: "sm"
    }),
    nav: nav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--page-gutter)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)",
      gap: "var(--space-9)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "portrait",
    label: "Portrait \u2014 4:5"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-display)",
      fontSize: "var(--size-display-md)",
      letterSpacing: "var(--track-display)",
      color: "var(--text-strong)",
      margin: "0 0 var(--space-5)"
    }
  }, "I write the idea, then I make it look like it was always going to look that way."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      margin: "0 0 var(--space-5)"
    }
  }, "Art director and copywriter \u2014 a hybrid, which mostly means I argue with myself and win. Brand, film and packaging, mostly food, drink and things you buy at 11pm."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      margin: "0 0 var(--space-7)"
    }
  }, "Every brief here is self-initiated. Currently open to freelance and permanent work, based in London."), /*#__PURE__*/React.createElement(Tagline, {
    align: "left",
    tone: "ink"
  }, "Available \u2014 hello@meganhannaford.com"))), /*#__PURE__*/React.createElement(SiteFooter, {
    brand: /*#__PURE__*/React.createElement(Wordmark, {
      name: "Megan Hannaford",
      role: "Art Director",
      size: "sm"
    }),
    socials: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SocialIcon, {
      name: "linkedin"
    }), /*#__PURE__*/React.createElement(SocialIcon, {
      name: "mail"
    })),
    columns: /*#__PURE__*/React.createElement(FooterLinkColumn, {
      items: ["Work", "Resume", "Contact"]
    })
  }));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
const {
  NavLink
} = window.MeganHannafordDesignSystem_7038c0;
function App() {
  const [view, setView] = React.useState("work");
  const [project, setProject] = React.useState(null);
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  }, [view, project]);
  const go = v => e => {
    e.preventDefault();
    setProject(null);
    setView(v);
  };
  const nav = [/*#__PURE__*/React.createElement(NavLink, {
    key: "w",
    href: "#work",
    active: view === "work" || view === "case",
    onClick: go("work")
  }, "Work"), /*#__PURE__*/React.createElement(NavLink, {
    key: "a",
    href: "#about",
    active: view === "about",
    onClick: go("about")
  }, "About"), /*#__PURE__*/React.createElement(NavLink, {
    key: "r",
    href: "#resume"
  }, "Resume")];
  if (view === "about") return /*#__PURE__*/React.createElement(About, {
    nav: nav
  });
  if (view === "case") return /*#__PURE__*/React.createElement(CaseStudy, {
    project: project,
    nav: nav,
    onBack: () => setView("work")
  });
  return /*#__PURE__*/React.createElement(WorkIndex, {
    nav: nav,
    onOpen: p => {
      setProject(p);
      setView("case");
      window.scrollTo({
        top: 0
      });
    }
  });
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
const {
  Wordmark,
  SiteHeader,
  Tagline,
  MediaFrame,
  WorkGrid,
  SplitPanel,
  Rule,
  SiteFooter,
  FooterLinkColumn,
  SocialIcon,
  NavLink
} = window.MeganHannafordDesignSystem_7038c0;
function CaseStudy({
  project,
  onBack,
  nav
}) {
  const p = project || {
    title: "Credit Cookbook",
    client: "HSBC",
    caption: "Integrated Campaign"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    brand: /*#__PURE__*/React.createElement(Wordmark, {
      name: "Megan Hannaford",
      role: "Art Director",
      size: "sm"
    }),
    nav: nav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-7) var(--page-gutter) 0"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#back",
    onClick: e => {
      e.preventDefault();
      onBack();
    },
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, "\u2190 All work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-display)",
      fontSize: "var(--size-display-lg)",
      letterSpacing: "var(--track-display)",
      color: "var(--text-strong)",
      margin: "var(--space-5) 0 var(--space-3)"
    }
  }, p.title), /*#__PURE__*/React.createElement(Tagline, {
    align: "left"
  }, p.client, " \u2014 ", p.caption), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "58ch",
      marginTop: "var(--space-6)"
    }
  }, "A recipe book for people who were never taught how credit works. Print, film and a card that earns its keep. Written and art directed as a self-initiated brief.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-8) var(--page-gutter) 0",
      maxWidth: "var(--page-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "wide",
    label: "Hero film \u2014 16:9"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-7) 0 0"
    }
  }, /*#__PURE__*/React.createElement(WorkGrid, {
    columns: 2,
    gap: "none"
  }, /*#__PURE__*/React.createElement(SplitPanel, {
    ground: "var(--baby-blue-deep)",
    minHeight: "46vh"
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "square",
    fill: "transparent",
    label: "Print spread",
    style: {
      width: "70%"
    }
  })), /*#__PURE__*/React.createElement(SplitPanel, {
    ground: "var(--plum-tint)",
    minHeight: "46vh"
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "square",
    fill: "transparent",
    label: "Card design",
    style: {
      width: "70%"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--page-gutter)"
    }
  }, /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "var(--space-7)",
      paddingTop: "var(--space-6)"
    }
  }, [["Role", "Art direction, copy"], ["Brief", "Self-initiated"], ["Year", "2026"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "var(--space-3)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-strong)"
    }
  }, v))))), /*#__PURE__*/React.createElement(SiteFooter, {
    ground: "var(--electric-blue)",
    brand: /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--paper-white)"
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      name: "Megan Hannaford",
      role: "Art Director",
      size: "sm"
    })),
    socials: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        color: "var(--paper-white)"
      }
    }, /*#__PURE__*/React.createElement(SocialIcon, {
      name: "linkedin"
    }), /*#__PURE__*/React.createElement(SocialIcon, {
      name: "instagram"
    })),
    columns: /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--paper-white)"
      }
    }, /*#__PURE__*/React.createElement(FooterLinkColumn, {
      items: ["All work", "About", "Resume"]
    }))
  }));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkIndex.jsx
try { (() => {
const {
  Wordmark,
  NavLink,
  Tagline,
  SiteHeader,
  ProjectTile,
  WorkGrid,
  SiteFooter,
  FooterLinkColumn,
  SocialIcon,
  ScrollTopButton
} = window.MeganHannafordDesignSystem_7038c0;
const WORK = [{
  title: "Credit Cookbook",
  client: "HSBC",
  label: "Case film",
  caption: "Integrated Campaign"
}, {
  title: "Find Your Honey",
  client: "Wingstop",
  label: "Key visual",
  caption: "Social Campaign"
}, {
  title: "Get Comfortable",
  client: "Ice Breakers",
  label: "Film still",
  caption: "Broadcast"
}, {
  title: "A New Era of Golf",
  client: "PGA Tour",
  label: "Thesis spread",
  caption: "Masters Thesis"
}, {
  title: "Dirt of Glory",
  client: "Adidas",
  label: "Out of home",
  caption: "Out of Home"
}, {
  title: "Death to Dry",
  client: "Liquid Death",
  label: "Packaging",
  caption: "Brand Platform"
}, {
  title: "Every Crunch, A Crumb",
  client: "Nature Valley",
  label: "Billboard",
  caption: "Out of Home"
}, {
  title: "Eat Down, Drink Up",
  client: "Coca-Cola",
  label: "Campaign film",
  caption: "Integrated Campaign"
}];
function WorkIndex({
  onOpen,
  nav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    layout: "centered",
    brand: /*#__PURE__*/React.createElement(Wordmark, {
      name: "Megan Hannaford",
      size: "lg",
      align: "center",
      as: "h1"
    }),
    nav: nav
  }, /*#__PURE__*/React.createElement(Tagline, {
    marker: true
  }, "Art director. Copy writer. Hybrid.")), /*#__PURE__*/React.createElement(WorkGrid, {
    columns: 2
  }, WORK.map(w => /*#__PURE__*/React.createElement(ProjectTile, {
    key: w.title,
    title: w.title,
    client: w.client + " — " + w.caption,
    label: w.label,
    href: "#case",
    onClick: e => {
      e.preventDefault();
      onOpen(w);
    }
  }))), /*#__PURE__*/React.createElement(SiteFooter, {
    brand: /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--baby-blue-pale)"
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      name: "Megan Hannaford",
      role: "Art Director",
      size: "sm"
    })),
    socials: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        color: "var(--baby-blue-pale)"
      }
    }, /*#__PURE__*/React.createElement(SocialIcon, {
      name: "linkedin",
      label: "LinkedIn"
    }), /*#__PURE__*/React.createElement(SocialIcon, {
      name: "instagram",
      label: "Instagram"
    }), /*#__PURE__*/React.createElement(SocialIcon, {
      name: "mail",
      label: "Email"
    })),
    columns: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--baby-blue-pale)"
      }
    }, /*#__PURE__*/React.createElement(FooterLinkColumn, {
      align: "left",
      items: ["HSBC", "Wingstop", "PGA Tour", "Coca-Cola"]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--baby-blue-pale)"
      }
    }, /*#__PURE__*/React.createElement(FooterLinkColumn, {
      align: "left",
      items: ["Liquid Death", "Adidas", "Nature Valley", "Ice Breakers"]
    })))
  }), /*#__PURE__*/React.createElement(ScrollTopButton, {
    tone: "accent"
  }));
}
Object.assign(window, {
  WorkIndex,
  WORK
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkIndex.jsx", error: String((e && e.message) || e) }); }

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tagline = __ds_scope.Tagline;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.FooterLinkColumn = __ds_scope.FooterLinkColumn;

__ds_ns.ScrollTopButton = __ds_scope.ScrollTopButton;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SocialIcon = __ds_scope.SocialIcon;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.ProjectTile = __ds_scope.ProjectTile;

__ds_ns.SplitPanel = __ds_scope.SplitPanel;

__ds_ns.TileCaption = __ds_scope.TileCaption;

__ds_ns.WorkGrid = __ds_scope.WorkGrid;

})();
