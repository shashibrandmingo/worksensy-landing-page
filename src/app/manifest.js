export default function manifest() {
  return {
    name: "WorkSensy — Affordable Sales CRM",
    short_name: "WorkSensy",
    description:
      "The most affordable sales CRM to capture leads, automate follow-ups, schedule meetings, and grow faster.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#5b13ff",
    icons: [
      {
        src: "/favicon.png?v=2",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/favicon.png?v=2",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png?v=2",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
