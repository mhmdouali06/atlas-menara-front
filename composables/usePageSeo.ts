export function usePageSeo(options?: {
  /** Only the page name, without brand suffix */
  title?: string;
  /** Optional per-page description, otherwise global ABOUT text is used */
  description?: string;
  /** For canonical; defaults to current route */
  path?: string;
  /** 'website' | 'article' */
  type?: "website" | "article";
  /** Absolute URL to OG image */
  image?: string;
}) {
  const route = useRoute();
  const appConfig = useAppConfig();
  const runtimeConfig = useRuntimeConfig();

  const siteName = appConfig.site?.name || "Viajes Atlas Menara";
  const siteUrl = runtimeConfig.public.siteUrl || appConfig.site?.url || "";
  const defaultDescription = appConfig.site?.description || "";

  const fullPath = options?.path || route.fullPath;
  const url = siteUrl ? siteUrl + fullPath : fullPath;

  const finalTitle = options?.title
    ? `${options.title} | ${siteName}`
    : siteName;

  const finalDescription = (options?.description || defaultDescription).trim();

  const ogType = options?.type || "website";
  const ogImage =
    options?.image || (siteUrl ? `${siteUrl}/og-default.jpg` : "");

  useSeoMeta({
    title: finalTitle,
    description: finalDescription,

    ogTitle: finalTitle,
    ogDescription: finalDescription,
    ogType,
    ogUrl: url,
    ogImage,

    twitterCard: "summary_large_image",
    twitterTitle: finalTitle,
    twitterDescription: finalDescription,
    twitterImage: ogImage,
  });

  // Canonical URL
  useHead({
    link: [
      {
        rel: "canonical",
        href: url,
      },
    ],
  });
}
