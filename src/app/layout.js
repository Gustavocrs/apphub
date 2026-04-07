import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://apphub.systechdev.com.br"),
  title: "AppHub | Portfolio tecnico de projetos de valor",
  description:
    "Portfolio tecnico da Systech para centralizar projetos de valor, automatizar rotinas e gerar resultados reais.",
  keywords: [
    "AppHub",
    "portfolio tecnico",
    "automacao de rotinas",
    "projetos digitais",
    "Systech",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AppHub | Portfolio tecnico de projetos de valor",
    description:
      "Explore projetos que automatizam processos e geram resultados com foco tecnico.",
    url: "https://apphub.systechdev.com.br",
    siteName: "AppHub",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AppHub portfolio tecnico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AppHub | Portfolio tecnico de projetos de valor",
    description:
      "Central de projetos para automatizar rotinas e gerar resultados consistentes.",
    images: ["/opengraph-image"],
  },
};

export const viewport = {
  themeColor: "#475569",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AppHub",
    url: "https://apphub.systechdev.com.br",
    logo: "https://apphub.systechdev.com.br/logo.svg",
    description:
      "Portfolio tecnico de projetos de valor com foco em automacao e resultados.",
  };

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="apphub-jsonld" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>
        {children}
      </body>
    </html>
  );
}
