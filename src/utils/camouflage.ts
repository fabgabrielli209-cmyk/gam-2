import { LOGO_DATA_URL } from '../data/logoBase64';

export type DisguiseType = 'gam-2' | 'docs' | 'drive' | 'classroom' | 'desmos' | 'canvas';

export interface DisguisePreset {
  id: DisguiseType;
  label: string;
  title: string;
  favicon: string;
}

export const DISGUISE_PRESETS: DisguisePreset[] = [
  {
    id: 'gam-2',
    label: 'Default (gam- 2)',
    title: 'gam- 2',
    favicon: LOGO_DATA_URL
  },
  {
    id: 'classroom',
    label: 'Google Classroom',
    title: 'Classes',
    favicon: 'https://ssl.gstatic.com/classroom/favicon.png'
  },
  {
    id: 'docs',
    label: 'Google Docs',
    title: 'Untitled document - Google Docs',
    favicon: 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico'
  },
  {
    id: 'drive',
    label: 'Google Drive',
    title: 'My Drive - Google Drive',
    favicon: 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png'
  },
  {
    id: 'desmos',
    label: 'Desmos Calculator',
    title: 'Desmos | Graphing Calculator',
    favicon: 'https://www.desmos.com/favicon.ico'
  },
  {
    id: 'canvas',
    label: 'Canvas LMS',
    title: 'Dashboard - Canvas',
    favicon: 'https://du11hjcvx0uqb.cloudfront.net/br/dist/images/favicon-e10d657a73.ico'
  }
];

export function applyDisguise(type: DisguiseType) {
  const preset = DISGUISE_PRESETS.find(p => p.id === type) || DISGUISE_PRESETS[0];
  document.title = preset.title;

  let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = preset.favicon;
  try {
    localStorage.setItem('gam2_disguise_mode', type);
  } catch (e) {}
}

export function getCurrentDisguise(): DisguiseType {
  try {
    const saved = localStorage.getItem('gam2_disguise_mode');
    if (saved && DISGUISE_PRESETS.some(p => p.id === saved)) {
      return saved as DisguiseType;
    }
  } catch (e) {}
  return 'gam-2';
}

/**
 * About:Blank Cloaking
 * Bypasses Chrome extensions (Securly, GoGuardian, Lightspeed)
 * by hosting the iframe inside an unmonitored about:blank window.
 */
export function launchAboutBlank(disguise: DisguiseType = 'classroom') {
  try {
    const win = window.open('about:blank', '_blank');
    if (!win) {
      alert('Pop-up was blocked. Please allow pop-ups for this site to open the Anti-Block Cloaked Window.');
      return false;
    }

    const preset = DISGUISE_PRESETS.find(p => p.id === disguise) || DISGUISE_PRESETS[1];
    const doc = win.document;
    doc.title = preset.title;

    // Disguised Favicon
    const link = doc.createElement('link');
    link.rel = 'icon';
    link.href = preset.favicon;
    doc.head.appendChild(link);

    // Fullscreen non-traceable iframe
    const iframe = doc.createElement('iframe');
    iframe.src = window.location.href;
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.border = 'none';
    iframe.style.margin = '0';
    iframe.style.padding = '0';
    iframe.style.outline = 'none';
    iframe.allow = 'fullscreen; autoplay; gamepad';

    doc.body.style.margin = '0';
    doc.body.style.padding = '0';
    doc.body.style.overflow = 'hidden';
    doc.body.style.background = '#020617';
    doc.body.appendChild(iframe);
    return true;
  } catch (e) {
    console.error('About:blank cloaking error', e);
    return false;
  }
}
