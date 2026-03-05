// Converts all design tokens from hex to OKLCH and outputs tokens.css

function hexToOklch(hex) {
  hex = hex.replace('#', '');

  let r, g, b, a = 1;

  if (hex.length === 8) {
    r = parseInt(hex.slice(0, 2), 16) / 255;
    g = parseInt(hex.slice(2, 4), 16) / 255;
    b = parseInt(hex.slice(4, 6), 16) / 255;
    a = parseInt(hex.slice(6, 8), 16) / 255;
  } else {
    r = parseInt(hex.slice(0, 2), 16) / 255;
    g = parseInt(hex.slice(2, 4), 16) / 255;
    b = parseInt(hex.slice(4, 6), 16) / 255;
  }

  const lin = (c) => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  const rl = lin(r), gl = lin(g), bl = lin(b);

  // Step 1: linear sRGB → LMS (Björn Ottosson M1)
  const l = 0.4122214708 * rl + 0.5363325363 * gl + 0.0514459929 * bl;
  const m = 0.2119034982 * rl + 0.6806995451 * gl + 0.1073969566 * bl;
  const s = 0.0883024619 * rl + 0.2817188376 * gl + 0.6299787005 * bl;

  // Step 2: cube root
  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  // Step 3: LMS^(1/3) → OKLab (Björn Ottosson M2)
  const L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_;
  const A = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_;
  const B = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_;

  const C = Math.sqrt(A * A + B * B);
  let H = Math.atan2(B, A) * 180 / Math.PI;
  if (H < 0) H += 360;

  const Lf = +L.toFixed(4);
  const Cf = +C.toFixed(4);
  const Hf = +H.toFixed(2);

  if (a < 0.999) {
    const af = Math.round(a * 100);
    return `oklch(${Lf} ${Cf} ${Hf} / ${af}%)`;
  }
  return `oklch(${Lf} ${Cf} ${Hf})`;
}

// ─── Base palette (colors.mode1) ─────────────────────────────────────────────
const base = {
  // Grays
  'gray-01': '#ffffff',
  'gray-02': '#f7f7f7',
  'gray-03': '#f3f3f3',
  'gray-04': '#e5e5e5',
  'gray-05': '#d9d9d9',
  'gray-06': '#cccccc',
  'gray-07': '#bfbfbf',
  'gray-08': '#a6a6a6',
  'gray-09': '#959595',
  'gray-10': '#828282',
  'gray-11': '#6f6f6f',
  'gray-12': '#5c5c5c',
  'gray-13': '#4d4d4d',
  'gray-14': '#363636',
  'gray-15': '#262626',
  'gray-16': '#191919',

  // Blues
  'blue-01': '#f3f6fb',
  'blue-02': '#e8effb',
  'blue-03': '#d1e2fd',
  'blue-04': '#a5c4fb',
  'blue-05': '#76a0f5',
  'blue-06': '#5381eb',
  'blue-07': '#1f54de',
  'blue-08': '#1640be',
  'blue-09': '#0f2f9f',
  'blue-10': '#092080',
  'blue-11': '#05166a',
  'blue-12': '#000e33',

  // Greens
  'green-01': '#fafffa',
  'green-02': '#f1fce7',
  'green-03': '#e6fbd3',
  'green-04': '#c8f8a9',
  'green-05': '#9eec7b',
  'green-06': '#75d958',
  'green-07': '#3fc128',
  'green-08': '#27a51d',
  'green-09': '#148a14',
  'green-10': '#0c6f14',
  'green-11': '#075c15',
  'green-12': '#073300',

  // Oranges
  'orange-01': '#fffcfa',
  'orange-02': '#fff6e0',
  'orange-03': '#fff1cc',
  'orange-04': '#fee09a',
  'orange-05': '#feca67',
  'orange-06': '#fdb443',
  'orange-07': '#fc9105',
  'orange-08': '#d87203',
  'orange-09': '#b45801',
  'orange-10': '#914001',
  'orange-11': '#772f00',
  'orange-12': '#331c00',

  // Reds
  'red-01': '#fffcfa',
  'red-02': '#fff0e5',
  'red-03': '#ffe5d2',
  'red-04': '#ffc4a6',
  'red-05': '#ff9d7a',
  'red-06': '#ff7659',
  'red-07': '#ff3720',
  'red-08': '#b7101b',
  'red-09': '#a4131b',
  'red-10': '#930a1e',
  'red-11': '#7b0620',
  'red-12': '#330500',

  // Transparent blacks (based on #363636)
  'black-alpha-01': '#36363600',
  'black-alpha-02': '#3636360c',
  'black-alpha-03': '#36363619',
  'black-alpha-04': '#36363626',
  'black-alpha-05': '#36363633',
  'black-alpha-06': '#36363659',
  'black-alpha-07': '#36363672',
  'black-alpha-08': '#3636367f',
  'black-alpha-09': '#3636368c',
  'black-alpha-10': '#36363699',
  'black-alpha-11': '#363636a5',
  'black-alpha-12': '#363636b2',
  'black-alpha-13': '#363636bf',
  'black-alpha-14': '#363636cc',
  'black-alpha-15': '#363636d8',
  'black-alpha-16': '#363636e5',

  // Transparent whites
  'white-alpha-01': '#ffffff00',
  'white-alpha-02': '#ffffff0c',
  'white-alpha-03': '#ffffff19',
  'white-alpha-04': '#ffffff26',
  'white-alpha-05': '#ffffff33',
  'white-alpha-06': '#ffffff59',
  'white-alpha-07': '#ffffff72',
  'white-alpha-08': '#ffffff7f',
  'white-alpha-09': '#ffffff8c',
  'white-alpha-10': '#ffffff99',
  'white-alpha-11': '#ffffffa5',
  'white-alpha-12': '#ffffffb2',
  'white-alpha-13': '#ffffffbf',
  'white-alpha-14': '#ffffffcc',
  'white-alpha-15': '#ffffffd8',
  'white-alpha-16': '#ffffffe5',
};

