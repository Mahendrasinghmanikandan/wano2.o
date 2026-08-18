export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="flex min-h-screen items-center justify-center bg-[#10130f] px-6 text-white">
          <div className="w-full max-w-3xl text-center">

            {/* Logo */}
            <div className="mb-12 flex justify-center">
              <img
                src="https://wano2-o.vercel.app/_next/image?url=%2Fwano-logo.png&w=128&q=75"
                alt="Wano Projects"
                className="w-40 object-contain"
              />
            </div>

            {/* Content */}
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#98a86e]">
              Launching Soon
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              We're building
              <br />
              <span className="text-[#98a86e]">
                something better.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-[#9a958c] sm:text-lg">
              Wano is currently under maintenance while we put the finishing
              touches on the launch. We'll be live as soon as possible.
            </p>

            {/* Status */}
            <div className="mt-12 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-[#9a958c]">
              <span className="h-2 w-2 rounded-full bg-[#98a86e]" />
              Coming Soon
            </div>

          </div>
        </main>
      </body>
    </html>
  );
}
