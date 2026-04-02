export function Authority() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">De ce sa lucrezi cu noi</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Expertiza dovedita in accesarea fondurilor nerambursabile</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-xl p-7 text-center">
            <div className="text-4xl font-extrabold text-blue-500 mb-2">17</div>
            <p className="text-sm text-slate-500 font-medium">Domenii de activitate eligibile acoperite</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-7 text-center">
            <div className="text-4xl font-extrabold text-blue-500 mb-2">100%</div>
            <p className="text-sm text-slate-500 font-medium">Rata de conformitate a dosarelor depuse</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-7 text-center">
            <div className="text-4xl font-extrabold text-blue-500 mb-2">A-Z</div>
            <p className="text-sm text-slate-500 font-medium">Asistenta completa de la eligibilitate la decontare</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-7 text-center">
            <div className="text-4xl font-extrabold text-blue-500 mb-2">0</div>
            <p className="text-sm text-slate-500 font-medium">Costuri initiale pentru evaluarea eligibilitatii</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-[#1e3a5f]">Cunoastere aprofundata a schemei PRO INFRA</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg shrink-0">&#10003;</span>
                Am analizat in detaliu schema de ajutor de stat publicata de Ministerul Transporturilor si Infrastructurii
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg shrink-0">&#10003;</span>
                Cunoastem criteriile de selectie bazate pe eficienta energetica (EUR/MWh economisit) si energia regenerabila
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg shrink-0">&#10003;</span>
                Pregatim dosarele conform Regulamentului (UE) nr. 651/2014 si a Fondului pentru Modernizare
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg shrink-0">&#10003;</span>
                Coordonam auditul energetic obligatoriu si implementarea sistemului EMS (Energy Management System)
              </li>
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-[#1e3a5f]">Echipa de consultanti specializati</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg shrink-0">&#10003;</span>
                Consultanti cu experienta in fonduri europene nerambursabile si ajutoare de stat
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg shrink-0">&#10003;</span>
                Cunoastere tehnica a proceselor industriale din toate cele 17 domenii eligibile
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg shrink-0">&#10003;</span>
                Parteneriate cu auditori energetici autorizati de Ministerul Energiei
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg shrink-0">&#10003;</span>
                Asistenta juridica pentru conformitatea cu legislatia nationala si europeana aplicabila
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