// ─── Semantic tokens (light mode) ────────────────────────────────────────────
const semantic = {
  // Background
  'bg-default':           '#ffffff',
  'bg-subtle':            '#f7f7f7',
  'bg-strong':            '#e5e5e5',
  'bg-elevated':          '#f3f3f3',
  'bg-disabled':          '#3636360c',
  'bg-contrast':          '#191919',
  'bg-sidebar':           '#f3f3f3',

  // Text
  'text-default':         '#191919',
  'text-subtle':          '#4d4d4d',
  'text-minimal':         '#6f6f6f',
  'text-muted':           '#828282',
  'text-disabled':        '#3636367f',
  'text-contrast':        '#ffffff',
  'text-brand':           '#1f54de',
  'text-destructive':     '#a4131b',
  'text-warning':         '#d87203',
  'text-success':         '#27a51d',

  // Icon
  'icon-default':         '#191919',
  'icon-subtle':          '#4d4d4d',
  'icon-minimal':         '#6f6f6f',
  'icon-muted':           '#828282',
  'icon-disabled':        '#3636367f',
  'icon-contrast':        '#ffffff',
  'icon-destructive':     '#a4131b',
  'icon-warning':         '#d87203',
  'icon-success':         '#27a51d',

  // Border
  'border-default':       '#e5e5e5',
  'border-subtle':        '#f3f3f3',
  'border-minimal':       '#36363619',
  'border-disabled':      '#3636360c',
  'border-contrast':      '#191919',

  // Action — Neutral
  'action-primary':                 '#191919',
  'action-primary-hover':           '#262626',
  'action-primary-pressed':         '#363636',
  'action-primary-disabled':        '#36363619',
  'action-secondary':               '#ffffff',
  'action-secondary-hover':         '#f7f7f7',
  'action-secondary-pressed':       '#f3f3f3',
  'action-secondary-disabled':      '#36363619',

  // Action — Brand (blue)
  'action-brand-primary':           '#1f54de',
  'action-brand-primary-hover':     '#1640be',
  'action-brand-primary-pressed':   '#0f2f9f',
  'action-brand-primary-disabled':  '#36363626',
  'action-brand-secondary':         '#d1e2fd',
  'action-brand-secondary-hover':   '#a5c4fb',
  'action-brand-secondary-pressed': '#76a0f5',
  'action-brand-secondary-disabled':'#3636360c',

  // Action — Success (green)
  'action-success-primary':           '#27a51d',
  'action-success-primary-hover':     '#148a14',
  'action-success-primary-pressed':   '#0c6f14',
  'action-success-primary-disabled':  '#36363626',
  'action-success-secondary':         '#f1fce7',
  'action-success-secondary-hover':   '#e6fbd3',
  'action-success-secondary-pressed': '#c8f8a9',
  'action-success-secondary-disabled':'#3636360c',

  // Action — Warning (orange)
  'action-warning-primary':           '#d87203',
  'action-warning-primary-hover':     '#b45801',
  'action-warning-primary-pressed':   '#914001',
  'action-warning-primary-disabled':  '#36363626',
  'action-warning-secondary':         '#fff6e0',
  'action-warning-secondary-hover':   '#fff1cc',
  'action-warning-secondary-pressed': '#fee09a',
  'action-warning-secondary-disabled':'#3636360c',

  // Action — Destructive / Error (red)
  'action-destructive-primary':           '#a4131b',
  'action-destructive-primary-hover':     '#930a1e',
  'action-destructive-primary-pressed':   '#7b0620',
  'action-destructive-primary-disabled':  '#36363619',

  // Alert — Error
  'alert-error-bg-subtle':   '#fff0e5',
  'alert-error-bg-surface':  '#ffe5d2',
  'alert-error-bg-accent':   '#ff7659',
  'alert-error-bg-strong':   '#b7101b',
  'alert-error-bg-contrast': '#330500',
  'alert-error-border':      '#36363619',
  'alert-error-text':        '#7b0620',
  'alert-error-icon':        '#7b0620',

  // Alert — Warning
  'alert-warning-bg-subtle':   '#fff6e0',
  'alert-warning-bg-surface':  '#fff1cc',
  'alert-warning-bg-accent':   '#fdb443',
  'alert-warning-bg-strong':   '#fc9105',
  'alert-warning-bg-contrast': '#331c00',
  'alert-warning-border':      '#36363619',
  'alert-warning-text':        '#772f00',
  'alert-warning-icon':        '#772f00',

  // Alert — Success
  'alert-success-bg-subtle':   '#f1fce7',
  'alert-success-bg-surface':  '#e6fbd3',
  'alert-success-bg-accent':   '#75d958',
  'alert-success-bg-strong':   '#3fc128',
  'alert-success-bg-contrast': '#075c15',
  'alert-success-border':      '#36363619',
  'alert-success-text':        '#075c15',
  'alert-success-icon':        '#075c15',

  // Alert — Info (blue)
  'alert-info-bg-subtle':   '#e8effb',
  'alert-info-bg-surface':  '#d1e2fd',
  'alert-info-bg-accent':   '#5381eb',
  'alert-info-bg-strong':   '#1f54de',
  'alert-info-bg-contrast': '#05166a',
  'alert-info-border':      '#36363619',
  'alert-info-text':        '#092080',
  'alert-info-icon':        '#1640be',

  // Badge / Tag — Blue
  'badge-blue-text':        '#092080',
  'badge-blue-icon':        '#1f54de', // bg-strong
  'badge-blue-border':      '#36363619',
  'badge-blue-bg-subtle':   '#e8effb',
  'badge-blue-bg-surface':  '#e8effb', // bg-subtle
  'badge-blue-bg-accent':   '#5381eb',
  'badge-blue-bg-strong':   '#1f54de',
  'badge-blue-bg-contrast': '#05166a',

  // Badge / Tag — Green
  'badge-green-text':        '#075c15',
  'badge-green-icon':        '#3fc128', // bg-strong
  'badge-green-border':      '#36363619',
  'badge-green-bg-subtle':   '#f1fce7',
  'badge-green-bg-surface':  '#f1fce7', // bg-subtle
  'badge-green-bg-accent':   '#75d958',
  'badge-green-bg-strong':   '#3fc128',
  'badge-green-bg-contrast': '#075c15',

  // Badge / Tag — Orange
  'badge-orange-text':        '#772f00',
  'badge-orange-icon':        '#fc9105', // bg-strong
  'badge-orange-border':      '#36363619',
  'badge-orange-bg-subtle':   '#fff6e0',
  'badge-orange-bg-surface':  '#fff6e0', // bg-subtle
  'badge-orange-bg-accent':   '#fdb443',
  'badge-orange-bg-strong':   '#fc9105',
  'badge-orange-bg-contrast': '#331c00',

  // Badge / Tag — Red
  'badge-red-text':        '#7b0620',
  'badge-red-icon':        '#b7101b', // bg-strong
  'badge-red-border':      '#36363619',
  'badge-red-bg-subtle':   '#fff0e5',
  'badge-red-bg-surface':  '#fff0e5', // bg-subtle
  'badge-red-bg-accent':   '#ff7659',
  'badge-red-bg-strong':   '#b7101b',
  'badge-red-bg-contrast': '#330500',

  // Badge / Tag — Gray (exception: surface stays white — lightest)
  'badge-gray-text':        '#262626',
  'badge-gray-icon':        '#5c5c5c',
  'badge-gray-border':      '#36363619',
  'badge-gray-bg-subtle':   '#f7f7f7',
  'badge-gray-bg-surface':  '#ffffff', // stays white — lightest
  'badge-gray-bg-accent':   '#f3f3f3',
  'badge-gray-bg-strong':   '#e5e5e5',
  'badge-gray-bg-contrast': '#262626',
};

