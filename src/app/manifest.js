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
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/logo/Worksensy logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
