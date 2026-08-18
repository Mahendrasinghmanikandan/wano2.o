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
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--background)] px-6 text-[var(--foreground)]">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-10 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Wano Logo */}
            <div className="mb-10 flex justify-center">
              <img
                src="https://wano2-o.vercel.app/_next/image?url=%2Fwano-logo.png&w=128&q=75"
                alt="Wano Projects"
                className="h-auto w-32 object-contain sm:w-40"
              />
            </div>

            {/* Divider */}
            <div className="mx-auto mb-10 h-px w-16 bg-[var(--accent)] opacity-60" />

            {/* Main Content */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)]">
                Launching Soon
              </p>

              <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
                We're building
                <br />
                <span className="text-[var(--accent)]">
                  something better.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                Wano is currently under maintenance while we put the finishing
                touches on the launch. We'll be live as soon as possible.
              </p>
            </div>

            {/* Status */}
            <div className="mt-12 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span>Coming Soon</span>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