// ─── Spacing ─────────────────────────────────────────────────────────────────
const spacing = {
  'space-0':    0,
  'space-025':  1,
  'space-050':  2,
  'space-100':  4,
  'space-150':  6,
  'space-200':  8,
  'space-250':  10,
  'space-300':  12,
  'space-400':  16,
  'space-500':  20,
  'space-600':  24,
  'space-800':  32,
  'space-1000': 40,
  'space-1200': 48,
  'space-1600': 64,
  'space-2000': 80,
  'space-2400': 96,
  'space-3200': 128,
};

// ─── Border radius ────────────────────────────────────────────────────────────
const radii = {
  'radius-0':    0,
  'radius-050':  2,
  'radius-100':  4,
  'radius-150':  6,
  'radius-200':  8,
  'radius-300':  10,
  'radius-400':  12,
  'radius-500':  16,
  'radius-600':  20,
  'radius-full': 9999,
};

// ─── Build output ─────────────────────────────────────────────────────────────
let out = `/* =============================================================================
   Design Tokens — generated from brand JSON
   All colors expressed in oklch() for perceptual uniformity.
   Structure:
     1. Base (primitive palette)
     2. Semantic — light mode
     3. Semantic — dark mode (placeholder)
     4. Spacing
     5. Border radius
     6. Typography
   ============================================================================= */

/* ─── 1. Base palette (:root) ───────────────────────────────────────────────── */
:root {

  /* Grays */
`;

