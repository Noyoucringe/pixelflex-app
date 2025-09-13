import { useState, createContext, useContext, useEffect } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reduceMotion: boolean;
  screenReader: boolean;
  darkMode: boolean;
  colorBlindSupport: boolean;
  fontSize: number;
  volume: number;
  colorScheme: 'default' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'monochrome';
  language: 'english' | 'spanish' | 'french' | 'german' | 'chinese';
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSetting: (key: keyof AccessibilitySettings, value: any) => void;
  toggleSetting: (key: keyof AccessibilitySettings) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reduceMotion: false,
    screenReader: false,
    darkMode: false,
    colorBlindSupport: false,
    fontSize: 16,
    volume: 80,
    colorScheme: 'default',
    language: 'english'
  });

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // Dark mode
    if (settings.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Font size
    root.style.setProperty('--base-font-size', `${settings.fontSize}px`);
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduce motion
    if (settings.reduceMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // Color schemes
    root.className = root.className.replace(/color-scheme-\w+/g, '');
    if (settings.colorScheme !== 'default') {
      root.classList.add(`color-scheme-${settings.colorScheme}`);
    }

    // Color blind support
    if (settings.colorBlindSupport) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }

  }, [settings]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AccessibilityContext.Provider value={{ settings, updateSetting, toggleSetting }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};