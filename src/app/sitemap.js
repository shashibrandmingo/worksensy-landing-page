export default function sitemap() {
  const currentDate = new Date().toISOString();

  return [
    {
      url: "https://worksensy.com",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://worksensy.com/privacy-policy",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://worksensy.com/terms-of-service",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://worksensy.com/data-deletion",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://worksensy.com/security-compliance",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
