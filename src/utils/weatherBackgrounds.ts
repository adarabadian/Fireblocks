export interface BackgroundTheme {
  gradient: string;
  overlays: string;
}

export const WEATHER_BACKGROUNDS: Record<string, BackgroundTheme> = {
  freezing: {
    gradient: 'linear-gradient(135deg, #e6f3ff 0%, #cce7ff 50%, #b3daff 100%)',
    overlays: `
      radial-gradient(circle at 20% 80%, rgba(173, 216, 230, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)
    `,
  },
  cold: {
    gradient: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 50%, #dbeafe 100%)',
    overlays: `
      radial-gradient(circle at 20% 80%, rgba(147, 197, 253, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)
    `,
  },
  cool: {
    gradient: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
    overlays: `
      radial-gradient(circle at 20% 80%, rgba(148, 163, 184, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)
    `,
  },
  mild: {
    gradient: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fde68a 100%)',
    overlays: `
      radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)
    `,
  },
  warm: {
    gradient: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, #fdba74 100%)',
    overlays: `
      radial-gradient(circle at 20% 80%, rgba(251, 146, 60, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.25) 0%, transparent 50%)
    `,
  },
  hot: {
    gradient: 'linear-gradient(135deg, #fef2f2 0%, #fecaca 50%, #fca5a5 100%)',
    overlays: `
      radial-gradient(circle at 20% 80%, rgba(248, 113, 113, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)
    `,
  },
};

export const SPECIAL_CONDITION_BACKGROUNDS: Record<string, BackgroundTheme> = {
  Rain: {
    gradient: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)',
    overlays: `
      radial-gradient(circle at 20% 80%, rgba(100, 116, 139, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.25) 0%, transparent 50%)
    `,
  },
  Snow: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
    overlays: `
      radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(226, 232, 240, 0.3) 0%, transparent 50%)
    `,
  },
}; 