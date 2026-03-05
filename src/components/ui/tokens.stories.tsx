import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
  title: "Tokens/Preview",
  parameters: { layout: "padded" },
} satisfies Meta

export default meta
type Story = StoryObj

// ─── helpers ─────────────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#888", marginBottom: 16, borderBottom: "1px solid #e5e5e5", paddingBottom: 8 }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

function Swatch({ token, label }: { token: string; label?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 100 }}>
      <div style={{ width: 64, height: 64, borderRadius: 8, background: `var(${token})`, border: "1px solid rgba(0,0,0,0.08)", flexShrink: 0 }} />
      <div style={{ fontFamily: "monospace", fontSize: 10, color: "#555", wordBreak: "break-all", maxWidth: 120 }}>
        {label ?? token}
      </div>
    </div>
  )
}

function SwatchRow({ tokens }: { tokens: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
      {tokens.map(t => <Swatch key={t} token={t} />)}
    </div>
  )
}

function SemanticRow({ label, tokens }: { label: string; tokens: string[] }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, color: "#aaa", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {tokens.map(t => <Swatch key={t} token={t} />)}
      </div>
    </div>
  )
}

function SpacingRow({ tokens }: { tokens: Array<{ token: string; value: string }> }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {tokens.map(({ token, value }) => (
        <div key={token} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: `var(${token})`, height: 20, background: "var(--base-blue-07)", borderRadius: 2, minWidth: 2 }} />
          <span style={{ fontFamily: "monospace", fontSize: 11, color: "#555" }}>{token} — {value}</span>
        </div>
      ))}
    </div>
  )
}

function RadiusRow({ tokens }: { tokens: Array<{ token: string; value: string }> }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
      {tokens.map(({ token, value }) => (
        <div key={token} style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
          <div style={{ width: 64, height: 64, background: "var(--base-blue-03)", border: "2px solid var(--base-blue-07)", borderRadius: `var(${token})` }} />
          <span style={{ fontFamily: "monospace", fontSize: 10, color: "#555" }}>{token}<br />{value}</span>
        </div>
      ))}
    </div>
  )
}

// ─── stories ─────────────────────────────────────────────────────────────────

export const BasePalette: Story = {
  name: "Base — Palette",
  render: () => (
    <div>
      <Section title="Gray">
        <SwatchRow tokens={["--base-gray-01","--base-gray-02","--base-gray-03","--base-gray-04","--base-gray-05","--base-gray-06","--base-gray-07","--base-gray-08","--base-gray-09","--base-gray-10","--base-gray-11","--base-gray-12","--base-gray-13","--base-gray-14","--base-gray-15","--base-gray-16"]} />
      </Section>
      <Section title="Blue">
        <SwatchRow tokens={["--base-blue-01","--base-blue-02","--base-blue-03","--base-blue-04","--base-blue-05","--base-blue-06","--base-blue-07","--base-blue-08","--base-blue-09","--base-blue-10","--base-blue-11","--base-blue-12"]} />
      </Section>
      <Section title="Green">
        <SwatchRow tokens={["--base-green-01","--base-green-02","--base-green-03","--base-green-04","--base-green-05","--base-green-06","--base-green-07","--base-green-08","--base-green-09","--base-green-10","--base-green-11","--base-green-12"]} />
      </Section>
      <Section title="Orange">
        <SwatchRow tokens={["--base-orange-01","--base-orange-02","--base-orange-03","--base-orange-04","--base-orange-05","--base-orange-06","--base-orange-07","--base-orange-08","--base-orange-09","--base-orange-10","--base-orange-11","--base-orange-12"]} />
      </Section>
      <Section title="Red">
        <SwatchRow tokens={["--base-red-01","--base-red-02","--base-red-03","--base-red-04","--base-red-05","--base-red-06","--base-red-07","--base-red-08","--base-red-09","--base-red-10","--base-red-11","--base-red-12"]} />
      </Section>
      <Section title="Transparent Black">
        <SwatchRow tokens={["--base-black-alpha-01","--base-black-alpha-02","--base-black-alpha-03","--base-black-alpha-04","--base-black-alpha-05","--base-black-alpha-06","--base-black-alpha-07","--base-black-alpha-08","--base-black-alpha-09","--base-black-alpha-10","--base-black-alpha-11","--base-black-alpha-12","--base-black-alpha-13","--base-black-alpha-14","--base-black-alpha-15","--base-black-alpha-16"]} />
      </Section>
      <Section title="Transparent White">
        <div style={{ background: "#555", padding: 16, borderRadius: 8 }}>
          <SwatchRow tokens={["--base-white-alpha-01","--base-white-alpha-02","--base-white-alpha-03","--base-white-alpha-04","--base-white-alpha-05","--base-white-alpha-06","--base-white-alpha-07","--base-white-alpha-08","--base-white-alpha-09","--base-white-alpha-10","--base-white-alpha-11","--base-white-alpha-12","--base-white-alpha-13","--base-white-alpha-14","--base-white-alpha-15","--base-white-alpha-16"]} />
        </div>
      </Section>
    </div>
  ),
}

