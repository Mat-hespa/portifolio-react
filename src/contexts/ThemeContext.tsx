import React, { createContext, useState, useEffect, useContext } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    updateFavicon(isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const updateFavicon = (isDark: boolean) => {
    const faviconId = isDark ? 'dark-icon' : 'light-icon';
    const newFaviconHref = isDark ? '/MH-dark.png' : '/MH-light.png';
  
    let link = document.head.querySelector(`link#${faviconId}`) as HTMLLinkElement;
  
    if (!link) {
      link = document.createElement('link');
      link.id = faviconId;
      link.rel = 'icon';
      link.type = 'image/png';
      document.head.appendChild(link);
    }
  
    link.href = newFaviconHref;
  
    // Remover o outro ícone, se existir
    const otherIconId = isDark ? 'light-icon' : 'dark-icon';
    const otherIcon = document.head.querySelector(`link#${otherIconId}`);
    if (otherIcon) {
      otherIcon.remove();
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};