for (const [name, hex] of Object.entries(base)) {
  out += `  --base-${name}: ${hexToOklch(hex)};\n`;
  if (name.startsWith('gray') && name.endsWith('16')) out += '\n  /* Blues */\n';
  if (name.startsWith('blue') && name.endsWith('12')) out += '\n  /* Greens */\n';
  if (name.startsWith('green') && name.endsWith('12')) out += '\n  /* Oranges */\n';
  if (name.startsWith('orange') && name.endsWith('12')) out += '\n  /* Reds */\n';
  if (name.startsWith('red') && name.endsWith('12')) out += '\n  /* Transparent blacks */\n';
  if (name.startsWith('black') && name.endsWith('16')) out += '\n  /* Transparent whites */\n';
}

out += `}

/* ─── 2. Semantic tokens — light mode (:root) ───────────────────────────────── */
:root {

  /* ── Background ── */
`;

const sectionBreaks = {
  'text-default':                    '\n  /* ── Text ── */\n',
  'icon-default':                   '\n  /* ── Icon ── */\n',
  'border-default':                 '\n  /* ── Border ── */\n',
  'action-primary':                 '\n  /* ── Action — Neutral ── */\n',
  'action-brand-primary':           '\n  /* ── Action — Brand (blue) ── */\n',
  'action-success-primary':         '\n  /* ── Action — Success (green) ── */\n',
  'action-warning-primary':         '\n  /* ── Action — Warning (orange) ── */\n',
  'action-destructive-primary':     '\n  /* ── Action — Destructive / Error (red) ── */\n',
  'alert-error-bg-subtle':          '\n  /* ── Alert — Error ── */\n',
  'alert-warning-bg-subtle':        '\n  /* ── Alert — Warning ── */\n',
  'alert-success-bg-subtle':        '\n  /* ── Alert — Success ── */\n',
  'alert-info-bg-subtle':           '\n  /* ── Alert — Info ── */\n',
  'badge-blue-text':                 '\n  /* ── Badge / Tag — Blue ── */\n',
  'badge-green-text':                '\n  /* ── Badge / Tag — Green ── */\n',
  'badge-orange-text':               '\n  /* ── Badge / Tag — Orange ── */\n',
  'badge-red-text':                  '\n  /* ── Badge / Tag — Red ── */\n',
  'badge-gray-text':                 '\n  /* ── Badge / Tag — Gray ── */\n',
};

