import React, { useState, useEffect } from 'react';

const InstallAppButton = () => {
  const [ deferredPrompt, setDeferredPrompt ] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();

      setDeferredPrompt(e);
    });
  }, []);

  function installApp() {
    console.log(deferredPrompt);
    deferredPrompt.userChoice.then(result => {
      if(result.outcome === 'accepted') {
        console.log('User wants to install');
      } else {
        console.log('User dismissed install');
      }

      setDeferredPrompt(null);
    });
  }

  return deferredPrompt ? (
    <button onClick={installApp}>Install App</button>
  ) : null;
};

export default InstallAppButton;
