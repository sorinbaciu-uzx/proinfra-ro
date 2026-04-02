"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0a1628] border-t border-slate-700 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-white font-semibold text-sm mb-1">Acest site foloseste cookie-uri</p>
          <p className="text-slate-400 text-xs leading-relaxed">
            Folosim cookie-uri esentiale pentru functionarea site-ului si cookie-uri analitice pentru a intelege cum este utilizat site-ul.
            Poti accepta sau refuza cookie-urile non-esentiale. Pentru detalii, consulta politica noastra de confidentialitate.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-600 rounded-md hover:border-slate-400 transition-colors"
          >
            Refuz
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
          >
            Accept cookie-urile
          </button>
        </div>
      </div>
    </div>
  );
}
