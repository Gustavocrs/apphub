export default function sitemap() {
  const now = new Date();

  return [
    {
      url: "https://apphub.systechdev.com.br",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
