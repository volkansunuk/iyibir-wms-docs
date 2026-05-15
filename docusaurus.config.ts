import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "iyibir WMS Dokümantasyon",
  tagline: "Depo Yönetim Sistemi — Kapsamlı Kullanıcı Kılavuzu",
  favicon: "img/favicon.ico",

  url: "https://docs.iyibirwms.com.tr",
  baseUrl: "/",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    localeConfigs: {
      tr: { label: "Türkçe", direction: "ltr" },
      en: { label: "English", direction: "ltr" },
    },
  },

  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["tr", "en"],
        indexDocs: true,
        indexPages: false,
        docsRouteBasePath: "/docs",
        searchResultLimits: 8,
        searchBarShortcutHint: false,
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/docs",
          editUrl: undefined,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "iyibir WMS",
      logo: {
        alt: "iyibir WMS Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Dokümantasyon",
        },
        { to: "/docs/operasyonlar", label: "Operasyonlar", position: "left" },
        { to: "/docs/ai-agentler", label: "AI Agentler", position: "left" },
        { to: "/docs/kurulum", label: "Kurulum", position: "left" },
        { type: "localeDropdown", position: "right" },
        {
          href: "https://www.iyibirwms.com.tr",
          label: "Ana Site →",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Başlangıç",
          items: [
            { label: "iyibir WMS Nedir?", to: "/docs/intro" },
            { label: "Hızlı Başlangıç", to: "/docs/giris" },
            { label: "Kurulum", to: "/docs/kurulum" },
          ],
        },
        {
          title: "Operasyonlar",
          items: [
            { label: "Mal Kabul", to: "/docs/operasyonlar/mal-kabul" },
            { label: "Sevkiyat", to: "/docs/operasyonlar/sevkiyat" },
            { label: "Sayım", to: "/docs/operasyonlar/sayim" },
            { label: "AI Agentler", to: "/docs/ai-agentler" },
          ],
        },
        {
          title: "iyibir Yazılım",
          items: [
            { label: "Ana Site", href: "https://www.iyibirwms.com.tr" },
            { label: "Demo Talep Et", href: "https://www.iyibirwms.com.tr/tr/demo" },
            { label: "İletişim", href: "https://www.iyibiryazilim.com.tr" },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} iyibir Yazılım. Tüm hakları saklıdır.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "sql", "csharp"],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
