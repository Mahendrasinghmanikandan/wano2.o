export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0c0f0b]">
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12">
          {/* Soft background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#98a86e]/10 blur-[140px]" />

          {/* Content */}
          <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">

            {/* Logo */}
            <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl backdrop-blur-sm">
              <img
                src="https://wano2-o.vercel.app/_next/image?url=%2Fwano-logo.png&w=128&q=75"
                alt="Wano Projects"
                className="w-full object-contain"
              />
            </div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#98a86e]/20 bg-[#98a86e]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#b5c58a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#98a86e] shadow-[0_0_10px_#98a86e]" />
              Launching Soon
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              We're building
              <span className="mt-2 block text-[#98a86e]">
                something better.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-base leading-7 text-[#9a958c] sm:text-lg">
              Wano is currently under maintenance while we put the finishing
              touches on the launch.
              <span className="mt-1 block">
                We'll be live as soon as possible.
              </span>
            </p>

            {/* Bottom divider */}
            <div className="mt-10 flex w-full max-w-xs items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Wano Projects
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Status */}
            <div className="mt-8 flex items-center gap-2 text-xs text-white/40">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#98a86e]" />
              Website under construction
            </div>

          </div>
        </main>
      </body>
    </html>
  );
}