export const SemanticBackground: Story = {
  name: "Semantic — Background & Border",
  render: () => (
    <div>
      <Section title="Background">
        <SwatchRow tokens={["--bg-default","--bg-subtle","--bg-strong","--bg-elevated","--bg-disabled","--bg-contrast","--bg-sidebar"]} />
      </Section>
      <Section title="Border">
        <SwatchRow tokens={["--border-default","--border-subtle","--border-minimal","--border-disabled","--border-contrast"]} />
      </Section>
    </div>
  ),
}

export const SemanticText: Story = {
  name: "Semantic — Text & Icon",
  render: () => (
    <div>
      <Section title="Text">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "--text-default","--text-subtle","--text-minimal","--text-muted",
            "--text-disabled","--text-contrast",
            "--text-brand","--text-destructive","--text-warning","--text-success",
          ].map(t => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, background: `var(${t})`, border: "1px solid rgba(0,0,0,0.08)", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: `var(${t})`, background: t === "--text-contrast" || t === "--text-transparent" ? "#333" : undefined, padding: t === "--text-contrast" || t === "--text-transparent" ? "0 6px" : undefined, borderRadius: 4 }}>
                The quick brown fox — <code style={{ fontFamily: "monospace", fontSize: 13 }}>{t}</code>
              </span>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Icon">
        <SwatchRow tokens={["--icon-default","--icon-subtle","--icon-minimal","--icon-muted","--icon-disabled","--icon-contrast","--icon-destructive","--icon-warning","--icon-success"]} />
      </Section>
    </div>
  ),
}

export const SemanticActions: Story = {
  name: "Semantic — Actions",
  render: () => (
    <div>
      <SemanticRow label="Neutral" tokens={["--action-primary","--action-primary-hover","--action-primary-pressed","--action-primary-disabled","--action-secondary","--action-secondary-hover","--action-secondary-pressed","--action-secondary-disabled"]} />
      <SemanticRow label="Brand" tokens={["--action-brand-primary","--action-brand-primary-hover","--action-brand-primary-pressed","--action-brand-primary-disabled","--action-brand-secondary","--action-brand-secondary-hover","--action-brand-secondary-pressed","--action-brand-secondary-disabled"]} />
      <SemanticRow label="Success" tokens={["--action-success-primary","--action-success-primary-hover","--action-success-primary-pressed","--action-success-primary-disabled","--action-success-secondary","--action-success-secondary-hover","--action-success-secondary-pressed","--action-success-secondary-disabled"]} />
      <SemanticRow label="Warning" tokens={["--action-warning-primary","--action-warning-primary-hover","--action-warning-primary-pressed","--action-warning-primary-disabled","--action-warning-secondary","--action-warning-secondary-hover","--action-warning-secondary-pressed","--action-warning-secondary-disabled"]} />
      <SemanticRow label="Destructive" tokens={["--action-destructive-primary","--action-destructive-primary-hover","--action-destructive-primary-pressed","--action-destructive-primary-disabled"]} />
    </div>
  ),
}

