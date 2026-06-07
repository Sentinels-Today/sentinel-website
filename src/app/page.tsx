import Link from "next/link";

const REPOS: Array<{ name: string; tag: string; url: string }> = [
  { name: "sentinel-core", tag: "Rust", url: "https://github.com/Sentinels-Today/sentinel-core" },
  { name: "sentinel-cloud", tag: "API", url: "https://github.com/Sentinels-Today/sentinel-cloud" },
  {
    name: "sentinel-dashboard",
    tag: "UI",
    url: "https://github.com/Sentinels-Today/sentinel-dashboard",
  },
  { name: "sentinel-agent", tag: "Daemon", url: "https://github.com/Sentinels-Today/sentinel-agent" },
  { name: "sentinel-sdk", tag: "TS SDK", url: "https://github.com/Sentinels-Today/sentinel-sdk" },
  { name: "sentinel-cli", tag: "CLI", url: "https://github.com/Sentinels-Today/sentinel-cli" },
  { name: "sentinel-chain", tag: "Solana", url: "https://github.com/Sentinels-Today/sentinel-chain" },
  {
    name: "sentinel-firmware",
    tag: "TPM",
    url: "https://github.com/Sentinels-Today/sentinel-firmware",
  },
  { name: "sentinel-docs", tag: "Docs", url: "https://github.com/Sentinels-Today/sentinel-docs" },
];

export default function HomePage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 24px 96px" }}>
      <header style={{ marginBottom: 64 }}>
        <div style={{ color: "#737373", letterSpacing: 2, fontSize: 12, marginBottom: 16 }}>
          SENTINEL LABS
        </div>
        <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: 0, maxWidth: 720 }}>
          Trust infrastructure for autonomous machines.
        </h1>
        <p style={{ color: "#a3a3a3", fontSize: 18, lineHeight: 1.6, maxWidth: 640, marginTop: 24 }}>
          Identity, attestation, telemetry, and a verifiable audit trail for every robot in your
          fleet. Open source. Solana-anchored. Built for production.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
          <Link
            href="https://github.com/Sentinels-Today"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: 8,
              background: "#e5e5e5",
              color: "#0a0a0a",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            View on GitHub
          </Link>
          <Link
            href="https://sentinels.today/docs"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: 8,
              border: "1px solid #404040",
              color: "#e5e5e5",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Read the docs
          </Link>
        </div>
      </header>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 24, fontWeight: 600 }}>What ships</h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          }}
        >
          {REPOS.map((r) => (
            <li key={r.name}>
              <a
                href={r.url}
                style={{
                  display: "block",
                  padding: 16,
                  borderRadius: 10,
                  border: "1px solid #262626",
                  background: "#111111",
                  textDecoration: "none",
                  color: "#e5e5e5",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontWeight: 600 }}>{r.name}</span>
                  <span style={{ color: "#737373", fontSize: 12 }}>{r.tag}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer style={{ borderTop: "1px solid #262626", paddingTop: 24, color: "#737373" }}>
        Apache-2.0 — © Sentinels.
      </footer>
    </div>
  );
}
