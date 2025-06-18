"use client";

import { useEffect, useState } from "react";

const InstallPopUp = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setIsInstallable(false);
    console.log(`User response to the install prompt: ${choiceResult.outcome}`);
  };

  if (!isInstallable) return null;

  return (
    <button onClick={handleInstallClick} className="install-button">
      Install App
    </button>
  );
};

export default InstallPopUp;
