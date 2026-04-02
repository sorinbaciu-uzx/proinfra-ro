"use client";

import { useState } from "react";

interface CompanyData {
  cui: number;
  name: string;
  address: string;
  registrationNumber: string;
  caenCode: string;
  registrationDate: string;
  vatRegistered: boolean;
  inactive: boolean;
  legalForm: string;
  administrators: { name: string; role: string }[];
  authorizedCaenCodes: string[];
}

interface FinancialYear {
  year: number;
  indicators: { code: string; value: number; label: string }[];
}

const ELIGIBLE_CAEN = [
  "0811", "0812", "2320", "2343", "2352", "2361", "2363",
  "2364", "2369", "2370", "2399", "2431", "2432", "2433",
  "2434", "2511", "2732",
];

function formatNumber(n: number): string {
  return new Intl.NumberFormat("ro-RO").format(n);
}

function getIndicator(indicators: { code: string; value: number }[], code: string): number {
  return indicators.find((i) => i.code === code)?.value ?? 0;
}

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Step 1
  const [cui, setCui] = useState("");
  const [company, setCompany] = useState<CompanyData | null>(null);
  const [financials, setFinancials] = useState<FinancialYear[]>([]);
  const [hasConviction, setHasConviction] = useState<string>("");
  const [hasRecoveryDecision, setHasRecoveryDecision] = useState<string>("");
  const [isEligibleCaen, setIsEligibleCaen] = useState<boolean | null>(null);

  // Step 2
  const [replacesEquipment, setReplacesEquipment] = useState<string>("");
  const [hasEnergyAudit, setHasEnergyAudit] = useState<string>("");

  // Step 3
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const [submitted, setSubmitted] = useState(false);

  async function lookupCUI() {
    const cuiClean = cui.replace(/\D/g, "");
    if (!cuiClean) {
      setError("Introduceti un CUI valid.");
      return;
    }
    setLoading(true);
    setError("");
    setCompany(null);
    setFinancials([]);
    setIsEligibleCaen(null);

    try {
      const res = await fetch(`/api/company/${cuiClean}`);
      const data = await res.json();

      if (!data.success) {
        setError(data.error || "CUI negasit.");
        setLoading(false);
        return;
      }

      setCompany(data.company);
      setFinancials(data.financials || []);

      const allCaen = [
        data.company.caenCode,
        ...(data.company.authorizedCaenCodes || []),
      ];
      const eligible = allCaen.some((c: string) => ELIGIBLE_CAEN.includes(c));
      setIsEligibleCaen(eligible);
    } catch {
      setError("Eroare de conexiune. Incercati din nou.");
    }
    setLoading(false);
  }

  function canProceedStep1(): boolean {
    return (
      company !== null &&
      hasConviction !== "" &&
      hasRecoveryDecision !== "" &&
      isEligibleCaen === true &&
      hasConviction === "nu" &&
      hasRecoveryDecision === "nu" &&
      !company.inactive
    );
  }

  function canProceedStep2(): boolean {
    return replacesEquipment !== "" && hasEnergyAudit !== "";
  }

  function canSubmit(): boolean {
    return contactName.trim() !== "" && contactEmail.trim() !== "" && contactPhone.trim() !== "";
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  const latestFinancial = financials.length > 0
    ? financials.reduce((a, b) => (a.year > b.year ? a : b))
    : null;

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-green-600 text-4xl font-bold">&#10003;</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Solicitare trimisa cu succes</h2>
        <p className="text-slate-500 text-lg mb-6">
          Multumim, {contactName}! Am primit datele companiei <strong>{company?.name}</strong> (CUI: {company?.cui}).
          Echipa noastra va analiza eligibilitatea si va reveni cu un raspuns in cel mai scurt timp.
        </p>
        <p className="text-slate-400 text-sm">
          Vei fi contactat la {contactEmail} sau {contactPhone}.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                step >= s
                  ? "bg-blue-500 text-white"
                  : "bg-slate-200 text-slate-400"
              }`}
            >
              {s}
            </div>
            <span className={`ml-3 text-sm font-medium hidden sm:inline ${step >= s ? "text-[#1e3a5f]" : "text-slate-400"}`}>
              {s === 1 ? "Date Companie" : s === 2 ? "Detalii Proiect" : "Contact"}
            </span>
            {s < 3 && (
              <div className={`flex-1 h-0.5 mx-4 ${step > s ? "bg-blue-500" : "bg-slate-200"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Pasul 1: Identificarea Companiei</h2>
          <p className="text-slate-500 mb-8">Introduceti CUI-ul companiei pentru a verifica eligibilitatea in programul PRO INFRA.</p>

          {/* CUI Input */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={cui}
              onChange={(e) => setCui(e.target.value)}
              placeholder="Introduceti CUI-ul (ex: 14399840)"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              onKeyDown={(e) => e.key === "Enter" && lookupCUI()}
            />
            <button
              onClick={lookupCUI}
              disabled={loading}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 shrink-0"
            >
              {loading ? "Se cauta..." : "Cauta"}
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          {/* Company info */}
          {company && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">Date Companie</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">Denumire:</span>
                    <p className="font-semibold">{company.name}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">CUI:</span>
                    <p className="font-semibold">{company.cui}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Nr. Registru Comert:</span>
                    <p className="font-semibold">{company.registrationNumber}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Cod CAEN principal:</span>
                    <p className="font-semibold">{company.caenCode}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-slate-500">Adresa:</span>
                    <p className="font-semibold">{company.address}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Data inregistrarii:</span>
                    <p className="font-semibold">{company.registrationDate}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Forma juridica:</span>
                    <p className="font-semibold">{company.legalForm}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Platitor TVA:</span>
                    <p className="font-semibold">{company.vatRegistered ? "Da" : "Nu"}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Stare:</span>
                    <p className={`font-semibold ${company.inactive ? "text-red-600" : "text-green-600"}`}>
                      {company.inactive ? "INACTIV" : "ACTIV"}
                    </p>
                  </div>
                </div>

                {company.administrators.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <span className="text-slate-500 text-sm">Administratori:</span>
                    <div className="mt-1 space-y-1">
                      {company.administrators.map((admin, i) => (
                        <p key={i} className="text-sm">
                          <span className="font-semibold">{admin.name}</span>
                          <span className="text-slate-400 ml-2">({admin.role})</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CAEN eligibility */}
              {isEligibleCaen !== null && (
                <div className={`border rounded-lg p-4 ${isEligibleCaen ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                  {isEligibleCaen ? (
                    <p className="text-green-700 font-medium text-sm">
                      <span className="font-bold">&#10003; Cod CAEN eligibil</span> — Compania are cel putin un cod CAEN inclus in lista domeniilor eligibile PRO INFRA.
                    </p>
                  ) : (
                    <p className="text-red-700 font-medium text-sm">
                      <span className="font-bold">&#10007; Cod CAEN neeligibil</span> — Niciun cod CAEN al companiei nu se regaseste in lista celor 17 domenii eligibile PRO INFRA. Contactati-ne totusi pentru o analiza detaliata.
                    </p>
                  )}
                </div>
              )}

              {/* Inactive warning */}
              {company.inactive && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 font-medium text-sm">
                    <span className="font-bold">&#10007; Companie inactiva</span> — Companiile inactive nu pot accesa programul PRO INFRA.
                  </p>
                </div>
              )}

              {/* Financial summary */}
              {latestFinancial && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">
                    Date Financiare — {latestFinancial.year}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Cifra de afaceri:</span>
                      <p className="font-semibold">{formatNumber(getIndicator(latestFinancial.indicators, "I13"))} RON</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Profit / Pierdere neta:</span>
                      <p className={`font-semibold ${getIndicator(latestFinancial.indicators, "I18") > 0 ? "text-green-600" : getIndicator(latestFinancial.indicators, "I19") > 0 ? "text-red-600" : ""}`}>
                        {getIndicator(latestFinancial.indicators, "I18") > 0
                          ? `+${formatNumber(getIndicator(latestFinancial.indicators, "I18"))} RON`
                          : getIndicator(latestFinancial.indicators, "I19") > 0
                          ? `-${formatNumber(getIndicator(latestFinancial.indicators, "I19"))} RON`
                          : "0 RON"}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-500">Nr. mediu angajati:</span>
                      <p className="font-semibold">{formatNumber(getIndicator(latestFinancial.indicators, "I20"))}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Capitaluri proprii:</span>
                      <p className="font-semibold">{formatNumber(getIndicator(latestFinancial.indicators, "I10"))} RON</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Datorii totale:</span>
                      <p className="font-semibold">{formatNumber(getIndicator(latestFinancial.indicators, "I7"))} RON</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Active circulante:</span>
                      <p className="font-semibold">{formatNumber(getIndicator(latestFinancial.indicators, "I2"))} RON</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Legal questions */}
              <div className="space-y-6 bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#1e3a5f]">Declaratii Obligatorii</h3>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Reprezentantul legal al companiei a fost condamnat definitiv pentru infractiuni de coruptie, spalare de bani, constituirea unui grup infractional organizat sau frauda?
                  </label>
                  <div className="flex gap-4">
                    <label className={`flex items-center gap-2 px-5 py-3 border rounded-lg cursor-pointer transition-all ${hasConviction === "nu" ? "border-green-500 bg-green-50" : "border-slate-300 hover:border-slate-400"}`}>
                      <input type="radio" name="conviction" value="nu" checked={hasConviction === "nu"} onChange={() => setHasConviction("nu")} className="accent-green-500" />
                      <span className="text-sm font-medium">Nu</span>
                    </label>
                    <label className={`flex items-center gap-2 px-5 py-3 border rounded-lg cursor-pointer transition-all ${hasConviction === "da" ? "border-red-500 bg-red-50" : "border-slate-300 hover:border-slate-400"}`}>
                      <input type="radio" name="conviction" value="da" checked={hasConviction === "da"} onChange={() => setHasConviction("da")} className="accent-red-500" />
                      <span className="text-sm font-medium">Da</span>
                    </label>
                  </div>
                  {hasConviction === "da" && (
                    <p className="mt-2 text-red-600 text-sm font-medium">Companiile al caror reprezentant legal a fost condamnat pentru aceste infractiuni nu sunt eligibile conform Art. 10 din schema PRO INFRA.</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Compania are decizii de recuperare a unui ajutor de stat sau de minimis anterior care nu au fost integral executate?
                  </label>
                  <div className="flex gap-4">
                    <label className={`flex items-center gap-2 px-5 py-3 border rounded-lg cursor-pointer transition-all ${hasRecoveryDecision === "nu" ? "border-green-500 bg-green-50" : "border-slate-300 hover:border-slate-400"}`}>
                      <input type="radio" name="recovery" value="nu" checked={hasRecoveryDecision === "nu"} onChange={() => setHasRecoveryDecision("nu")} className="accent-green-500" />
                      <span className="text-sm font-medium">Nu</span>
                    </label>
                    <label className={`flex items-center gap-2 px-5 py-3 border rounded-lg cursor-pointer transition-all ${hasRecoveryDecision === "da" ? "border-red-500 bg-red-50" : "border-slate-300 hover:border-slate-400"}`}>
                      <input type="radio" name="recovery" value="da" checked={hasRecoveryDecision === "da"} onChange={() => setHasRecoveryDecision("da")} className="accent-red-500" />
                      <span className="text-sm font-medium">Da</span>
                    </label>
                  </div>
                  {hasRecoveryDecision === "da" && (
                    <p className="mt-2 text-red-600 text-sm font-medium">Companiile cu decizii de recuperare neexecutate nu sunt eligibile conform Art. 10 lit. a) din schema PRO INFRA.</p>
                  )}
                </div>
              </div>

              {/* Next button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  disabled={!canProceedStep1()}
                  className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Pasul Urmator &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Pasul 2: Detalii Proiect</h2>
          <p className="text-slate-500 mb-8">Raspundeti la intrebarile de mai jos pentru a ne ajuta sa evaluam proiectul dumneavoastra.</p>

          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <label className="block text-sm font-medium text-slate-700 mb-4">
                Proiectul vizeaza inlocuirea unui echipament existent?
              </label>
              <p className="text-xs text-slate-400 mb-4">
                PRO INFRA finanteaza exclusiv inlocuirea instalatiilor, utilajelor si echipamentelor existente cu alternative eficiente energetic. Echipamentul vechi trebuie casat in 30 de zile de la receptia celui nou.
              </p>
              <div className="flex gap-4">
                <label className={`flex items-center gap-2 px-6 py-3 border rounded-lg cursor-pointer transition-all ${replacesEquipment === "da" ? "border-blue-500 bg-blue-50" : "border-slate-300 hover:border-slate-400"}`}>
                  <input type="radio" name="replaces" value="da" checked={replacesEquipment === "da"} onChange={() => setReplacesEquipment("da")} className="accent-blue-500" />
                  <span className="text-sm font-medium">Da</span>
                </label>
                <label className={`flex items-center gap-2 px-6 py-3 border rounded-lg cursor-pointer transition-all ${replacesEquipment === "nu" ? "border-blue-500 bg-blue-50" : "border-slate-300 hover:border-slate-400"}`}>
                  <input type="radio" name="replaces" value="nu" checked={replacesEquipment === "nu"} onChange={() => setReplacesEquipment("nu")} className="accent-blue-500" />
                  <span className="text-sm font-medium">Nu</span>
                </label>
              </div>
              {replacesEquipment === "nu" && (
                <p className="mt-3 text-amber-600 text-sm font-medium">
                  Atentie: Schema PRO INFRA finanteaza doar inlocuirea echipamentelor existente, nu achizitia de echipamente noi fara a inlocui ceva existent. Va recomandam sa discutati cu echipa noastra pentru a evalua situatia concreta.
                </p>
              )}
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <label className="block text-sm font-medium text-slate-700 mb-4">
                Detineti un audit energetic recent?
              </label>
              <p className="text-xs text-slate-400 mb-4">
                Auditul energetic este obligatoriu conform Art. 11 lit. b) din schema. Trebuie realizat pe conturul proiectului de un auditor energetic autorizat de Ministerul Energiei.
              </p>
              <div className="flex gap-4">
                <label className={`flex items-center gap-2 px-6 py-3 border rounded-lg cursor-pointer transition-all ${hasEnergyAudit === "da" ? "border-blue-500 bg-blue-50" : "border-slate-300 hover:border-slate-400"}`}>
                  <input type="radio" name="audit" value="da" checked={hasEnergyAudit === "da"} onChange={() => setHasEnergyAudit("da")} className="accent-blue-500" />
                  <span className="text-sm font-medium">Da</span>
                </label>
                <label className={`flex items-center gap-2 px-6 py-3 border rounded-lg cursor-pointer transition-all ${hasEnergyAudit === "nu" ? "border-blue-500 bg-blue-50" : "border-slate-300 hover:border-slate-400"}`}>
                  <input type="radio" name="audit" value="nu" checked={hasEnergyAudit === "nu"} onChange={() => setHasEnergyAudit("nu")} className="accent-blue-500" />
                  <span className="text-sm font-medium">Nu</span>
                </label>
              </div>
              {hasEnergyAudit === "nu" && (
                <p className="mt-3 text-amber-600 text-sm font-medium">
                  Nu va faceti griji — va putem pune in legatura cu auditori energetici autorizati care pot realiza auditul necesar inainte de depunerea proiectului.
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-3 border border-slate-300 text-slate-600 font-medium rounded-lg hover:border-slate-400 transition-colors"
            >
              &larr; Inapoi
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!canProceedStep2()}
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Pasul Urmator &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Pasul 3: Date de Contact</h2>
          <p className="text-slate-500 mb-8">Completati datele dumneavoastra de contact pentru a fi contactat de echipa noastra de consultanti.</p>

          {/* Summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
            <p className="text-sm text-blue-800">
              <span className="font-bold">Companie:</span> {company?.name} (CUI: {company?.cui}) &mdash;
              <span className="font-bold ml-2">CAEN:</span> {company?.caenCode} &mdash;
              <span className="font-bold ml-2">Inlocuire echipament:</span> {replacesEquipment === "da" ? "Da" : "Nu"} &mdash;
              <span className="font-bold ml-2">Audit energetic:</span> {hasEnergyAudit === "da" ? "Da" : "Nu"}
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Nume si prenume *</label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Ex: Ion Popescu"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Adresa de email *</label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Ex: ion.popescu@companie.ro"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Numar de telefon *</label>
              <input
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="Ex: 0769081081"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 border border-slate-300 text-slate-600 font-medium rounded-lg hover:border-slate-400 transition-colors"
            >
              &larr; Inapoi
            </button>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit()}
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Trimite Solicitarea
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