export const SemanticAlerts: Story = {
  name: "Semantic — Alerts",
  render: () => (
    <div>
      {(["error","warning","success","info"] as const).map(type => (
        <Section key={type} title={`Alert — ${type}`}>
          <div style={{ display: "flex", gap: 0, borderRadius: 10, overflow: "hidden", border: `1px solid var(--alert-${type}-border)`, width: "fit-content" }}>
            {["bg-subtle","bg-surface","bg-accent","bg-strong","bg-contrast"].map(variant => (
              <div key={variant} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 16px", background: `var(--alert-${type}-${variant})` }}>
                <span style={{ fontFamily: "monospace", fontSize: 9, color: "#888" }}>{variant}</span>
              </div>
            ))}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 16px", background: "white" }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, background: `var(--alert-${type}-text)` }} />
              <span style={{ fontFamily: "monospace", fontSize: 9, color: "#888" }}>text</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 16px", background: "white" }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, background: `var(--alert-${type}-icon)` }} />
              <span style={{ fontFamily: "monospace", fontSize: 9, color: "#888" }}>icon</span>
            </div>
          </div>
        </Section>
      ))}
    </div>
  ),
}

export const SemanticBadges: Story = {
  name: "Semantic — Badges",
  render: () => (
    <div>
      {(["blue","green","orange","red","gray"] as const).map(color => (
        <Section key={color} title={`Badge — ${color}`}>
          <div style={{ display: "flex", gap: 0, borderRadius: 10, overflow: "hidden", border: `1px solid var(--badge-${color}-border)`, width: "fit-content" }}>
            {["bg-subtle","bg-surface","bg-accent","bg-strong","bg-contrast"].map(variant => (
              <div key={variant} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 16px", background: `var(--badge-${color}-${variant})` }}>
                <span style={{ fontFamily: "monospace", fontSize: 9, color: "#888" }}>{variant}</span>
              </div>
            ))}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 16px", background: "white" }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, background: `var(--badge-${color}-text)` }} />
              <span style={{ fontFamily: "monospace", fontSize: 9, color: "#888" }}>text</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 16px", background: "white" }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, background: `var(--badge-${color}-icon)` }} />
              <span style={{ fontFamily: "monospace", fontSize: 9, color: "#888" }}>icon</span>
            </div>
          </div>
        </Section>
      ))}
    </div>
  ),
}

export const Spacing: Story = {
  name: "Spacing",
  render: () => (
    <Section title="Spacing">
      <SpacingRow tokens={[
        { token: "--space-0",    value: "0px" },
        { token: "--space-025",  value: "1px" },
        { token: "--space-050",  value: "2px" },
        { token: "--space-100",  value: "4px" },
        { token: "--space-150",  value: "6px" },
        { token: "--space-200",  value: "8px" },
        { token: "--space-250",  value: "10px" },
        { token: "--space-300",  value: "12px" },
        { token: "--space-400",  value: "16px" },
        { token: "--space-500",  value: "20px" },
        { token: "--space-600",  value: "24px" },
        { token: "--space-800",  value: "32px" },
        { token: "--space-1000", value: "40px" },
        { token: "--space-1200", value: "48px" },
        { token: "--space-1600", value: "64px" },
        { token: "--space-2000", value: "80px" },
        { token: "--space-2400", value: "96px" },
        { token: "--space-3200", value: "128px" },
      ]} />
    </Section>
  ),
}

export const BorderRadius: Story = {
  name: "Border Radius",
  render: () => (
    <Section title="Border Radius">
      <RadiusRow tokens={[
        { token: "--radius-0",    value: "0px" },
        { token: "--radius-050",  value: "2px" },
        { token: "--radius-100",  value: "4px" },
        { token: "--radius-150",  value: "6px" },
        { token: "--radius-200",  value: "8px" },
        { token: "--radius-300",  value: "10px" },
        { token: "--radius-400",  value: "12px" },
        { token: "--radius-500",  value: "16px" },
        { token: "--radius-600",  value: "20px" },
        { token: "--radius-full", value: "9999px" },
      ]} />
    </Section>
  ),
}