for (const [name, hex] of Object.entries(semantic)) {
  if (sectionBreaks[name]) out += sectionBreaks[name];
  out += `  --${name}: ${hexToOklch(hex)};\n`;
}

out += `}

/* ─── 3. Semantic tokens — dark mode (.dark) ────────────────────────────────── */
/* TODO: populate with dark mode token values */
.dark {
}

/* ─── 4. Spacing ────────────────────────────────────────────────────────────── */
:root {
`;

for (const [name, val] of Object.entries(spacing)) {
  out += `  --${name}: ${val}px;\n`;
}

out += `}

/* ─── 5. Border radius ──────────────────────────────────────────────────────── */
:root {
`;

for (const [name, val] of Object.entries(radii)) {
  out += `  --${name}: ${val === 9999 ? '9999px' : val + 'px'};\n`;
}

out += `}

/* ─── 6. Typography ─────────────────────────────────────────────────────────── */
:root {

  /* Font size — primitives */
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-size-13: 13px;
  --font-size-14: 14px;
  --font-size-16: 16px;
  --font-size-18: 18px;
  --font-size-20: 20px;
  --font-size-24: 24px;
  --font-size-28: 28px;
  --font-size-40: 40px;

  /* Font weight */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Letter spacing */
  --letter-spacing-0: 0px;
  --letter-spacing-neg-1: -1px;

  /* Line height — primitives */
  --line-height-16: 16px;
  --line-height-18: 18px;
  --line-height-20: 20px;
  --line-height-24: 24px;
  --line-height-26: 26px;
  --line-height-28: 28px;
  --line-height-30: 30px;
  --line-height-32: 32px;
  --line-height-36: 36px;
  --line-height-48: 48px;

  /* Paragraph & list */
  --paragraph-spacing-0: 0px;
  --paragraph-indent-0: 0px;
  --list-spacing-0: 0px;

  /* Heading scale — semibold, size/line-height */
  --heading-xl-size:   var(--font-size-40);
  --heading-xl-lh:     var(--line-height-48);
  --heading-md-size:   var(--font-size-28);
  --heading-md-lh:     var(--line-height-36);
  --heading-sm-size:   var(--font-size-24);
  --heading-sm-lh:     var(--line-height-32);
  --heading-xs-size:   var(--font-size-20);
  --heading-xs-lh:     var(--line-height-30);
  --heading-2xs-size:  var(--font-size-18);
  --heading-2xs-lh:    var(--line-height-28);

  /* Body scale — size/line-height (weight applied per use) */
  --body-2xl-size: var(--font-size-18);
  --body-2xl-lh:   var(--line-height-28);
  --body-lg-size:  var(--font-size-16);
  --body-lg-lh:    var(--line-height-26);
  --body-md-size:  var(--font-size-14);
  --body-md-lh:    var(--line-height-24);
  --body-sm-size:  var(--font-size-13);
  --body-sm-lh:    var(--line-height-20);
  --body-xs-size:  var(--font-size-12);
  --body-xs-lh:    var(--line-height-18);
  --body-2xs-size: var(--font-size-11);
  --body-2xs-lh:   var(--line-height-16);
}
`;

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Write tokens.css (oklch) ─────────────────────────────────────────────────
const outPath = resolve(__dirname, '../src/tokens.css');
writeFileSync(outPath, out);
console.log(`✓ Written to ${outPath}`);

