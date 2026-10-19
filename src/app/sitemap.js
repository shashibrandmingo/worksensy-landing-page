export default function sitemap() {
  const currentDate = "2026-10-17T00:00:00.000Z";

  return [
    {
      url: "https://worksensy.com",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://worksensy.com/#features",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://worksensy.com/#solutions",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://worksensy.com/#pricing",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
