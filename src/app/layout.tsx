import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { displayFont, dmSans, outfit } from "@/config/font.config";
import { site } from "@/content/site";
import "./globals.css";

const themeBootScript = `
(function(){
  try {
    var mode = localStorage.getItem('wano-theme-mode');
    var accent = localStorage.getItem('wano-theme-accent') || 'olive';
    if (mode !== 'light' && mode !== 'dark') mode = 'dark';
    var map = {
      olive: ['#6b7e45','#98a86e'],
      amber: ['#d4a017','#e8c45a'],
      teal: ['#2a9d8f','#5ec4b8'],
      coral: ['#e07a5f','#f0a090'],
      indigo: ['#4a6fa5','#7a9cc7']
    };
    var dark = {
      '--background':'#10130f','--foreground':'#ece8e1','--muted':'#9a958c',
      '--surface':'#1a1f19','--surface-2':'#232a21','--line':'rgba(236,232,225,0.12)',
      '--steel':'#6d7f88','--concrete':'#b8b0a4','--on-accent':'#1a1508',
      '--grain-side':'rgba(109,127,136,0.12)',
      '--grain-base':'linear-gradient(180deg,#121610 0%,#0e110d 45%,#151a14 100%)',
      '--grid-line':'rgba(236,232,225,0.05)'
    };
    var light = {
      '--background':'#f3f0e8','--foreground':'#1c211a','--muted':'#5f5b54',
      '--surface':'#ffffff','--surface-2':'#ebe6dc','--line':'rgba(28,33,26,0.14)',
      '--steel':'#5a6b73','--concrete':'#4f4b44','--on-accent':'#ffffff',
      '--grain-side':'rgba(90,107,115,0.12)',
      '--grain-base':'linear-gradient(180deg,#f8f5ee 0%,#efeae0 50%,#f4f0e8 100%)',
      '--grid-line':'rgba(28,33,26,0.06)'
    };
    var root = document.documentElement;
    var palette = mode === 'light' ? light : dark;
    Object.keys(palette).forEach(function(k){ root.style.setProperty(k, palette[k]); });
    var c = map[accent] || map.olive;
    root.style.setProperty('--accent', c[0]);
    root.style.setProperty('--accent-soft', c[1]);
    root.style.setProperty('--grain-top', 'color-mix(in oklab,' + c[0] + ' 16%, transparent)');
    root.dataset.theme = mode;
    root.dataset.accent = accent;
    root.classList.remove('dark','light');
    root.classList.add(mode);
    root.style.colorScheme = mode;
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Engineered Buildings`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Wano Projects",
    "construction Tamil Nadu",
    "structural design",
    "architectural planning",
    "MEP coordination",
    "renovation",
    "PMC",
    "soil investigation",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${outfit.variable} ${displayFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