const headingScale = [
  { label: "xl",  size: "40px", lh: "48px" },
  { label: "md",  size: "28px", lh: "36px" },
  { label: "sm",  size: "24px", lh: "32px" },
  { label: "xs",  size: "20px", lh: "30px" },
  { label: "2xs", size: "18px", lh: "28px" },
]

const bodyScale = [
  { label: "2xl", size: "18px", lh: "28px" },
  { label: "lg",  size: "16px", lh: "26px" },
  { label: "md",  size: "14px", lh: "24px" },
  { label: "sm",  size: "13px", lh: "20px" },
  { label: "xs",  size: "12px", lh: "18px" },
  { label: "2xs", size: "11px", lh: "16px" },
]

const weights: Array<{ key: string; token: string; value: number }> = [
  { key: "default",  token: "--font-weight-regular",  value: 400 },
  { key: "medium",   token: "--font-weight-medium",   value: 500 },
  { key: "semibold", token: "--font-weight-semibold", value: 600 },
]

function TypeRow({ size, lh, weight, children }: { size: string; lh: string; weight: number; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24, padding: "10px 0", borderBottom: "1px solid #f0f0f0" }}>
      <span style={{ fontSize: size, lineHeight: lh, fontWeight: weight, fontFamily: "var(--font-sans)", color: "#191919", width: 32 }}>Ag</span>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: size, lineHeight: lh, fontWeight: weight, color: "#191919", flex: 1 }}>
        {children}
      </span>
    </div>
  )
}

export const Typography: Story = {
  name: "Typography",
  render: () => (
    <div style={{ maxWidth: 680 }}>
      <Section title="Heading — semibold">
        {headingScale.map(({ label, size, lh }) => (
          <TypeRow key={label} size={size} lh={lh} weight={600}>
            <span style={{ color: "#aaa", fontFamily: "monospace", fontSize: 11, fontWeight: 400, marginRight: 12 }}>{label} · {size.replace("px","")}/{lh.replace("px","")}</span>
            The quick brown fox jumps
          </TypeRow>
        ))}
      </Section>

      <Section title="Body">
        {bodyScale.map(({ label, size, lh }) => (
          <div key={label} style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: "monospace", fontSize: 11, color: "#aaa", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
            {weights.map(({ key, token, value }) => (
              <TypeRow key={key} size={size} lh={lh} weight={value}>
                <span style={{ color: "#bbb", fontFamily: "monospace", fontSize: 10, fontWeight: 400, marginRight: 12 }}>{key} · {size.replace("px","")}/{lh.replace("px","")}</span>
                The quick brown fox jumps over the lazy dog
              </TypeRow>
            ))}
          </div>
        ))}
      </Section>

      <Section title="Font Weight">
        <div style={{ display: "flex", gap: 48 }}>
          {weights.map(({ key, token, value }) => (
            <div key={key} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontWeight: value, fontSize: 24, fontFamily: "var(--font-sans)", color: "#191919", textTransform: "capitalize" }}>{key}</span>
              <code style={{ fontFamily: "monospace", fontSize: 11, color: "#555" }}>{token}</code>
              <span style={{ fontFamily: "monospace", fontSize: 10, color: "#bbb" }}>{value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Letter Spacing">
        {[
          { token: "--letter-spacing-0",     value: "0px",  label: "Default (0)" },
          { token: "--letter-spacing-neg-1", value: "-1px", label: "Tight (-1)" },
        ].map(({ token, value, label }) => (
          <div key={token} style={{ display: "flex", alignItems: "baseline", gap: 24, padding: "10px 0", borderBottom: "1px solid #f0f0f0" }}>
            <span style={{ letterSpacing: value, fontSize: 20, fontFamily: "var(--font-sans)", color: "#191919", flex: 1 }}>
              {label} — The quick brown fox
            </span>
            <code style={{ fontFamily: "monospace", fontSize: 11, color: "#aaa", flexShrink: 0 }}>{token}</code>
          </div>
        ))}
      </Section>
    </div>
  ),
}
