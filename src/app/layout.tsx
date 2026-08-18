export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            width: 100%;
            min-height: 100%;
          }

          body {
            font-family: Arial, Helvetica, sans-serif;
            background: #0c0f0b;
            color: #ffffff;
          }

          .launch-page {
            position: relative;
            min-height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 24px;
            overflow: hidden;
            background:
              radial-gradient(
                circle at center,
                rgba(152, 168, 110, 0.08) 0%,
                rgba(12, 15, 11, 0) 45%
              ),
              #0c0f0b;
          }

          .launch-glow {
            position: absolute;
            width: 500px;
            height: 500px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: rgba(152, 168, 110, 0.08);
            filter: blur(120px);
            pointer-events: none;
          }

          .launch-content {
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 720px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .logo-wrapper {
            width: 110px;
            height: 110px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 18px;
            margin-bottom: 36px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.035);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(10px);
          }

          .logo {
            width: 100%;
            height: auto;
            object-fit: contain;
          }

          .badge {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            padding: 9px 16px;
            margin-bottom: 24px;
            border: 1px solid rgba(152, 168, 110, 0.25);
            border-radius: 999px;
            background: rgba(152, 168, 110, 0.1);
            color: #b5c58a;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.25em;
            text-transform: uppercase;
          }

          .badge-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #98a86e;
            box-shadow: 0 0 10px rgba(152, 168, 110, 0.9);
          }

          .title {
            margin: 0;
            font-size: clamp(42px, 7vw, 72px);
            line-height: 1.08;
            font-weight: 700;
            letter-spacing: -0.04em;
            color: #ffffff;
          }

          .title-highlight {
            display: block;
            margin-top: 8px;
            color: #98a86e;
          }

          .description {
            max-width: 570px;
            margin: 28px auto 0;
            color: #9a958c;
            font-size: 17px;
            line-height: 1.7;
          }

          .divider {
            width: 100%;
            max-width: 300px;
            display: flex;
            align-items: center;
            gap: 16px;
            margin-top: 42px;
          }

          .divider-line {
            flex: 1;
            height: 1px;
            background: rgba(255, 255, 255, 0.1);
          }

          .divider-text {
            color: rgba(255, 255, 255, 0.3);
            font-size: 9px;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            white-space: nowrap;
          }

          .status {
            display: flex;
            align-items: center;
            gap: 9px;
            margin-top: 28px;
            color: rgba(255, 255, 255, 0.4);
            font-size: 11px;
            letter-spacing: 0.08em;
          }

          .status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #98a86e;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 0.4;
              transform: scale(0.9);
            }

            50% {
              opacity: 1;
              transform: scale(1.1);
            }
          }

          @media (max-width: 640px) {
            .launch-page {
              padding: 32px 20px;
            }

            .logo-wrapper {
              width: 90px;
              height: 90px;
              padding: 15px;
              margin-bottom: 28px;
              border-radius: 20px;
            }

            .description {
              font-size: 15px;
              line-height: 1.6;
            }

            .divider {
              max-width: 240px;
            }
          }
        `}</style>
      </head>

      <body>
        <main className="launch-page">
          <div className="launch-glow" />

          <div className="launch-content">
            <div className="logo-wrapper">
              <img
                src="https://wano2-o.vercel.app/_next/image?url=%2Fwano-logo.png&w=128&q=75"
                alt="Wano Projects"
                className="logo"
              />
            </div>

            <div className="badge">
              <span className="badge-dot" />
              Launching Soon
            </div>

            <h1 className="title">
              We're building
              <span className="title-highlight">
                something better.
              </span>
            </h1>

            <p className="description">
              Wano is currently under maintenance while we put the
              finishing touches on the launch. We'll be live as soon as
              possible.
            </p>

            <div className="divider">
              <span className="divider-line" />
              <span className="divider-text">Wano Projects</span>
              <span className="divider-line" />
            </div>

            <div className="status">
              <span className="status-dot" />
              Website under construction
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