// ─── Write tokens.colors.css (colors only — for pushing) ─────────────────────
const colorsOnly = out.split('/* ─── 4. Spacing')[0].trimEnd() + '\n';
const colorsPath = resolve(__dirname, '../src/tokens.colors.css');
writeFileSync(colorsPath, colorsOnly);
console.log(`✓ Written to ${colorsPath}`);

// ─── Write tokens.hex.css (original hex reference) ───────────────────────────
let hex = `/* =============================================================================
   Design Tokens — HEX REFERENCE
   Source-of-truth hex values. Do not use directly in components — use tokens.css.
   ============================================================================= */

/* ─── Base palette ── */
:root {

  /* Grays */
`;

for (const [name, val] of Object.entries(base)) {
  hex += `  --base-${name}: ${val};\n`;
  if (name === 'gray-16') hex += '\n  /* Blues */\n';
  if (name === 'blue-12') hex += '\n  /* Greens */\n';
  if (name === 'green-12') hex += '\n  /* Oranges */\n';
  if (name === 'orange-12') hex += '\n  /* Reds */\n';
  if (name === 'red-12') hex += '\n  /* Transparent blacks */\n';
  if (name === 'black-alpha-16') hex += '\n  /* Transparent whites */\n';
}

hex += `}

/* ─── Semantic — light mode ── */
:root {

  /* Background */
`;

const hexSectionBreaks = {
  'text-default':               '\n  /* Text */\n',
  'icon-default':               '\n  /* Icon */\n',
  'border-default':             '\n  /* Border */\n',
  'action-primary':             '\n  /* Action — Neutral */\n',
  'action-brand-primary':       '\n  /* Action — Brand */\n',
  'action-success-primary':     '\n  /* Action — Success */\n',
  'action-warning-primary':     '\n  /* Action — Warning */\n',
  'action-destructive-primary': '\n  /* Action — Destructive */\n',
  'alert-error-bg-subtle':      '\n  /* Alert — Error */\n',
  'alert-warning-bg-subtle':    '\n  /* Alert — Warning */\n',
  'alert-success-bg-subtle':    '\n  /* Alert — Success */\n',
  'alert-info-bg-subtle':       '\n  /* Alert — Info */\n',
  'badge-blue-text':            '\n  /* Badge — Blue */\n',
  'badge-green-text':           '\n  /* Badge — Green */\n',
  'badge-orange-text':          '\n  /* Badge — Orange */\n',
  'badge-red-text':             '\n  /* Badge — Red */\n',
  'badge-gray-text':            '\n  /* Badge — Gray */\n',
};

for (const [name, val] of Object.entries(semantic)) {
  if (hexSectionBreaks[name]) hex += hexSectionBreaks[name];
  hex += `  --${name}: ${val};\n`;
}

hex += `}
`;

const hexPath = resolve(__dirname, '../src/tokens.hex.css');
writeFileSync(hexPath, hex);
console.log(`✓ Written to ${hexPath}`);
