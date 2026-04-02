export interface DomainFAQ {
  question: string;
  answer: string;
}

export interface DomainBenefit {
  title: string;
  description: string;
}

export interface DomainData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  aboutTitle: string;
  aboutDescription: string[];
  benefits: DomainBenefit[];
  investments: string[];
  eligibility: string[];
  marketTitle: string;
  marketDescription: string[];
  faqs: DomainFAQ[];
  relatedSlugs: string[];
}

export const SITE_URL = "https://proinfra.ro";
export const SITE_NAME = "PRO INFRA";
export const SITE_DESCRIPTION = "Consultanta specializata pentru accesarea fondurilor nerambursabile prin programul PRO INFRA. Finantare 100% nerambursabila de pana la 15 milioane EUR pentru industria materialelor de constructii si infrastructura din Romania.";
export const COMPANY_NAME = "CAPCAUN SRL";
export const COMPANY_CUI = "RO12345678";
export const COMPANY_PHONE = "0769081081";
export const COMPANY_EMAIL = "sorin.baciu@proinfra.ro";

export const domains: DomainData[] = [
  {
    slug: "extractia-pietrei-ornamentale",
    title: "Extractia Pietrei Ornamentale si de Constructii",
    metaTitle: "PRO INFRA | Finantare pentru Extractia Pietrei Ornamentale si de Constructii",
    metaDescription: "Programul PRO INFRA ofera finantare 100% nerambursabila pentru extractia pietrei ornamentale si a pietrei pentru constructii. Modernizeaza-ti cariera de piatra cu pana la 15 milioane EUR fonduri europene. Consultanta gratuita.",
    keywords: ["PRO INFRA", "extractia pietrei ornamentale", "piatra pentru constructii", "finantare extractie piatra", "fonduri europene piatra", "modernizare cariera piatra", "program PRO INFRA", "piatra naturala"],
    heroTitle: "Finantare Nerambursabila pentru",
    heroHighlight: "Extractia Pietrei Ornamentale si de Constructii",
    heroDescription: "Modernizeaza-ti cariera de piatra, investeste in echipamente performante si creste capacitatea de productie cu fonduri europene nerambursabile prin programul PRO INFRA.",
    aboutTitle: "Ce este PRO INFRA si de ce conteaza pentru industria extractiei pietrei?",
    aboutDescription: [
      "Programul PRO INFRA reprezinta o oportunitate strategica de finantare dedicata companiilor din sectorul infrastructurii si materialelor de constructii din Romania. Este un program cu finantare 100% nerambursabila, ceea ce inseamna ca nu trebuie sa returnezi niciun leu din fondurile primite.",
      "Industria extractiei pietrei ornamentale si a pietrei pentru constructii se afla intr-un moment de transformare profunda. Cererea de piatra naturala de calitate superioara pentru proiecte de infrastructura, constructii rezidentiale premium si lucrari de restaurare arhitecturala este in continua crestere pe piata romaneasca si europeana.",
      "Prin accesarea acestui program, compania ta poate achizitiona echipamente de taiere si prelucrare de ultima generatie, sisteme de extractie cu impact redus asupra mediului, tehnologii de monitorizare digitala a productiei si solutii logistice avansate — toate cu finantare 100% nerambursabila."
    ],
    benefits: [
      { title: "Echipamente de Extractie Performante", description: "Achizitioneaza utilaje moderne de extractie — de la masini de taiere cu fir diamantat la excavatoare specializate si sisteme de perforare controlata. Creste productivitatea cu pana la 40% si reduce pierderile de material la minim." },
      { title: "Reducerea Costurilor Operationale", description: "Echipamentele noi consuma mai putina energie, necesita mai putina mentenanta si au o durata de viata semnificativ mai mare. Economiile operationale se acumuleaza rapid, transformand investitia in profit sustenabil pe termen lung." },
      { title: "Calitate Superioara a Produsului Finit", description: "Tehnologiile moderne de extractie permit obtinerea de blocuri de piatra cu dimensiuni precise, cu suprafete curate si fara microfisuri. Aceasta calitate superioara iti deschide accesul pe piete premium, atat nationale cat si internationale." },
      { title: "Conformitate cu Normele de Mediu", description: "Investitiile in echipamente moderne asigura reducerea emisiilor de praf, gestionarea eficienta a apelor uzate si minimizarea impactului asupra ecosistemelor locale — criterii esentiale pentru obtinerea si mentinerea autorizatiilor de mediu." },
      { title: "Digitalizarea Proceselor", description: "Implementeaza sisteme GPS de cartografiere a zacamantului, software de planificare a extractiei, monitorizare in timp real a productiei si trasabilitate digitala completa — de la bloc la client final." },
      { title: "Cresterea Capacitatii de Productie", description: "Cu echipamente noi si procese optimizate, poti creste volumul de piatra extrasa fara a mari suprafata exploatata. Mai multa piatra de calitate din aceeasi cariera inseamna eficienta maxima si profit crescut." }
    ],
    investments: [
      "Masini de taiere cu fir diamantat si disc diamantat pentru extractia blocurilor",
      "Excavatoare si incarcatoare frontale specializate pentru cariere de piatra",
      "Sisteme de perforare pneumatica si hidraulica de precizie",
      "Instalatii de sortare, calibrare si prelucrare primara a pietrei",
      "Echipamente de transport intern — autobasculante, benzi transportoare",
      "Sisteme de reducere a prafului si protectia mediului",
      "Software de planificare a extractiei si monitorizare a productiei",
      "Echipamente de laborator pentru testarea calitatii pietrei",
      "Sisteme GPS si drone pentru cartografierea zacamintelor",
      "Instalatii de reciclare a apei utilizate in procesul de taiere"
    ],
    eligibility: [
      "Companii inregistrate in Romania cu activitate in domeniul extractiei pietrei",
      "Minimum 1 an de activitate de la inregistrarea la Registrul Comertului",
      "Minimum 3 angajati cu contract individual de munca pe perioada nedeterminata",
      "Cifra de afaceri minima conform cerintelor ghidului solicitantului",
      "Sa nu se afle in stare de insolventa, faliment sau lichidare",
      "Sa nu aiba datorii restante la bugetul de stat sau bugetele locale",
      "Sa detina autorizatii de exploatare valabile si conforme cu legislatia in vigoare",
      "Sa demonstreze capacitatea de cofinantare, acolo unde este cazul"
    ],
    marketTitle: "Piata extractiei pietrei din Romania — oportunitati si provocari",
    marketDescription: [
      "Cererea de piatra naturala pe piata europeana depaseste 70 de milioane de tone anual. Romania, cu zacaminte importante de granit, marmura, calcar si gresie, are potentialul de a deveni un furnizor strategic pentru piata UE. Proiectele de infrastructura de mare anvergura genereaza o cerere constanta si in crestere.",
      "Principala provocare a industriei romanesti de extractie a pietrei este gradul scazut de modernizare. Multe cariere opereaza cu echipamente vechi de 20-30 de ani, cu productivitate scazuta si costuri energetice ridicate. Programul PRO INFRA adreseaza direct aceasta problema."
    ],
    faqs: [
      { question: "Cat dureaza procesul de obtinere a finantarii PRO INFRA?", answer: "Procesul complet, de la evaluarea eligibilitatii pana la semnarea contractului de finantare, dureaza in medie 4-6 luni. Elaborarea proiectului necesita 3-4 saptamani, iar evaluarea de catre autoritatea de management poate dura 2-4 luni." },
      { question: "Este finantarea PRO INFRA cu adevarat nerambursabila?", answer: "Da. Finantarea prin programul PRO INFRA este 100% nerambursabila. Nu trebuie sa returnezi niciun leu din fondurile primite, cu conditia sa respecti conditiile contractuale si sa implementezi proiectul conform planului aprobat." },
      { question: "Pot achizitiona echipamente second-hand cu aceasta finantare?", answer: "Nu. Programul PRO INFRA finanteaza exclusiv echipamente noi, nefolosite, cu garantie de la producator sau distribuitor autorizat. Aceasta conditie asigura performanta si fiabilitatea investitiei pe termen lung." },
      { question: "Compania mea trebuie sa contribuie financiar la proiect?", answer: "In functie de dimensiunea companiei si tipul investitiei, poate fi necesara o cofinantare proprie. Echipa noastra de consultanti iti va oferi detalii exacte despre procentul de cofinantare aplicabil in cazul tau specific." },
      { question: "Pot folosi finantarea si pentru lucrari de constructii in cariera?", answer: "Da, in anumite conditii. Programul PRO INFRA poate finanta si lucrari de amenajare a drumurilor de acces, platforme de depozitare, instalatii utilitare si alte investitii conexe direct legate de activitatea de extractie finandata." }
    ],
    relatedSlugs: ["extractia-pietrisului-nisipului", "taierea-fasonarea-finisarea-pietrei", "fabricarea-produselor-beton-constructii"]
  },
  {
    slug: "extractia-pietrisului-nisipului",
    title: "Extractia Pietrisului, Nisipului, Argilei si Caolinului",
    metaTitle: "PRO INFRA | Finantare pentru Extractia Pietrisului, Nisipului, Argilei si Caolinului",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru modernizarea balastierelor si exploatarilor de argila si caolin. Echipamente de extractie, sortare, spalare — pana la 15 milioane EUR fonduri europene.",
    keywords: ["PRO INFRA", "extractia pietrisului", "extractia nisipului", "argila", "caolin", "finantare balastiera", "fonduri europene agregate", "modernizare balastiera"],
    heroTitle: "Finantare pentru",
    heroHighlight: "Extractia Pietrisului, Nisipului, Argilei si Caolinului",
    heroDescription: "Investeste in modernizarea balastierei sau exploatarii de argila cu fonduri europene nerambursabile. Programul PRO INFRA iti ofera finantarea necesara pentru echipamente performante si procese eficiente.",
    aboutTitle: "PRO INFRA — motorul modernizarii in industria agregatelor minerale",
    aboutDescription: [
      "Balastierele si exploatarile de argila si caolin din Romania sunt coloana vertebrala a industriei constructiilor. Fiecare autostrada, fiecare cladire, fiecare proiect de infrastructura incepe cu agregatele minerale. Fara aceste materii prime, nimic nu se construieste.",
      "Programul PRO INFRA recunoaste rolul strategic al acestui sector si ofera finantare nerambursabila pentru modernizarea completa a operatiunilor de extractie. De la dragline si excavatoare la instalatii de spalare, sortare si clasificare a agregatelor — totul poate fi finantat prin acest program.",
      "Mai mult, programul sustine si investitiile in protectia mediului — sisteme de decantare, recirculare a apei, refacerea peisajului si monitorizare ecologica — elemente esentiale pentru operarea legala si responsabila a unei balastiere moderne."
    ],
    benefits: [
      { title: "Capacitate de Extractie Crescuta", description: "Echipamentele moderne de dragare si excavare permit extragerea unor volume semnificativ mai mari de agregate pe ora, cu consum energetic redus si uzura minima. Productivitatea balastierei creste cu pana la 60%." },
      { title: "Calitate Superioara a Agregatelor", description: "Instalatiile moderne de spalare si sortare produc agregate cu granulometrie precisa, continut redus de impuritati si caracteristici fizico-mecanice constante, conforme cu standardele EN 12620 si EN 13043." },
      { title: "Conformitate de Mediu Totala", description: "Sistemele moderne de tratare a apelor, decantare si recirculare reduc consumul de apa proaspata cu pana la 90%. Monitorizarea automatizata a parametrilor de mediu asigura conformitate permanenta." },
      { title: "Reducerea Costurilor Operationale", description: "Echipamentele noi consuma mai putin combustibil, necesita interventii de mentenanta mai rare si au disponibilitate operationala superioara. Fiecare tona de agregate produsa costa mai putin." },
      { title: "Automatizare si Digitalizare", description: "Implementeaza sisteme de cantarire automata, monitorizare GPS a flotei, software de gestiune a productiei si trasabilitate digitala a agregatelor. Deciziile bazate pe date reale." },
      { title: "Acces la Piete Premium", description: "Cu agregate certificate conform standardelor europene, poti livra pentru proiecte de autostrazi, cai ferate de mare viteza si constructii speciale — segmente cu valoare adaugata semnificativ mai mare." }
    ],
    investments: [
      "Excavatoare hidraulice pe senile si pe roti, optimizate pentru extractie in balastiere",
      "Dragline si pompe de nisip submersibile pentru extractie subacvatica",
      "Instalatii complete de spalare, sortare si clasificare a agregatelor",
      "Concasoare cu falci, cu con si cu impact pentru producerea de agregate de cariera",
      "Benzi transportoare, bunchere de stocare si sisteme de alimentare",
      "Autobasculante si incarcatoare frontale pentru transport intern",
      "Sisteme de decantare, recirculare si tratare a apei de proces",
      "Echipamente de laborator pentru controlul calitatii agregatelor",
      "Cantare electronice pentru camioane si sisteme de monitorizare a productiei",
      "Software de gestiune operationala si planificare a extractiei"
    ],
    eligibility: [
      "Companii inregistrate in Romania cu activitate in extractia agregatelor minerale",
      "Minimum 1 an de activitate de la inregistrare",
      "Minimum 3 angajati cu contract pe perioada nedeterminata",
      "Cifra de afaceri minima conform ghidului solicitantului",
      "Fara insolventa, faliment sau lichidare",
      "Fara datorii restante la bugetul de stat",
      "Autorizatii de exploatare valabile",
      "Capacitate de cofinantare demonstrata"
    ],
    marketTitle: "De ce este momentul ideal sa investesti in modernizarea extractiei de agregate",
    marketDescription: [
      "Romania se afla in plin boom al constructiilor de infrastructura. Programele nationale de autostrazi, cai ferate, drumuri expres si proiecte de dezvoltare urbana genereaza o cerere fara precedent de agregate minerale de calitate. Balastierele care pot livra volume mari de pietris si nisip sortat, spalat si certificat au comenzi asigurate pe ani de zile.",
      "Legislatia europeana si nationala privind protectia mediului devine tot mai stricta. Balastierele care opereaza cu echipamente vechi risca amenzi semnificative si chiar suspendarea autorizatiilor. PRO INFRA ofera solutia perfecta: finantare 100% nerambursabila pentru investitii care rezolva simultan problema productivitatii scazute si a conformitatii de mediu."
    ],
    faqs: [
      { question: "Balastiera mea este mica. Pot totusi accesa PRO INFRA?", answer: "Da. Programul PRO INFRA se adreseaza atat companiilor mici cat si celor mari. Nu exista un prag minim de productie. Important este sa indeplinesti criteriile de eligibilitate privind vechimea companiei, numarul de angajati si situatia financiara." },
      { question: "Pot finanta si o statie de concasare prin PRO INFRA?", answer: "Da. Statiile de concasare, sortare si spalare a agregatelor sunt investitii eligibile. Poti achizitiona atat statii fixe cat si mobile, in functie de specificul operatiunii tale." },
      { question: "Cum se face plata — primesc banii inainte sau dupa achizitie?", answer: "De regula, mecanismul presupune achizitia echipamentelor si apoi rambursarea din fondurile europene. Exista si posibilitatea obtinerii unui avans. Echipa noastra te va consilia cu privire la cele mai avantajoase optiuni." },
      { question: "Cat timp trebuie sa pastrez echipamentele achizitionate?", answer: "Echipamentele achizitionate prin PRO INFRA trebuie mentinute in patrimoniul companiei si utilizate conform destinatiei pe o perioada de minimum 3-5 ani de la finalizarea proiectului." }
    ],
    relatedSlugs: ["extractia-pietrei-ornamentale", "fabricarea-betonului", "fabricarea-produselor-beton-constructii"]
  },
  {
    slug: "fabricarea-produselor-refractare",
    title: "Fabricarea Produselor Refractare",
    metaTitle: "PRO INFRA | Finantare pentru Fabricarea Produselor Refractare",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru fabricarea produselor refractare. Cuptoare performante, prese de formare, sisteme de control — pana la 15 milioane EUR fonduri europene.",
    keywords: ["PRO INFRA", "produse refractare", "fabricare refractare", "caramizi refractare", "betoane refractare", "fonduri europene refractare", "finantare refractare"],
    heroTitle: "Finantare Nerambursabila pentru",
    heroHighlight: "Fabricarea Produselor Refractare",
    heroDescription: "Modernizeaza-ti linia de productie de materiale refractare cu fonduri europene PRO INFRA. Investeste in cuptoare performante, prese de formare si sisteme de control al calitatii fara sa platesti un leu din buzunarul propriu.",
    aboutTitle: "PRO INFRA sustine industria materialelor refractare din Romania",
    aboutDescription: [
      "Materialele refractare sunt esentiale pentru siderurgie, cimenturi, sticla, ceramica si industria energetica. Fara caramizi refractare, betoane termorezistente si materiale de captusire, nu ar functiona nici un furnal, nici un cuptor de ciment, nici o instalatie de topire a sticlei.",
      "In Romania, producatorii de materiale refractare se confrunta cu presiunea dubla a modernizarii tehnologice si a concurentei internationale. Echipamentele vechi, cu consum energetic ridicat si productivitate scazuta, fac productia romaneasca mai putin competitiva.",
      "Programul PRO INFRA vine exact la momentul potrivit. Finantarea nerambursabila pentru cuptoare cu eficienta energetica superioara, prese de formare automate, sisteme de dozare si amestecare de precizie poate transforma radical competitivitatea producatorilor romani."
    ],
    benefits: [
      { title: "Eficienta Energetica Superioara", description: "Cuptoarele tunnel si shuttle de ultima generatie reduc consumul de gaz natural cu 30-50% fata de echipamentele conventionale. La preturile actuale ale energiei, economia anuala poate depasi zeci de mii de euro." },
      { title: "Precizie in Formare si Presare", description: "Presele hidraulice si isostatice moderne asigura densitate uniforma, dimensiuni precise si rezistenta mecanica superioara a produselor finite. Rata de rebut scade dramatic." },
      { title: "Diversificarea Gamei de Produse", description: "Cu echipamente moderne, poti produce game extinse — de la caramizi standard la piese speciale cu forme complexe, betoane monolitice, mase de reparatii si produse nefasonare." },
      { title: "Control Total al Calitatii", description: "Laboratoare echipate cu echipamente de analiza termica, teste de rezistenta si determinare a porobitatii. Fiecare lot livrat vine cu certificat de calitate complet." },
      { title: "Automatizarea Productiei", description: "Sisteme robotizate de manipulare, stivuire si descarcarea cuptoarelor. Dozare automatizata a materiilor prime. Monitorizare in timp real a parametrilor de ardere." },
      { title: "Reducerea Amprentei de Carbon", description: "Echipamentele moderne cu eficienta energetica superioara si sisteme de recuperare a caldurii reduc emisiile de CO2 per tona de produs — un avantaj competitiv tot mai important pe piata europeana." }
    ],
    investments: [
      "Cuptoare tunnel, shuttle si periodice cu eficienta energetica superioara",
      "Prese hidraulice si isostatice pentru formarea produselor refractare",
      "Mixere, malaxoare si sisteme de dozare automata a materiilor prime",
      "Mori cu bile si instalatii de macinare si granulare",
      "Sisteme robotizate de manipulare, stivuire si paletizare",
      "Echipamente de laborator — analiza termica, rezistenta, porozitate",
      "Uscatoare industriale cu control automat al temperaturii si umiditatii",
      "Instalatii de filtrare a emisiilor si recuperare a caldurii",
      "Software SCADA pentru monitorizarea si controlul proceselor",
      "Echipamente de taiere, slefuire si finisare a produselor fasonare"
    ],
    eligibility: ["Companii inregistrate in Romania cu activitate in domeniul fabricarii produselor refractare", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "De ce merita sa investesti acum in productia de refractare",
    marketDescription: [
      "Piata globala a materialelor refractare depaseste 25 de miliarde de dolari si creste constant, sustinuta de expansiunea siderurgiei si a industriei cimentului. Romania, cu traditie industriala si acces la materii prime de calitate, are potential semnificativ de crestere.",
      "Proximitatea fata de marile piete de consum — siderurgiile din Europa Centrala si de Est — ofera producatorilor romani un avantaj logistic important fata de concurenta din Asia. PRO INFRA ofera finantarea care face posibila aceasta transformare."
    ],
    faqs: [
      { question: "Ce tipuri de produse refractare pot fi finantate prin PRO INFRA?", answer: "Programul acopera toate tipurile de produse refractare: caramizi, piese fasonare, betoane monolitice, mase de reparatii, produse nefasonare si materiale de captusire — atat pe baza de alumina cat si pe baza de silice sau magnezit." },
      { question: "Pot finanta si modernizarea laboratorului de testare?", answer: "Da, echipamentele de laborator pentru controlul calitatii sunt investitii eligibile. Aceasta include echipamente de analiza termica, prese de testare, aparate de masurare a porobitatii si compozitiei chimice." },
      { question: "Este necesara experienta anterioara in productia de refractare?", answer: "Da, compania trebuie sa aiba deja activitate in acest domeniu. PRO INFRA finanteaza modernizarea si extinderea capacitatilor existente, nu infiintarea de activitati noi." },
      { question: "Cat dureaza implementarea proiectului dupa aprobare?", answer: "Perioada de implementare este de maximum 36 de luni de la semnarea contractului de finantare. In aceasta perioada trebuie sa achizitionezi echipamentele, sa le instalezi si sa le pui in functiune." }
    ],
    relatedSlugs: ["fabricarea-varului-ipsosului", "fabricarea-izolatorilor-ceramici", "fabricarea-produselor-minerale-nemetalice"]
  },
  {
    slug: "fabricarea-izolatorilor-ceramici",
    title: "Fabricarea Izolatorilor Electrici si a Pieselor Izolante din Ceramica",
    metaTitle: "PRO INFRA | Finantare pentru Fabricarea Izolatorilor Electrici din Ceramica",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru fabricarea izolatorilor electrici si pieselor izolante din ceramica. Cuptoare, strunguri automate, echipamente de testare electrica.",
    keywords: ["PRO INFRA", "izolatori electrici", "piese izolante ceramica", "fabricare izolatori", "finantare izolatori", "ceramica electrotehnica"],
    heroTitle: "Finantare pentru",
    heroHighlight: "Fabricarea Izolatorilor Electrici si a Pieselor Izolante din Ceramica",
    heroDescription: "Acceseaza fonduri europene nerambursabile pentru modernizarea productiei de izolatori ceramici. Investeste in cuptoare de ardere performante, linii de glazurare si echipamente de testare electrica de precizie.",
    aboutTitle: "PRO INFRA finanteaza industria ceramicii electrotehnice din Romania",
    aboutDescription: [
      "Fiecare linie electrica de inalta tensiune, fiecare transformator, fiecare statie electrica depinde de izolatori ceramici de calitate superioara. Acestia trebuie sa reziste la tensiuni electrice extreme, socuri mecanice, variatii de temperatura si conditii atmosferice agresive — pe durate de viata de 30-50 de ani.",
      "Romania are o traditie importanta in fabricarea izolatorilor ceramici, dar industria necesita investitii semnificative. Cuptoarele vechi, procesele manuale si echipamentele de testare depasitie fac dificila competitia cu producatorii din Europa de Vest.",
      "Programul PRO INFRA ofera finantarea necesara: cuptoare cu control digital al temperaturii, linii automatizate de formare si glazurare, echipamente de testare electrica conform standardelor IEC si sisteme de control al calitatii in timp real."
    ],
    benefits: [
      { title: "Calitate Electrica Garantata", description: "Echipamentele de testare moderna permit verificarea fiecarui izolator conform standardelor IEC 60383 si IEC 61109. Generatoare de impuls, camere de salt fog si sisteme de masurare a rezistentei dielectrice." },
      { title: "Cuptoare cu Eficienta Maxima", description: "Cuptoarele tunnel cu profil termic controlat digital asigura ardere uniforma, consum energetic redus cu 40% si cicluri optimizate. Izolatori cu microstructura omogena si proprietati mecanice superioare." },
      { title: "Automatizarea Liniei de Productie", description: "De la prepararea pastei ceramice la formarea pe strunguri automate, glazurarea robotizata si descarcarea cuptoarelor — automatizarea completa reduce costul per piesa si elimina variabilitatile." },
      { title: "Diversificarea Portofoliului", description: "Cu echipamente moderne, poti produce izolatori pentru tensiuni de la 1 kV la 400 kV — de sustinere, de traversare, de linie si piese izolante speciale — acoperind toate segmentele pietei." },
      { title: "Certificari Internationale", description: "Echipamentele modernizate iti permit sa obtii certificari conform standardelor europene si internationale, deschizand accesul la piete de export cu valoare adaugata ridicata." },
      { title: "Sustenabilitate si Mediu", description: "Cuptoarele eficiente reduc emisiile de CO2. Glazurile fara plumb si procesele curate asigura conformitate cu regulamentele REACH si directivele europene de mediu." }
    ],
    investments: ["Cuptoare tunnel si periodice cu control digital al profilului termic", "Strunguri automate si semi-automate pentru formarea izolatorilor", "Instalatii de glazurare robotizata prin pulverizare sau imersie", "Mixere si malaxoare pentru prepararea pastelor ceramice", "Prese isostatice pentru izolatori de inalta tensiune", "Generatoare de impuls si echipamente de testare electrica", "Camere de salt fog pentru teste de imbatranire accelerata", "Echipamente de testare mecanica — tractiune, compresiune, flexiune", "Uscatoare cu control al umiditatii si temperaturii", "Software SCADA si sisteme de monitorizare a productiei"],
    eligibility: ["Companii din Romania cu activitate in fabricarea izolatorilor ceramici", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "Cererea de izolatori ceramici in crestere",
    marketDescription: [
      "Tranzitia energetica europeana — extinderea retelelor electrice pentru energie regenerabila, modernizarea infrastructurii de transport al energiei — genereaza o cerere puternica de izolatori ceramici de calitate superioara.",
      "Romania, cu proiecte majore de modernizare a retelei electrice nationale, are nevoie de producatori locali capabili sa livreze izolatori certificati, la preturi competitive si cu termene scurte. PRO INFRA ofera sansa de a te pozitiona ca furnizor strategic."
    ],
    faqs: [
      { question: "Ce standarde de testare trebuie sa indeplineasca izolatorii?", answer: "Izolatorii ceramici trebuie sa fie conformi cu standardele IEC 60383 (izolatori de linie) si IEC 61109 (izolatori compoziti). Echipamentele de testare finantate prin PRO INFRA permit verificarea completa a acestor standarde." },
      { question: "Pot produce si izolatori pentru export?", answer: "Da. Cu echipamente moderne si certificari internationale, poti exporta pe pietele europene. Cererea de izolatori certificati este in crestere in toata Europa, iar producatorii locali au avantaj logistic." },
      { question: "Ce tip de cuptoare sunt cele mai eficiente pentru izolatori?", answer: "Cuptoarele tunnel cu profil termic controlat digital sunt cele mai eficiente pentru productia in serie. Pentru serii mici si piese speciale, cuptoarele shuttle ofera flexibilitate mai mare." },
      { question: "Pot finanta si echipamente de testare electrica?", answer: "Da, echipamentele de testare — generatoare de impuls, camere de salt fog, sisteme de masurare a rezistentei de izolatie — sunt investitii eligibile prin PRO INFRA." }
    ],
    relatedSlugs: ["fabricarea-produselor-refractare", "fabricarea-firelor-cablurilor-electrice", "fabricarea-produselor-minerale-nemetalice"]
  },
  {
    slug: "fabricarea-varului-ipsosului",
    title: "Fabricarea Varului si Ipsosului",
    metaTitle: "PRO INFRA | Finantare pentru Fabricarea Varului si Ipsosului",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru fabricarea varului si ipsosului. Cuptoare de var moderne, linii de productie ipsos, echipamente de ambalare — pana la 15 milioane EUR.",
    keywords: ["PRO INFRA", "fabricare var", "fabricare ipsos", "cuptoare de var", "finantare var ipsos", "fonduri europene var", "productie var industrial"],
    heroTitle: "Finantare Nerambursabila pentru",
    heroHighlight: "Fabricarea Varului si Ipsosului",
    heroDescription: "Modernizeaza-ti cuptoarele de var, liniile de productie a ipsosului si echipamentele de ambalare cu fonduri europene 100% nerambursabile prin programul PRO INFRA.",
    aboutTitle: "PRO INFRA — finantarea care transforma industria varului si ipsosului",
    aboutDescription: [
      "Varul si ipsosul sunt materiale fundamentale pentru constructii, agricultura, industria chimica, siderurgie si protectia mediului. Fara var, nu exista mortar de calitate, stabilizare de terenuri, tratare a apelor sau neutralizare a emisiilor. Fara ipsos, nu exista pereti moderni de compartimentare sau tencuieli de finisaj.",
      "Romania are zacaminte importante de calcar si ghips, dar industria opereaza adesea cu echipamente vechi, energo-intensive si cu productivitate sub potential. Cuptoarele de var vechi consuma cu 30-50% mai mult combustibil decat modelele moderne.",
      "Programul PRO INFRA ofera solutia: finantare nerambursabila pentru cuptoare verticale sau rotative de ultima generatie, mori si clasificatoare pentru ipsos de inalta finete, linii de ambalare automatizate si echipamente de laborator."
    ],
    benefits: [
      { title: "Cuptoare de Var Eficiente Energetic", description: "Cuptoarele verticale cu preincalzire si regenerare termica reduc consumul de combustibil cu 35-50%. Calitatea varului creste datorita controlului precis al temperaturii si timpului de ardere." },
      { title: "Productie de Ipsos de Inalta Calitate", description: "Mori cu bile de ultima generatie, clasificatoare pneumatice si cuptoare de calcinare cu control digital permit producerea de ipsos cu finete si reactivitate controlate — de la constructii la aplicatii medicale." },
      { title: "Automatizare si Control Digital", description: "Sisteme SCADA pentru monitorizarea cuptoarelor, dozare automata a materiilor prime, sisteme de cantarire si ambalare robotizate. Mai putina munca manuala, mai multa precizie." },
      { title: "Reducerea Emisiilor de CO2", description: "Cuptoarele moderne emit cu 20-40% mai putin CO2 per tona de var produs. In contextul European Green Deal, aceasta reducere se traduce direct in economii financiare si conformitate regulamentara." },
      { title: "Diversificarea Produselor", description: "Var hidratat, var viu, lapte de var, ipsos de constructii, ipsos de modelaj, ipsos special — fiecare produs cu o piata si o marja de profit distincte." },
      { title: "Logistica si Ambalare Moderna", description: "Linii de ambalare in saci de 5 kg pana la big-bag-uri de 1 tona, paletizare automata, sisteme de incarcare in vrac — optimizat pentru livrari rapide si eficiente." }
    ],
    investments: ["Cuptoare verticale si rotative pentru arderea calcarului", "Hidratoare de var cu control automat", "Cuptoare de calcinare a ghipsului", "Mori cu bile, mori cu ciocane si clasificatoare pneumatice", "Silozuri de stocare cu extractie controlata", "Linii de ambalare automate — saci, paleti, big-bag", "Instalatii de filtrare a prafului si reducere a emisiilor", "Echipamente de laborator — analiza chimica, granulometrie", "Sisteme de transport pneumatic si mecanic", "Software de gestiune a productiei si trasabilitate"],
    eligibility: ["Companii din Romania cu activitate in fabricarea varului si ipsosului", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "Oportunitati de crestere pe piata romaneasca si europeana",
    marketDescription: [
      "Cererea de var in Romania depaseste 2 milioane de tone anual. Ipsosul urmeaza un trend ascendent datorita cresterii constructiilor drywall si renovarilor energetice ale cladirilor existente.",
      "La nivel european, varul joaca un rol crucial in strategiile de decarbonizare — captarea CO2, tratarea gazelor de ardere si stabilizarea solurilor. Producatorii cu amprenta de carbon redusa vor avea avantaj competitiv decisiv."
    ],
    faqs: [
      { question: "Ce tip de cuptor de var este cel mai eficient?", answer: "Cuptoarele verticale cu preincalzire si regenerare termica sunt cele mai eficiente energetic, cu consum de combustibil cu 35-50% mai mic decat cuptoarele rotative. Alegerea depinde de capacitatea dorita si tipul de var produs." },
      { question: "Pot produce si ipsos pentru aplicatii medicale?", answer: "Da, cu echipamente de calcinare si macinare de precizie, poti produce ipsos pentru aplicatii medicale si dentare, care are cerinte stricte de puritate si granulometrie." },
      { question: "Este necesara autorizatie de mediu specifica?", answer: "Da, fabricile de var necesita autorizatie integrata de mediu. Investitiile in echipamente cu emisii reduse, finantate prin PRO INFRA, faciliteaza obtinerea si mentinerea acestei autorizatii." },
      { question: "Pot finanta si achizitia unui camion siloz?", answer: "Da, echipamentele de transport in vrac, inclusiv camioane siloz, pot fi finantate daca sunt direct legate de activitatea de productie si distributie a varului sau ipsosului." }
    ],
    relatedSlugs: ["fabricarea-produselor-refractare", "fabricarea-mortarului", "fabricarea-betonului"]
  },
  {
    slug: "fabricarea-produselor-beton-constructii",
    title: "Fabricarea Produselor din Beton pentru Constructii",
    metaTitle: "PRO INFRA | Finantare pentru Fabricarea Produselor din Beton pentru Constructii",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru prefabricate din beton. Pavele, borduri, tuburi, stalpi, grinzi — masini de vibrocompactare, statii de betoane, forme metalice.",
    keywords: ["PRO INFRA", "produse din beton", "prefabricate beton", "pavele beton", "borduri beton", "finantare prefabricate", "fonduri europene beton"],
    heroTitle: "Finantare Nerambursabila pentru",
    heroHighlight: "Fabricarea Produselor din Beton pentru Constructii",
    heroDescription: "Prefabricate, pavele, borduri, tuburi, stalpi, grinzi — modernizeaza-ti linia de productie de produse din beton cu fonduri europene 100% nerambursabile prin programul PRO INFRA.",
    aboutTitle: "PRO INFRA sustine producatorii de prefabricate si produse din beton",
    aboutDescription: [
      "Produsele din beton pentru constructii — prefabricate structurale, pavele autoblocante, borduri, rigole, tuburi de canalizare, stalpi de iluminat — sunt esentiale pentru orice proiect de infrastructura din Romania.",
      "Cererea este in crestere constanta, alimentata de proiectele nationale de autostrazi, retele de canalizare, parcuri industriale si dezvoltari rezidentiale. Pentru a livra produse de calitate, la volumele si in termenele cerute, este necesara o capacitate de productie moderna.",
      "Programul PRO INFRA finanteaza masini de vibrocompactare de ultima generatie, statii de betoane automate, forme metalice de precizie, camere de maturare controlata, echipamente de paletizare si sisteme de control al calitatii."
    ],
    benefits: [
      { title: "Capacitate de Productie Crescuta", description: "Masinile de vibrocompactare automate produc pana la 3.000 de pavele pe ora sau sute de borduri intr-un ciclu continuu. Fata de productia semi-manuala, volumul creste de 5-10 ori." },
      { title: "Calitate Constanta si Certificata", description: "Dozarea automatizata, vibrarea controlata si maturarea in conditii optime asigura produse cu rezistenta mecanica si dimensiuni in tolerante stricte — conforme cu standardele EN." },
      { title: "Diversificarea Gamei de Produse", description: "Cu echipamente versatile, poti produce game extinse — de la pavele decorative multicolor la prefabricate structurale grele, de la tuburi de canalizare la elemente de mobilier urban." },
      { title: "Reducerea Costurilor", description: "Dozarea precisa elimina risipa. Automatizarea reduce necesarul de forta de munca. Maturarea controlata scurteaza ciclul de productie. Cost per produs semnificativ mai mic." },
      { title: "Eficienta Energetica", description: "Camerele de maturare cu recuperare de caldura, statiile de betoane cu motoare eficiente si sistemele de transport automate reduc consumul energetic per tona de produs finit." },
      { title: "Acces la Contracte Publice", description: "Cu produse certificate si capacitate demonstrata, te califici pentru contracte de furnizare catre proiecte de infrastructura publica — autostrazi, drumuri, retele utilitare." }
    ],
    investments: ["Masini de vibrocompactare automate pentru pavele, borduri si dale", "Statii de betoane cu dozare automata si control computerizat", "Forme metalice de precizie pentru prefabricate structurale", "Camere de maturare cu control al temperaturii si umiditatii", "Echipamente de pretensionare si postensionare pentru grinzi", "Mese si bancuri vibrante pentru productia de elemente speciale", "Sisteme de paletizare, ambalare si manipulare automata", "Mixere planetare si malaxoare pentru betoane speciale", "Echipamente de laborator — presa de testare, aparate de masura", "Instalatii de reciclare a betonului rezidual si a apei de spalare"],
    eligibility: ["Companii din Romania cu activitate in fabricarea produselor din beton", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "Oportunitati exceptionale pe piata romaneasca",
    marketDescription: [
      "Piata produselor din beton prefabricat din Romania depaseste 500 de milioane de euro anual si creste cu 8-12% pe an. Proiectele de infrastructura genereaza cerere masiva de borduri, dale, tuburi, capace de camine si elemente de drenaj.",
      "Producatorii care investesc acum in capacitati moderne vor fi cei care vor furniza materialele pentru mega-proiectele de infrastructura ale urmatorilor 10 ani. PRO INFRA face posibila aceasta pozitionare strategica."
    ],
    faqs: [
      { question: "Ce tip de masina de vibrocompactare este cel mai potrivit?", answer: "Alegerea depinde de gama de produse dorita. Pentru pavele si borduri, o masina cu palet mobil este ideala. Pentru tuburi si camine, sunt necesare echipamente specifice cu forme rotative. Echipa noastra te ajuta sa alegi optim." },
      { question: "Pot produce si prefabricate structurale grele?", answer: "Da, programul finanteaza si echipamente pentru prefabricate grele — grinzi, stalpi, panouri de perete, dale de planseu — inclusiv echipamente de pretensionare si postensionare." },
      { question: "Este necesara certificarea produselor?", answer: "Da, produsele din beton pentru constructii trebuie sa fie certificate conform standardelor EN aplicabile. Echipamentele de laborator finantate prin PRO INFRA permit obtinerea si mentinerea acestor certificari." },
      { question: "Pot finanta si o statie de betoane pentru alimentarea liniei?", answer: "Da, statiile de betoane sunt investitii eligibile, inclusiv cele cu dozare automata, malaxoare si silozuri de ciment — componente esentiale pentru o linie de productie de prefabricate." }
    ],
    relatedSlugs: ["fabricarea-betonului", "fabricarea-mortarului", "fabricarea-articolelor-beton-ciment-ipsos"]
  },
  {
    slug: "fabricarea-betonului",
    title: "Fabricarea Betonului",
    metaTitle: "PRO INFRA | Finantare pentru Fabricarea Betonului",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru statii de betoane. Dozare automata, malaxoare performante, autobetoniere, pompe de beton — pana la 15 milioane EUR fonduri europene.",
    keywords: ["PRO INFRA", "fabricare beton", "statie betoane", "finantare statie betoane", "beton marfa", "fonduri europene beton", "modernizare statie betoane"],
    heroTitle: "Finantare Nerambursabila pentru",
    heroHighlight: "Fabricarea Betonului",
    heroDescription: "Modernizeaza-ti statia de betoane cu echipamente de ultima generatie — dozare automata, malaxoare performante, sisteme de control al calitatii si logistica optimizata. Totul finantat prin PRO INFRA.",
    aboutTitle: "PRO INFRA — investitia strategica in statia ta de betoane",
    aboutDescription: [
      "Betonul este cel mai utilizat material de constructie din lume. In Romania, consumul anual depaseste 15 milioane de metri cubi, iar cererea creste constant. Fiecare statie de betoane care poate livra beton de calitate, la volum si la termen, are piata asigurata.",
      "Calitatea betonului depinde direct de calitatea echipamentelor. O statie cu dozare imprecisa, malaxare insuficienta si fara control automatizat produce beton cu proprietati variabile — un risc major pentru constructori.",
      "Programul PRO INFRA finanteaza modernizarea completa: de la silozuri si bunchere de agregate la malaxoare planetare, sisteme de dozare gravimetrica, pompe de beton, autobetoniere si laboratoare de incercare."
    ],
    benefits: [
      { title: "Dozare Precisa si Automata", description: "Sistemele de dozare gravimetrica cu celule de sarcina de precizie asigura proportii exacte — ciment, agregate, apa, aditivi. Fiecare sarza respecta reteta cu abateri sub 1%." },
      { title: "Capacitate de Productie Superioara", description: "Malaxoarele planetare sau cu axe gemene amesteca sarje de 1-3 mc in 30-60 secunde. Cu ciclu automat, poti produce 60-120 mc de beton pe ora." },
      { title: "Trasabilitate Completa", description: "Software-ul inregistreaza fiecare sarza — reteta, cantitati, ora, autobetoniera, santierul. Trasabilitate totala conform EN 206." },
      { title: "Betoane Speciale si Valoare Adaugata", description: "Betoane autocompactante SCC, fibrate, de inalta rezistenta C50/60+, permeabile, colorate — segmente cu marja de profit semnificativ mai mare." },
      { title: "Reducerea Impactului de Mediu", description: "Reciclare beton rezidual si apa de spalare. Captare praf la silozuri. Utilizare cenusa de termocentrala si zgura ca inlocuitori de ciment." },
      { title: "Logistica si Livrare Eficienta", description: "Autobetoniere noi, pompe de beton cu brat lung, GPS monitorizare flota. Livrari precise, la timp, cu monitorizare in timp real." }
    ],
    investments: ["Statii de betoane fixe si mobile cu dozare automata", "Malaxoare planetare si cu axe gemene", "Silozuri de ciment cu filtru de praf si indicatoare de nivel", "Bunchere de agregate cu benzi extractoare si transportoare", "Sisteme de dozare a apei si aditivilor chimici", "Autobetoniere cu volum de 7-12 mc", "Pompe de beton stationare si autopropulsate", "Instalatii de reciclare a betonului rezidual", "Laboratoare de incercare — prese, aparate Vicat, cupe de tasare", "Software de gestiune si planificarea livrarilor"],
    eligibility: ["Companii din Romania cu activitate in fabricarea betonului", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "De ce este acum momentul sa investesti",
    marketDescription: [
      "Romania se afla in plin boom al constructiilor de infrastructura. Autostrazile, drumurile expres, cladirile publice, proiectele rezidentiale si comerciale consuma cantitati imense de beton de calitate.",
      "Standardele de calitate devin tot mai stricte. Controlul tehnic, inspectoratele si inginerii proiectanti solicita beton certificat, cu buletine complete si conformitate EN 206. Statiile vechi pierd contracte. PRO INFRA ofera solutia."
    ],
    faqs: [
      { question: "Pot finanta o statie de betoane complet noua?", answer: "Da, PRO INFRA finanteaza atat modernizarea statiilor existente cat si achizitia de statii noi complete, inclusiv toate componentele — silozuri, bunchere, malaxor, sistem de dozare si automatizare." },
      { question: "Ce capacitate de productie ar trebui sa aleg?", answer: "Depinde de piata ta locala si de planurile de dezvoltare. Statiile cu capacitate de 30-60 mc/ora sunt potrivite pentru piete locale, iar cele de 60-120 mc/ora pentru proiecte mari de infrastructura." },
      { question: "Pot finanta si autobetoniere si pompe de beton?", answer: "Da, atat autobetonierele cat si pompele de beton sunt investitii eligibile prin PRO INFRA, fiind echipamente esentiale pentru livrarea betonului catre santiere." },
      { question: "Este necesar un laborator de incercare?", answer: "Da, un laborator de incercare este esential pentru controlul calitatii si pentru conformitatea cu EN 206. Echipamentele de laborator sunt investitii eligibile prin PRO INFRA." }
    ],
    relatedSlugs: ["fabricarea-produselor-beton-constructii", "fabricarea-mortarului", "extractia-pietrisului-nisipului"]
  },
  {
    slug: "fabricarea-mortarului",
    title: "Fabricarea Mortarului",
    metaTitle: "PRO INFRA | Finantare pentru Fabricarea Mortarului",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru fabricarea mortarului. Linii de productie mortare uscate si umede — mortar de zidarie, tencuiala, adezivi, sape. Pana la 200.000 EUR.",
    keywords: ["PRO INFRA", "fabricare mortar", "mortar uscat", "mortar zidarie", "tencuiala", "adezivi", "finantare mortar", "fonduri europene mortar"],
    heroTitle: "Finantare Nerambursabila pentru",
    heroHighlight: "Fabricarea Mortarului",
    heroDescription: "Investeste in linii de productie moderne de mortare uscate si umede — mortar de zidarie, tencuiala, adezivi pentru placi ceramice, sape si mortare speciale. Finantare 100% nerambursabila prin PRO INFRA.",
    aboutTitle: "PRO INFRA sustine producatorii de mortare din Romania",
    aboutDescription: [
      "Mortarul este prezent in fiecare constructie — de la zidarie la tencuieli, de la lipirea placilor ceramice la sape. Piata mortarelor uscate preambalate creste anual cu 10-15%, pe masura ce constructorii abandoneaza prepararea pe santier.",
      "Aceasta tranzitie de la mortarul artizanal la cel industrial reprezinta o oportunitate enorma pentru producatorii echipati cu linii moderne. Calitatea constanta, gama diversificata si capacitatea de livrare sunt factorii determinanti.",
      "Programul PRO INFRA ofera finantarea necesara pentru o linie completa de mortare uscate: uscatoare de nisip, silozuri, sisteme de dozare si amestecare, linii de ambalare si paletizare."
    ],
    benefits: [
      { title: "Gama Larga de Produse", description: "Cu o linie moderna, poti fabrica zeci de retete: mortar M5-M20, tencuieli interioare si exterioare, adezivi gresie/faianta, sape autonivelante, mortare de reparatie, hidrofuge si termoizolante." },
      { title: "Calitate Constanta si Certificata", description: "Dozarea gravimetrica automata asigura respectarea exacta a retetelor. Fiecare lot are aceeasi compozitie, lucrabilitate si rezistenta. Certificari EN 998-1 si EN 998-2." },
      { title: "Capacitate de Productie Scalabila", description: "Liniile moderne produc 10-40 tone pe ora. Cu silozuri si linii de ambalare rapide, poti raspunde prompt la comenzi mari de la distribuitori si retele DIY." },
      { title: "Ambalare si Logistica Eficienta", description: "Linii automate in saci de 5, 10, 25 si 40 kg, paletizare robotizata, folierea paletilor si etichetare cu cod de bare. Produse gata de raft." },
      { title: "Control de Laborator Avansat", description: "Echipamente de testare a rezistentei, adeziunii, timpului de priza, lucrabiltatii si absorbtiei de apa. Fiecare lot cu certificat de conformitate." },
      { title: "Marja de Profit Superioara", description: "Mortarele uscate preambalate au marja semnificativ mai mare decat materiile prime brute. Valoarea adaugata prin procesare, ambalare si branding multiplica valoarea comerciala." }
    ],
    investments: ["Uscatoare rotative sau cu tambur pentru nisip si agregate fine", "Silozuri de stocare pentru ciment, var, nisip uscat si aditivi", "Sisteme de dozare gravimetrica cu celule de sarcina", "Malaxoare orizontale sau verticale pentru amestecuri uscate", "Transportoare cu snec, pneumatice si elevatoare cu cupe", "Linii de ambalare automate — saci, paleti, folie stretch", "Sisteme de filtrare a prafului si protectia mediului", "Echipamente de laborator pentru controlul calitatii", "Software de gestiune a retetelor si trasabilitate", "Dozatoare de aditivi speciali — fibre, polimeri, pigmenti"],
    eligibility: ["Companii din Romania cu activitate in fabricarea mortarului", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "De ce piata mortarelor este in plina expansiune",
    marketDescription: [
      "In Europa de Vest, peste 80% din mortarul utilizat este produs industrial. In Romania, procentul creste rapid, iar tranzitia este ireversibila. Renovarile energetice genereaza cerere enorma de mortare termoizolante si adezivi.",
      "Producatorii romani care investesc acum vor beneficia de cresterea pietei pe termen lung. PRO INFRA face posibila aceasta investitie fara a greva capitalul propriu."
    ],
    faqs: [
      { question: "Ce capacitate de productie este optima pentru inceput?", answer: "O linie de 10-15 tone pe ora este un punct de plecare bun pentru piata locala. Pe masura ce cresti clientii si distributia, poti extinde capacitatea adaugand echipamente suplimentare." },
      { question: "Pot produce si adezivi pentru polistiren (ETICS)?", answer: "Da. Adezivii pentru sisteme termoizolante sunt printre cele mai profitabile produse din gama de mortare uscate si sunt investitii eligibile prin PRO INFRA." },
      { question: "Este necesara reteta proprie sau pot folosi retete standard?", answer: "Poti incepe cu retete standard bazate pe norme EN. Pe masura ce acumulezi experienta, poti dezvolta retete proprii optimizate. Echipamentele de laborator finantate prin PRO INFRA te ajuta in acest proces." },
      { question: "Pot vinde sub marca proprie (private label)?", answer: "Da. Cu o linie de productie moderna, poti produce atat sub marca proprie cat si sub marcile private ale distribuitorilor si retelelor de magazine — o strategie care diversifica veniturile." }
    ],
    relatedSlugs: ["fabricarea-betonului", "fabricarea-varului-ipsosului", "fabricarea-produselor-beton-constructii"]
  },
  {
    slug: "fabricarea-articolelor-beton-ciment-ipsos",
    title: "Fabricarea Altor Articole din Beton, Ciment si Ipsos",
    metaTitle: "PRO INFRA | Finantare pentru Fabricarea Articolelor din Beton, Ciment si Ipsos",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru articole din beton, ciment si ipsos. Elemente decorative, mobilier urban, panouri 3D ipsos, camine vizitare — pana la 15 milioane EUR.",
    keywords: ["PRO INFRA", "articole beton", "articole ciment", "articole ipsos", "gips carton", "elemente decorative beton", "mobilier urban beton"],
    heroTitle: "Finantare pentru",
    heroHighlight: "Fabricarea Articolelor din Beton, Ciment si Ipsos",
    heroDescription: "De la elemente decorative din beton la placi de gips-carton, de la mobilier urban la jardiniere si balustrade — modernizeaza-ti productia cu fonduri europene nerambursabile prin PRO INFRA.",
    aboutTitle: "PRO INFRA finanteaza creativitatea si inovatia in produse din beton, ciment si ipsos",
    aboutDescription: [
      "Acest domeniu cuprinde o gama diversa de produse: elemente functionale precum camine de vizitare, capace, rigole, dar si produse cu valoare estetica ridicata precum jardiniere arhitecturale, mobilier urban din beton, panouri decorative din ipsos.",
      "Betonul nu mai este perceput doar ca material utilitar — a devenit material de design. Betonul aparent, texturat, colorat si ultra-performant sunt cerute de arhitecti si designeri. Ipsosul trece de la simpla placa de gips-carton la panouri 3D decorative.",
      "PRO INFRA finanteaza echipamentele care fac posibila aceasta evolutie: forme de silicon, mese vibrante de precizie, echipamente CNC pentru frezare si gravare, linii de finisare si vopsire."
    ],
    benefits: [
      { title: "Valoare Adaugata Maxima", description: "Articolele decorative si speciale au marje de 3-10 ori mai mari decat produsele standard. O jardiniera arhitecturala din beton fibrat se vinde la un pret de zeci de ori mai mare decat costul materiilor prime." },
      { title: "Diversitate si Flexibilitate", description: "Cu echipamente versatile, poti produce game nelimitate — de la piese industriale functionale la obiecte de design exclusiviste. Fiecare produs nou deschide un nou segment de piata." },
      { title: "Tehnologie CNC si Precizie", description: "Echipamentele CNC pentru forme si matrite permit piese cu detalii fine, geometrii complexe si repetabilitate perfecta. Calitatea ajunge la nivel de arta." },
      { title: "Piata in Crestere Rapida", description: "Tendinta de amenajare urbana si design interior cu materiale naturale alimenteaza cererea de articole din beton, ciment si ipsos cu aspect premium." },
      { title: "Produse Personalizate", description: "Capacitate de personalizare — culori, texturi, dimensiuni, gravuri — care adauga valoare semnificativa si diferentiaza compania de concurenta." },
      { title: "Export si Piete Internationale", description: "Produsele de design au cerere pe pietele europene, unde consumatorii apreciaza calitatea artizanala si materialele naturale." }
    ],
    investments: ["Mese vibrante si sisteme de turnare pentru articole din beton", "Masini CNC pentru fabricarea formelor si matritelor", "Mixere si malaxoare pentru betoane speciale si ipsos", "Forme din silicon, fibra de sticla si metal", "Linii de productie pentru placi de gips-carton", "Echipamente de vopsire, glazurare si finisare", "Camere de uscare si maturare controlata", "Sisteme de ambalare si protectie pentru transport", "Echipamente de laborator pentru testarea calitatii", "Software de design 3D si planificare a productiei"],
    eligibility: ["Companii din Romania cu activitate in fabricarea articolelor din beton, ciment sau ipsos", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "Piata in expansiune pentru articole premium din beton si ipsos",
    marketDescription: [
      "Tendinta de design industrial, cu materiale naturale si texturi raw, favorizeaza betonul si ipsosul ca materiale de finisaj premium. Piata de mobilier urban din beton creste cu 15% anual in Romania.",
      "Panourile decorative 3D din ipsos au devenit un trend major in design interior, cu cerere in crestere exponentiala. Producatorii locali cu capacitate si calitate pot domina aceasta piata emergenta."
    ],
    faqs: [
      { question: "Ce tipuri de produse din beton au cea mai mare cerere?", answer: "Mobilierul urban (banci, jardiniere, bolarde), elementele de peisagistica (ziduri de sprijin, trepte) si produsele decorative (panouri, blaturi) sunt segmentele cu cea mai rapida crestere." },
      { question: "Pot produce si panouri 3D din ipsos?", answer: "Da, echipamentele pentru turnarea si finisarea panourilor decorative din ipsos sunt investitii eligibile. Cu forme din silicon de precizie, poti produce panouri cu design-uri complexe." },
      { question: "Este necesara experienta in design?", answer: "Nu neaparat. Poti colabora cu designeri si arhitecti care furnizeaza modelele 3D, iar tu te concentrezi pe productie. Echipamentele CNC transforma modelele digitale in forme fizice." },
      { question: "Pot vinde produsele online?", answer: "Da. Produsele decorative din beton si ipsos sunt ideale pentru vanzarea online. Investitia in echipamente de ambalare rezistenta la transport este finantabila prin PRO INFRA." }
    ],
    relatedSlugs: ["fabricarea-produselor-beton-constructii", "fabricarea-mortarului", "taierea-fasonarea-finisarea-pietrei"]
  },
  {
    slug: "taierea-fasonarea-finisarea-pietrei",
    title: "Taierea, Fasonarea si Finisarea Pietrei",
    metaTitle: "PRO INFRA | Finantare pentru Taierea, Fasonarea si Finisarea Pietrei",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru prelucrarea pietrei naturale. Masini CNC, gatere multidisc, polizoare, waterjet — granit, marmura, travertin. Pana la 200.000 EUR.",
    keywords: ["PRO INFRA", "taiere piatra", "fasonare piatra", "finisare piatra", "piatra naturala", "marmura", "granit", "CNC piatra", "prelucrare piatra"],
    heroTitle: "Finantare Nerambursabila pentru",
    heroHighlight: "Taierea, Fasonarea si Finisarea Pietrei",
    heroDescription: "Transforma blocuri brute de granit, marmura, calcar si travertin in produse premium. Masini CNC, gatere multidisc, polizoare automate — toate finantate prin PRO INFRA.",
    aboutTitle: "PRO INFRA transforma industria prelucrarii pietrei naturale",
    aboutDescription: [
      "Piatra naturala este cel mai nobil material de constructie. Durabilitatea de secole, frumusetea unica si sustenabilitatea naturala o fac materialul preferat pentru proiecte rezidentiale si comerciale de top.",
      "Valoarea pietrei este determinata de calitatea prelucrarii. Aceeasi placa de granit poate valora de 5 ori mai mult daca este taiata cu precizie milimetrica, polisata la luciu oglinda si calibrata la grosime constanta.",
      "Programul PRO INFRA finanteaza gatere multidisc, masini CNC cu 5 axe, linii de polisare automata, masini waterjet si echipamente de calibrare si bisautare."
    ],
    benefits: [
      { title: "Precizie CNC de Inalta Performanta", description: "Masinile CNC cu 5 axe permit fasonarea de piese cu geometrii complexe — coloane, capiteluri, blaturi cu decupaje, scari cu profil special — cu precizie de 0.1 mm." },
      { title: "Debitare Eficienta a Blocurilor", description: "Gaterele multidisc taie blocuri de piatra in placi de grosime uniforma cu pierdere minima de material. Un gater modern proceseaza un bloc de 20 tone in cateva ore." },
      { title: "Finisare Superioara", description: "Linii de polisare cu capete multiple produc suprafete cu luciu oglinda, finisaj bujarde, flame, periat sau antichizat. Calibrarea automata asigura grosime constanta." },
      { title: "Taiere cu Jet de Apa", description: "Masinile waterjet taie orice piatra in forme complexe, cu muchii curate, fara microfisuri si fara stres termic. Ideale pentru mozaicuri si piese decorative." },
      { title: "Valoare Adaugata Multiplicata", description: "O placa de granit bruta valoreaza 20-30 EUR/mp. Aceeasi placa, taiata, calibrata, polisata si profilata, se vinde cu 80-200 EUR/mp. Investitia in echipamente multiplica valoarea." },
      { title: "Acces pe Piete Internationale", description: "Cu produse prelucrate la standarde europene, poti exporta pe pietele din Germania, Austria, Franta, Italia — tari cu cerere constanta de piatra naturala de calitate." }
    ],
    investments: ["Gatere multidisc pentru debitarea blocurilor in placi", "Masini CNC cu 3 si 5 axe pentru fasonarea pietrei", "Masini de taiere cu jet de apa (waterjet)", "Linii de polisare automata cu capete multiple", "Masini de calibrare si bisautare a placilor", "Poduri de taiere cu disc diamantat", "Masini de profilare a marginilor — semicircular, bizot, ogee", "Instalatii de reciclare a apei si a namolului de taiere", "Macarale cu ventuze si sisteme de manipulare a placilor", "Software CAD/CAM pentru proiectare si programare CNC"],
    eligibility: ["Companii din Romania cu activitate in prelucrarea pietrei naturale", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "Piata pietrei naturale prelucrate in crestere",
    marketDescription: [
      "Piata europeana de piatra naturala prelucrata depaseste 10 miliarde de euro anual. Romania, cu zacaminte diverse si costuri competitive, poate deveni un furnizor strategic pentru UE.",
      "Tendinta globala catre materiale naturale si sustenabile favorizeaza piatra fata de materialele sintetice. Companiile care ofera piatra certificata, cu trasabilitate completa, au avantaj competitiv decisiv."
    ],
    faqs: [
      { question: "Ce tipuri de piatra pot prelucra cu echipamente finantate prin PRO INFRA?", answer: "Toate tipurile de piatra naturala: granit, marmura, calcar, travertin, gresie, bazalt, ardezie. Echipamentele moderne sunt versatile si pot prelucra pietre cu duritate si textura diferite." },
      { question: "Este profitabila prelucrarea pietrei pentru blaturi de bucatarie?", answer: "Da, blaturile din piatra naturala au marje de profit foarte bune — 80-200 EUR/mp pentru produsul finit fata de 20-30 EUR/mp pentru placa bruta. Este unul dintre cele mai profitabile segmente." },
      { question: "Pot finanta si software de proiectare CAD/CAM?", answer: "Da, software-ul de proiectare si programare CNC este investitie eligibila prin PRO INFRA. Este esential pentru maximizarea utilizarii masinilor CNC si reducerea pierderilor de material." },
      { question: "Cat de mare trebuie sa fie atelierul pentru echipamente CNC?", answer: "Un atelier de prelucrare piatra echipat complet necesita minimum 500-1.000 mp acoperiti, cu acces pentru camioane si zona de depozitare a blocurilor. Echipa noastra te ajuta sa planifici spatiul optim." }
    ],
    relatedSlugs: ["extractia-pietrei-ornamentale", "fabricarea-articolelor-beton-ciment-ipsos", "fabricarea-produselor-minerale-nemetalice"]
  },
  {
    slug: "fabricarea-produselor-minerale-nemetalice",
    title: "Fabricarea Altor Produse din Minerale Nemetalice",
    metaTitle: "PRO INFRA | Finantare pentru Fabricarea Produselor din Minerale Nemetalice",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru produse din minerale nemetalice. Abrazive, materiale de frecare, fibre minerale, produse din mica si grafit — pana la 15 milioane EUR.",
    keywords: ["PRO INFRA", "minerale nemetalice", "abrazive", "materiale frecare", "fibre minerale", "finantare minerale nemetalice", "fonduri europene"],
    heroTitle: "Finantare pentru",
    heroHighlight: "Fabricarea Produselor din Minerale Nemetalice",
    heroDescription: "Abrazive industriale, materiale de frecare, fibre minerale, produse din mica si grafit — modernizeaza-ti productia cu fonduri europene nerambursabile prin PRO INFRA.",
    aboutTitle: "PRO INFRA sustine inovatia in sectorul produselor din minerale nemetalice",
    aboutDescription: [
      "Produsele din minerale nemetalice sunt un sector industrial divers si strategic. Abrazivele sunt esentiale pentru prelucrarea metalelor. Materialele de frecare asigura siguranta vehiculelor. Fibrele minerale ofera izolatie termica si acustica de inalta performanta.",
      "Acest sector combina cunostinte avansate de ingineria materialelor cu procese de fabricatie de precizie. Producatorii care investesc in echipamente moderne pot dezvolta produse cu specificatii tehnice superioare.",
      "Programul PRO INFRA ofera finantare pentru cuptoare de sintetizare, prese de formare, echipamente de macinare, linii de testare si control al calitatii."
    ],
    benefits: [
      { title: "Performanta Tehnica Superioara", description: "Echipamentele moderne permit abrazive cu granulatie precisa, materiale de frecare cu coeficient constant si fibre minerale cu proprietati termice si acustice optimizate." },
      { title: "Eficienta Proceselor", description: "Cuptoarele eficiente, presele cu forta controlata si sistemele de dozare automata reduc costurile si cresc randamentul." },
      { title: "Conformitate cu Norme Stricte", description: "Produsele destinate industriei auto si aerospatiale trebuie sa respecte standarde stricte. Echipamentele de testare finantate prin PRO INFRA asigura conformitatea." },
      { title: "Diversificarea Gamei", description: "Cu echipamente versatile: discuri abrazive, pietre de polisare, garnituri de frana, placute de ambreiaj, vata minerala, panouri de izolatie — fiecare cu piata specifica." },
      { title: "Piete de Nisa Profitabile", description: "Produsele specializate au marje ridicate. Abrazivele de precizie pentru industria optica sau materialele de frecare pentru vehicule de competitie sunt segmente premium." },
      { title: "Sustenabilitate si Inovatie", description: "Noile generatii de produse sunt mai performante, mai durabile si cu impact de mediu redus. Investitia permite produse care raspund cerintelor economiei circulare." }
    ],
    investments: ["Cuptoare de sintetizare si tratament termic", "Prese hidraulice si mecanice pentru formarea produselor", "Mori cu bile, mori cu jet si instalatii de macinare ultrafina", "Mixere si malaxoare pentru compozitii complexe", "Linii de productie pentru discuri abrazive si pietre de polisare", "Echipamente pentru fabricarea fibrelor minerale", "Instalatii de testare — duritate, rezistenta termica, coeficient frecare", "Sisteme de dozare automata a componentelor", "Echipamente de ambalare si etichetare", "Software de control al proceselor si trasabilitate"],
    eligibility: ["Companii din Romania cu activitate in fabricarea produselor din minerale nemetalice", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "Piata si aplicatii ale produselor din minerale nemetalice",
    marketDescription: [
      "Industria auto, metalurgica, constructii, energetica, electronica — fiecare consuma cantitati importante de produse din minerale nemetalice. Piata europeana depaseste 20 miliarde EUR anual.",
      "Cu echipamente moderne si productie diversificata, poti deservi simultan mai multe segmente industriale, reducand dependenta de un singur client sau sector."
    ],
    faqs: [
      { question: "Ce tipuri de produse din minerale nemetalice pot finanta?", answer: "Abrazive (discuri, pietre, benzi), materiale de frecare (garnituri frana, placute ambreiaj), fibre minerale (vata minerala, panouri izolatie), produse din mica, grafit si alte minerale nemetalice." },
      { question: "Pot produce abrazive pentru industria auto?", answer: "Da, cu echipamente de formare si sintetizare de precizie, poti produce abrazive care indeplinesc cerintele stricte ale industriei auto. Certificarile IATF 16949 devin accesibile cu echipamente moderne." },
      { question: "Este necesara certificare speciala pentru materialele de frecare?", answer: "Da, materialele de frecare pentru vehicule trebuie sa respecte regulamentul ECE R90 si alte standarde de siguranta. Echipamentele de testare finantate prin PRO INFRA permit obtinerea acestor certificari." },
      { question: "Pot produce si vata minerala?", answer: "Da, echipamentele pentru fabricarea fibrelor minerale sunt investitii eligibile. Vata minerala este un produs cu cerere in crestere datorita programelor de renovare energetica a cladirilor." }
    ],
    relatedSlugs: ["fabricarea-produselor-refractare", "fabricarea-izolatorilor-ceramici", "fabricarea-varului-ipsosului"]
  },
  {
    slug: "tragerea-la-rece-a-barelor",
    title: "Tragerea la Rece a Barelor",
    metaTitle: "PRO INFRA | Finantare pentru Tragerea la Rece a Barelor",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru tragerea la rece a barelor de otel si metale neferoase. Bancuri de tragere, filiere de precizie, control dimensional — pana la 15 milioane EUR.",
    keywords: ["PRO INFRA", "tragere la rece", "bare trase", "bare calibrate", "otel tras", "finantare tragere bare", "fonduri europene metalurgie"],
    heroTitle: "Finantare Nerambursabila pentru",
    heroHighlight: "Tragerea la Rece a Barelor",
    heroDescription: "Investeste in bancuri de tragere performante, filiere de precizie si sisteme de control dimensional pentru productia de bare calibrate din otel si metale neferoase. Finantare PRO INFRA 100% nerambursabila.",
    aboutTitle: "PRO INFRA modernizeaza industria tragerii la rece din Romania",
    aboutDescription: [
      "Tragerea la rece produce bare cu dimensiuni exacte, suprafata neteda si proprietati mecanice imbunatatite. Produsul — bara calibrata — este esential pentru industria auto, mecanica de precizie, hidraulica si constructia de masini.",
      "Romania are nevoie constanta de bare trase la rece — atat pentru consum intern cat si pentru export. Insa capacitatile existente sunt limitate de echipamente vechi, cu viteze mici si precizie insuficienta.",
      "Programul PRO INFRA finanteaza bancuri de tragere cu forta si viteza superioare, filiere din carbura de wolfram si diamant policristalin, echipamente de indreptare, taiere si control dimensional automat."
    ],
    benefits: [
      { title: "Precizie Dimensionala Superioara", description: "Bancuri moderne cu filiere de precizie produc bare cu tolerante h9-h11, iar cu peeling si polisare se ajunge la h6. Precizie pentru mecanica fina si hidraulica de inalta presiune." },
      { title: "Calitate Superioara a Suprafetei", description: "Tragerea la rece reduce rugozitatea de la Ra 6.3 la Ra 0.8-1.6, obtinandu-se suprafete netede, ideale pentru etansari si asamblari cu strangere." },
      { title: "Proprietati Mecanice Imbunatatite", description: "Ecruisarea creste rezistenta la tractiune si limita de curgere cu 20-40% fata de materialul laminat. Bare mai rezistente cu aceleasi dimensiuni." },
      { title: "Viteza de Productie Crescuta", description: "Bancurile moderne ating viteze de 30-60 m/min, fata de 5-15 m/min la echipamentele vechi. Productivitatea creste de 3-4 ori." },
      { title: "Gama Diversificata de Profile", description: "Cu seturi de filiere diferite: bare rotunde, patrate, hexagonale si cu profil special — fiecare cu aplicatii si clienti distincti." },
      { title: "Acces la Piata Automotive", description: "Cu bare certificate IATF 16949 si tolerante stranse, devii furnizor eligibil pentru tier 1 si tier 2 automotive — segmentul cu cele mai mari volume." }
    ],
    investments: ["Bancuri de tragere cu lant sau hidraulice cu forta de 5-100 tone", "Filiere din carbura de wolfram, ceramica si diamant policristalin", "Masini de ascutire si pregatire a capetelor barelor", "Instalatii de decapare si fosfatare a materialului", "Masini de indreptare cu role pentru bare trase", "Fierastraie circulare si masini de debitare la lungime", "Masini de peeling (strunjire centrica) pentru bare de precizie", "Echipamente de control dimensional — micrometre laser, comparatoare", "Cuptoare de recoacere si tratament termic", "Sisteme de ambalare, legare si etichetare a barelor"],
    eligibility: ["Companii din Romania cu activitate in tragerea la rece a barelor", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "Cerere in crestere pentru bare calibrate",
    marketDescription: [
      "Piata europeana a barelor trase depaseste 5 milioane de tone anual. Romania, cu pozitie strategica si costuri competitive, poate deveni hub de productie si export.",
      "Industria auto, cel mai mare consumator, creste cererea de bare cu tolerante stranse, pe masura ce componentele devin mai precise. Producatorii romani care investesc acum se pozitioneaza strategic."
    ],
    faqs: [
      { question: "Ce diametre de bare pot produce cu echipamente finantate prin PRO INFRA?", answer: "Bancurile de tragere moderne permit producerea de bare cu diametre de la 5 mm la 100 mm, in functie de forta bancului. Pentru diametre mai mici, se recomanda trefilarea pe bobine." },
      { question: "Pot produce bare din otel inoxidabil?", answer: "Da, cu filiere si lubrifiere adecvate, poti produce bare trase din otel inoxidabil, cupru, alama si alte aliaje. Fiecare material necesita parametri specifici de tragere." },
      { question: "Este necesara certificarea IATF 16949 pentru piata auto?", answer: "Da, pentru a fi furnizor direct in industria auto este necesara certificarea IATF 16949. Echipamentele de control dimensional finantate prin PRO INFRA sunt un pas esential catre aceasta certificare." },
      { question: "Pot finanta si un cuptor de tratament termic?", answer: "Da, cuptoarele de recoacere si tratament termic sunt investitii eligibile, fiind esentiale pentru obtinerea proprietatilor mecanice dorite in barele trase." }
    ],
    relatedSlugs: ["laminarea-la-rece-a-benzilor-inguste", "productia-de-profile-la-rece", "trefilarea-firelor-la-rece"]
  },
  {
    slug: "laminarea-la-rece-a-benzilor-inguste",
    title: "Laminarea la Rece a Benzilor Inguste",
    metaTitle: "PRO INFRA | Finantare pentru Laminarea la Rece a Benzilor Inguste",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru laminarea la rece a benzilor inguste. Laminoare de precizie, control automat grosime, cuptoare de recoacere — pana la 15 milioane EUR.",
    keywords: ["PRO INFRA", "laminare la rece", "benzi inguste", "benzi otel", "laminor", "finantare laminare", "fonduri europene metalurgie"],
    heroTitle: "Finantare Nerambursabila pentru",
    heroHighlight: "Laminarea la Rece a Benzilor Inguste",
    heroDescription: "Modernizeaza-ti laminorul de benzi inguste cu echipamente de precizie, sisteme de control al grosimii si linii de finisare performante. Fonduri europene 100% nerambursabile prin PRO INFRA.",
    aboutTitle: "PRO INFRA finanteaza modernizarea laminoarelor de benzi inguste",
    aboutDescription: [
      "Benzile inguste laminate la rece sunt componente esentiale in industria auto, electrotehnica, ambalaje metalice si constructii. Cu latime de pana la 600 mm si grosimi de la 0.1 mm, necesita echipamente de precizie exceptionala.",
      "Procesul reduce grosimea materialului si imbunatateste semnificativ proprietatile mecanice — rezistenta, duritate si calitatea suprafetei. Rezultatul este o banda cu grosime uniforma si caracteristici constante.",
      "Programul PRO INFRA finanteaza laminoare cu cilindri de precizie, sisteme automate de control al grosimii (AGC), derulare si infasurare controlata, cuptoare de recoacere si linii de taiere longitudinala."
    ],
    benefits: [
      { title: "Precizie de Grosime Exceptionala", description: "Sistemele AGC cu senzori laser mentin grosimea in tolerante de +/- 0.005 mm pe toata lungimea colacului. Precizie ceruta de industria auto si electronica." },
      { title: "Calitate Superioara a Suprafetei", description: "Cilindrii rectificati cu rugozitate controlata produc benzi cu suprafata oglinda sau texturata controlat. Calitatea suprafetei determina performanta produsului final." },
      { title: "Productivitate Crescuta", description: "Laminoare moderne cu viteze de pana la 600 m/min si sisteme rapide de schimbare a cilindrilor maximizeaza timpul productiv." },
      { title: "Eficienta Energetica", description: "Motoare electrice IE4 si sisteme de recuperare a energiei de franare reduc consumul electric cu pana la 25%." },
      { title: "Diversitate de Materiale", description: "Otel carbon, otel inoxidabil, cupru, aluminiu, alama si aliaje speciale — fiecare cu piata si marja distincte." },
      { title: "Trasabilitate si Certificare", description: "Sisteme digitale inregistreaza parametrii de laminare pentru fiecare colac. Certificate de calitate cu date complete devin standard." }
    ],
    investments: ["Laminoare cu 2, 4 sau 6 cilindri pentru benzi inguste", "Sisteme automate de control al grosimii (AGC) cu senzori laser", "Deruloare si infasuratoare cu control de tensiune", "Masini de rectificat cilindri de laminare", "Cuptoare de recoacere — cu clopot sau continue", "Linii de taiere longitudinala (slitting)", "Sisteme de racire si lubrifiere a cilindrilor", "Echipamente de control al calitatii — grosime, planeitate, rugozitate", "Linii de decapare si tratament de suprafata", "Software SCADA pentru monitorizarea procesului"],
    eligibility: ["Companii din Romania cu activitate in laminarea la rece", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "Piata benzilor inguste laminate la rece",
    marketDescription: [
      "Industria auto, electrotehnica, ambalaje, constructii, industria medicala — toate consuma benzi inguste laminate la rece. Piata europeana depaseste 10 milioane de tone anual.",
      "Fiecare aplicatie are cerinte specifice de grosime, toleranta si proprietati mecanice. Cu echipamente moderne si flexibile, poti deservi simultan mai multe segmente."
    ],
    faqs: [
      { question: "Ce grosimi de benzi pot produce?", answer: "Laminoarele moderne permit producerea de benzi cu grosimi de la 0.1 mm la 6 mm, in functie de configuratia laminorului si materialul procesat." },
      { question: "Pot lamina si otel inoxidabil?", answer: "Da, cu cilindri adecvati si sisteme de lubrifiere speciale, poti lamina otel inoxidabil, cupru, aluminiu si aliaje speciale." },
      { question: "Este necesara recoacerea dupa laminare?", answer: "In majoritatea cazurilor, da. Recoacerea elimina tensiunile interne si restaureaza ductilitatea materialului. Cuptoarele de recoacere sunt investitii eligibile prin PRO INFRA." },
      { question: "Ce este sistemul AGC si de ce este important?", answer: "AGC (Automatic Gauge Control) este un sistem automat de control al grosimii benzii in timp real, folosind senzori laser si ajustarea automata a fortei cilindrilor. Este esential pentru tolerante stranse." }
    ],
    relatedSlugs: ["tragerea-la-rece-a-barelor", "productia-de-profile-la-rece", "trefilarea-firelor-la-rece"]
  },
  {
    slug: "productia-de-profile-la-rece",
    title: "Productia de Profile Obtinute la Rece",
    metaTitle: "PRO INFRA | Finantare pentru Productia de Profile Obtinute la Rece",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru productia de profile metalice formate la rece. Profile C, Z, U, omega, linii de profilare — pana la 15 milioane EUR fonduri europene.",
    keywords: ["PRO INFRA", "profile la rece", "profile metalice", "profile C Z U", "profilare", "linie profilare", "finantare profile", "fonduri europene profile"],
    heroTitle: "Finantare Nerambursabila pentru",
    heroHighlight: "Productia de Profile Obtinute la Rece",
    heroDescription: "Profile C, Z, U, sigma, omega, profile hat si profile speciale — modernizeaza sau achizitioneaza linia de profilare cu fonduri europene 100% nerambursabile prin PRO INFRA.",
    aboutTitle: "PRO INFRA sustine producatorii de profile metalice formate la rece",
    aboutDescription: [
      "Profilele metalice formate la rece sunt fundamentul constructiilor metalice usoare moderne. De la hale industriale la cladiri de birouri, de la acoperisuri la pereti cortina — profilele ofera rezistenta structurala cu greutate minima.",
      "Procesul de roll-forming transforma banda de tabla plana in profile cu sectiuni complexe, intr-o singura trecere continua. Este extrem de productiv, cu viteze de pana la 100 m/min si pierderi aproape zero.",
      "Programul PRO INFRA finanteaza linii complete de profilare — de la deruloiul de banda la debitare, inclusiv perforare si stantare in linie, sisteme de masurare si echipamente de ambalare."
    ],
    benefits: [
      { title: "Productivitate Exceptionala", description: "Liniile moderne produc 50-100 metri pe minut, continuu. Un schimb de 8 ore produce kilometri de profile finite. Costul per metru este minim." },
      { title: "Versatilitate de Profil", description: "Cu seturi de role interschimbabile: profile C, Z, U, sigma, omega, hat si profile speciale. Schimbarea intre profile se face in 1-2 ore." },
      { title: "Precizie Dimensionala", description: "Rolele de formare rectificate produc profile cu tolerante stranse si unghiuri precise — conditie esentiala pentru asamblarea rapida pe santier." },
      { title: "Operatiuni Integrate in Linie", description: "Perforare, stantare, marcare, taiere la lungime — toate automat, fara oprirea productiei. Profilul iese complet finalizat." },
      { title: "Piata in Crestere Rapida", description: "Constructiile metalice usoare (steel framing) cresc cu 15-20% anual in Romania. Hale, constructii modulare si acoperisuri metalice genereaza cerere masiva." },
      { title: "Marja de Profit Ridicata", description: "Transformarea tablei in profile adauga 30-60% valoare. Cu volume mari si productie continua, marja pe tona este substantial mai mare decat revanzarea tablei." }
    ],
    investments: ["Linii complete de profilare (roll-forming) cu 12-30 statii de formare", "Deruloare de banda cu capacitate de 5-15 tone", "Statii de perforare si stantare integrate in linie", "Masini de debitare la lungime — disc, cutit volant sau hidraulice", "Mese de evacuare si sisteme de stivuire automata", "Seturi de role de formare pentru profile diferite", "Abkant-uri CNC pentru profilare discontinua", "Masini de taiere cu laser pentru perforatii complexe", "Echipamente de masurare dimensionala si control calitate", "Software de proiectare a profilelor si simulare formare"],
    eligibility: ["Companii din Romania cu activitate in productia de profile la rece", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "Constructiile metalice usoare — piata in expansiune",
    marketDescription: [
      "Constructiile metalice usoare (steel framing) sunt cel mai dinamic segment al industriei constructiilor din Romania. Halele industriale si logistice, casele pe structura metalica si sistemele de acoperis genereaza cerere masiva.",
      "Cu o linie de profilare moderna, poti produce atat profile standard (C, Z, U) cat si profile personalizate pentru proiecte specifice — un avantaj competitiv major pe piata."
    ],
    faqs: [
      { question: "Ce viteza de productie poate atinge o linie de profilare?", answer: "Liniile moderne de profilare ating viteze de 50-100 metri pe minut, in functie de complexitatea profilului si grosimea materialului. Aceasta viteza permite productia a mii de metri de profil pe schimb." },
      { question: "Pot produce profile pentru gips-carton (CW, UW, CD, UD)?", answer: "Da, profilele pentru sisteme de gips-carton sunt printre cele mai solicitate produse si pot fi produse pe linii de profilare standard cu seturi de role dedicate." },
      { question: "Cat costa o linie completa de profilare?", answer: "Pretul variaza in functie de capacitate si complexitate. O linie de baza poate porni de la 100.000 EUR, iar una complet echipata cu perforare in linie si taiere automata poate ajunge la 300.000+ EUR." },
      { question: "Pot produce si tabla cutata sau trapezoidala?", answer: "Da, tabla cutata si trapezoidala pentru acoperisuri si pereti se produce pe linii de profilare similare, cu seturi de role specifice. Sunt investitii eligibile prin PRO INFRA." }
    ],
    relatedSlugs: ["fabricarea-constructiilor-metalice", "tragerea-la-rece-a-barelor", "laminarea-la-rece-a-benzilor-inguste"]
  },
  {
    slug: "trefilarea-firelor-la-rece",
    title: "Trefilarea Firelor la Rece",
    metaTitle: "PRO INFRA | Finantare pentru Trefilarea Firelor la Rece",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru trefilarea firelor la rece. Bancuri de trefilare, linii de zincare, masini plasa sudata, masini cuie — pana la 15 milioane EUR.",
    keywords: ["PRO INFRA", "trefilare fire", "sarma trefilata", "trefilare la rece", "plasa sudata", "finantare trefilare", "fonduri europene sarma"],
    heroTitle: "Finantare Nerambursabila pentru",
    heroHighlight: "Trefilarea Firelor la Rece",
    heroDescription: "Sarma trefilata, plasa sudata, cuie, agrafe, arcuri, cabluri — modernizeaza-ti linia de trefilare cu echipamente de ultima generatie. Fonduri europene 100% nerambursabile prin PRO INFRA.",
    aboutTitle: "PRO INFRA modernizeaza industria trefilarii din Romania",
    aboutDescription: [
      "Trefilarea este procesul prin care sarma este trasa prin filiere succesive pentru reducerea diametrului si imbunatatirea proprietatilor mecanice. Produsul rezultat — sarma trefilata — este materia prima pentru sute de aplicatii.",
      "De la sarma pentru constructii la sarma pentru industria auto, de la cuie la sarma pentru garduri — cererea este enorma si constanta. Romania importa cantitati semnificative, desi are capacitatea de a produce local cu echipamente moderne.",
      "Programul PRO INFRA finanteaza bancuri de trefilare multiple, filiere din carbura de wolfram, linii de zincare, masini de plasa sudata, masini de cuie si echipamente de ambalare."
    ],
    benefits: [
      { title: "Viteza de Trefilare Superioara", description: "Bancurile moderne cu motoare cu frecventa variabila ating viteze de 15-25 m/s, fata de 5-8 m/s la echipamentele vechi. Productia creste de 2-3 ori." },
      { title: "Gama Larga de Diametre", description: "Cu seturi de filiere diferite: sarma cu diametre de la 0.5 mm la 12 mm, in diverse calitati — moale, dura, pentru arcuri, pentru sudura." },
      { title: "Integrare Verticala Profitabila", description: "Cu sarma trefilata poti alimenta linii proprii: plasa sudata, cuie, agrafe, sarma ghimpata, cabluri si arcuri. Fiecare etapa adauga 20-40% valoare." },
      { title: "Calitate Controlata", description: "Masurare in linie a diametrului, rezistentei la tractiune si calitatii suprafetei. Conformitate cu standardele EN 10218 si EN 10270." },
      { title: "Tratamente de Suprafata", description: "Linii de zincare electrolitica sau termica protejeaza sarma. Sarma zincata are pret cu 30-50% mai mare decat sarma neagra." },
      { title: "Piata de Constructii in Boom", description: "Cererea de sarma pentru armaturi, plasa sudata si sarma de legat creste direct proportional cu volumul de constructii. Proiectele de infrastructura asigura cerere constanta." }
    ],
    investments: ["Bancuri de trefilare multiple (6-12 trepte) cu viteza variabila", "Filiere din carbura de wolfram si diamant policristalin", "Instalatii de decapare si pregatire a suprafetei", "Linii de zincare electrolitica sau prin imersie la cald", "Masini automate de plasa sudata", "Masini de fabricat cuie, agrafe si capse", "Cuptoare de recoacere pentru sarma moale", "Masini de infasurat sarma pe mosoare si colaci", "Echipamente de testare — tractiune, torsiune, diametru", "Sisteme de ambalare si etichetare automata"],
    eligibility: ["Companii din Romania cu activitate in trefilarea firelor", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "Piata produselor din sarma trefilata",
    marketDescription: [
      "Piata romaneasca de produse din sarma depaseste 200 de milioane de euro anual. Sarma pentru constructii (armaturi, plasa sudata, sarma de legat) reprezinta cel mai mare segment, urmat de garduri si cuie.",
      "Cu echipamente moderne si integrare verticala (trefilare + produse finite), poti acoperi intregul lant de valoare si captura marja maxima din fiecare tona de otel prelucrata."
    ],
    faqs: [
      { question: "Ce diametre de sarma pot produce?", answer: "Bancurile moderne de trefilare permit producerea de sarma cu diametre de la 0.5 mm la 12 mm, in functie de configuratie. Pentru diametre sub 0.5 mm sunt necesare echipamente speciale de trefilare fina." },
      { question: "Pot produce si plasa sudata pentru beton?", answer: "Da, masinile automate de plasa sudata sunt investitii eligibile. Cu sarma produsa intern, costul plasei sudate scade semnificativ fata de achizitia de sarma de pe piata." },
      { question: "Este profitabila productia de cuie?", answer: "Da, mai ales daca ai productie proprie de sarma. Masinile moderne de cuie produc 300-600 bucati pe minut, cu costuri operationale reduse." },
      { question: "Pot finanta si o linie de zincare?", answer: "Da, liniile de zincare — atat electrolitica cat si prin imersie la cald — sunt investitii eligibile prin PRO INFRA. Zincarea adauga valoare semnificativa produsului." }
    ],
    relatedSlugs: ["tragerea-la-rece-a-barelor", "fabricarea-constructiilor-metalice", "fabricarea-firelor-cablurilor-electrice"]
  },
  {
    slug: "fabricarea-constructiilor-metalice",
    title: "Fabricarea Constructiilor Metalice si a Structurilor Metalice",
    metaTitle: "PRO INFRA | Finantare pentru Fabricarea Constructiilor Metalice si Structurilor Metalice",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru constructii metalice. Hale, poduri, turnuri, structuri industriale — taiere laser CNC, roboti sudura, linii sablare. Pana la 200.000 EUR.",
    keywords: ["PRO INFRA", "constructii metalice", "structuri metalice", "hale metalice", "fabricare structuri", "sudura structuri", "finantare constructii metalice"],
    heroTitle: "Finantare pentru",
    heroHighlight: "Fabricarea Constructiilor Metalice si a Structurilor Metalice",
    heroDescription: "Hale industriale, poduri metalice, turnuri, pasarele, structuri pentru energie regenerabila — modernizeaza-ti atelierul cu echipamente de taiere, sudura si vopsire de ultima generatie. PRO INFRA, 100% nerambursabil.",
    aboutTitle: "PRO INFRA finanteaza transformarea industriei constructiilor metalice",
    aboutDescription: [
      "Constructiile metalice sunt coloana vertebrala a infrastructurii moderne. Halele industriale si logistice, podurile rutiere si feroviare, turnurile de telecomunicatii si eoliene, pasarelele pietonale — toate sunt fabricate in ateliere de confectii metalice.",
      "Romania se afla in fata unei cereri fara precedent, generata de infrastructura, logistica, tranzitia energetica si dezvoltarea industriala. Insa multi producatori opereaza cu echipamente depasitie, ceea ce limiteaza capacitatea si calitatea.",
      "Programul PRO INFRA ofera finantarea pentru masini de taiere cu laser si plasma CNC, roboti de sudura, linii de sablare si grunduire, macarale de atelier, masini de gaurire CNC pentru grinzi — un atelier de nivel european."
    ],
    benefits: [
      { title: "Taiere CNC de Precizie", description: "Masini laser fibra si plasma CNC taie tabla si profile cu precizie de 0.1 mm, la viteze de pana la 30 m/min. Piesele ies gata de asamblare. Pierderile de material scad cu 15-20% prin nesting optimizat." },
      { title: "Sudura Robotizata", description: "Roboti MIG/MAG si SAW produc cordoane uniforme, cu penetrare constanta, la viteze de 3-5 ori mai mari decat sudura manuala. Calitate predictibila si documentabila pentru EN 1090." },
      { title: "Certificare EN 1090", description: "Echipamente moderne de sudura, control si testare permit obtinerea certificarii EN 1090 (clase EXC1-EXC4) — conditia obligatorie pentru structuri metalice in UE." },
      { title: "Protectie Anticoroziva Performanta", description: "Linii de sablare automata, cabine de vopsire cu flux controlat si cuptoare de uscare — acoperiri anticorozive uniforme cu durabilitate de 15-25 ani conform ISO 12944." },
      { title: "Capacitate de Manipulare", description: "Macarale pod 10-50 tone, mese rotative si echipamente de pozitionare permit manipularea structurilor grele in siguranta si eficienta." },
      { title: "Acces la Proiecte Mari", description: "Cu capacitate crescuta si certificari complete, te califici pentru hale de 10.000+ mp, poduri rutiere, structuri offshore si proiecte de energie regenerabila." }
    ],
    investments: ["Masini de taiere cu laser fibra si plasma CNC", "Roboti de sudura MIG/MAG, TIG si SAW", "Masini CNC de gaurire si frezare pentru grinzi (beam drilling)", "Linii de sablare automata cu recuperare a granulatiei", "Cabine de vopsire si cuptoare de uscare", "Macarale pod, macarale portal si echipamente de manipulare", "Prese hidraulice si abkant-uri CNC pentru indoire", "Echipamente de control nedistructiv — ultrasonic, radiografic, magnetic", "Software BIM/CAD/CAM pentru proiectare si planificare", "Mese de asamblare, dispozitive de pozitionare si rotire"],
    eligibility: ["Companii din Romania cu activitate in fabricarea constructiilor metalice", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "Cerere in crestere pentru constructii metalice",
    marketDescription: [
      "Piata constructiilor metalice din Romania depaseste 1 miliard de euro anual si creste cu 10-15% pe an. Hale logistice, centre de date, parcuri industriale si supermarketuri genereaza cerere masiva.",
      "Tranzitia energetica adauga un nou segment: structuri pentru parcuri fotovoltaice, turnuri eoliene, statii de incarcare electrica. Fiecare GW de capacitate regenerabila necesita mii de tone de structuri metalice."
    ],
    faqs: [
      { question: "Este obligatorie certificarea EN 1090?", answer: "Da, incepand din 2014, toate structurile metalice purtari de sarcina comercializate in UE trebuie sa fie fabricate de companii certificate EN 1090. Fara aceasta certificare, nu poti livra structuri metalice." },
      { question: "Pot finanta si un robot de sudura?", answer: "Da, robotii de sudura sunt investitii eligibile prin PRO INFRA. Un robot de sudura creste productivitatea de 3-5 ori si asigura calitate constanta a cordoanelor de sudura." },
      { question: "Ce tip de masina de taiere este cel mai potrivit?", answer: "Depinde de grosimea materialului. Laser fibra este ideal pentru table pana la 20-25 mm, iar plasma CNC pentru grosimi mai mari. Multe ateliere combina ambele tehnologii." },
      { question: "Pot produce si structuri pentru parcuri fotovoltaice?", answer: "Da, structurile de sustinere pentru panouri fotovoltaice sunt un segment in crestere rapida. Cu echipamente de taiere si galvanizare, poti deveni furnizor pentru acest sector." }
    ],
    relatedSlugs: ["productia-de-profile-la-rece", "fabricarea-firelor-cablurilor-electrice", "tragerea-la-rece-a-barelor"]
  },
  {
    slug: "fabricarea-firelor-cablurilor-electrice",
    title: "Fabricarea Altor Fire si Cabluri Electrice si Electronice",
    metaTitle: "PRO INFRA | Finantare pentru Fabricarea Firelor si Cablurilor Electrice si Electronice",
    metaDescription: "Finantare 100% nerambursabila PRO INFRA pentru fabricarea firelor si cablurilor electrice. Linii de extrudare, masini de cablare, echipamente de testare electrica — pana la 15 milioane EUR.",
    keywords: ["PRO INFRA", "fire electrice", "cabluri electrice", "cabluri electronice", "fabricare cabluri", "finantare cabluri", "fonduri europene cabluri"],
    heroTitle: "Finantare Nerambursabila pentru",
    heroHighlight: "Fabricarea Firelor si Cablurilor Electrice si Electronice",
    heroDescription: "Cabluri de energie, telecomunicatii, date, cabluri speciale — modernizeaza-ti fabrica cu echipamente de extrudare, rasucire si testare de ultima generatie. PRO INFRA, 100% nerambursabil.",
    aboutTitle: "PRO INFRA sustine industria firelor si cablurilor electrice din Romania",
    aboutDescription: [
      "Firele si cablurile electrice sunt arterele prin care circula energia si informatia. Fiecare cladire, fabrica, retea de telecomunicatii, vehicul electric si centru de date depinde de cabluri de calitate.",
      "Romania are industrie de cabluri cu traditie, dar sectorul necesita investitii masive. Liniile de extrudare vechi, cu viteze scazute si control imprecis al izolatiei, produc cabluri care nu mai corespund cerintelor actuale.",
      "Programul PRO INFRA finanteaza linii de extrudare cu control automat, masini de rasucire si cablare, echipamente de testare electrica de inalta tensiune, linii de marcare si ambalare."
    ],
    benefits: [
      { title: "Extrudare de Precizie", description: "Linii cu cap transversal si control automat al excentricitatii produc izolatie cu grosime uniforma pe toata circumferinta si lungimea. Reduce consumul de material plastic cu 10-15%." },
      { title: "Viteze de Productie Superioare", description: "Linii moderne ating 300-1.500 m/min pentru fire subtiri si 50-200 m/min pentru cabluri de putere. Productivitatea creste de 2-4 ori." },
      { title: "Diversificarea Gamei", description: "Cabluri de energie (NYM, NYY, CYABY), telecomunicatii (UTP, FTP), incendiu, solare, auto si industriale speciale — fiecare cu piata si marja distincte." },
      { title: "Testare Electrica Completa", description: "Testare la tensiune inalta (hipot), rezistenta de izolatie, spark continua si testare de impedanta. Fiecare metru de cablu respecta standardele IEC si EN." },
      { title: "Materiale Avansate", description: "Procesare PVC, PE, XLPE, LSZH (fara halogeni) si compuzi speciali rezistenti la foc, ulei si substante chimice. Acces pe piete premium cu cerinte stricte." },
      { title: "Piata in Expansiune", description: "Electrificarea transportului, energia regenerabila, 5G, centre de date si constructii noi genereaza cerere in crestere rapida de cabluri de calitate." }
    ],
    investments: ["Linii de extrudare cu cap transversal si control automat", "Masini de rasucire (stranding) pentru conductoare multifilare", "Masini de cablare pentru cabluri multiconductoare", "Linii de reticulare (cross-linking) pentru izolatie XLPE", "Masini de armare cu banda de otel sau aluminiu", "Echipamente de testare electrica — hipot, spark, impedanta", "Sisteme de masurare a diametrului si excentricitatii in linie", "Linii de marcare, imprimare si etichetare", "Masini de infasurare pe tamburi si bobine", "Software de gestiune a productiei si trasabilitate"],
    eligibility: ["Companii din Romania cu activitate in fabricarea firelor si cablurilor", "Minimum 1 an de activitate", "Minimum 3 angajati", "Cifra de afaceri minima conform ghidului", "Fara insolventa sau datorii restante", "Fara datorii la bugetul de stat", "Autorizatii de functionare valabile", "Capacitate de cofinantare demonstrata"],
    marketTitle: "Piata cablurilor — cerere sustinuta de tranzitia energetica",
    marketDescription: [
      "Piata europeana de cabluri depaseste 30 de miliarde de euro anual. Tranzitia energetica, electrificarea transportului si extinderea retelelor de telecomunicatii genereaza cerere in crestere pe termen lung.",
      "Producatorii locali cu capacitate si certificari au avantaj competitiv major fata de importuri — termene de livrare scurte, flexibilitate si costuri de transport reduse."
    ],
    faqs: [
      { question: "Ce tipuri de cabluri pot produce cu echipamente finantate prin PRO INFRA?", answer: "Cabluri de energie (joasa, medie si inalta tensiune), cabluri de telecomunicatii si date, cabluri de comanda si control, cabluri rezistente la foc, cabluri solare si cabluri speciale pentru industria auto si navala." },
      { question: "Pot produce si cabluri pentru vehicule electrice?", answer: "Da, cablurile de putere pentru vehicule electrice si statii de incarcare sunt un segment in crestere rapida. Cu echipamente de extrudare pentru izolatie XLPE si testare de inalta tensiune, poti produce aceste cabluri." },
      { question: "Este necesara certificarea LSZH (fara halogeni)?", answer: "Pentru cabluri destinate cladirilor publice, tunelurilor si transportului feroviar, certificarea LSZH (Low Smoke Zero Halogen) este obligatorie. Echipamentele de extrudare finantate prin PRO INFRA permit procesarea materialelor LSZH." },
      { question: "Pot exporta cabluri in UE?", answer: "Da, cu certificari conform standardelor IEC si EN si cu marcajul CE, poti exporta pe intreaga piata UE. Producatorii romani au avantaj competitiv datorita costurilor de productie mai mici si proximitatii geografice." }
    ],
    relatedSlugs: ["fabricarea-izolatorilor-ceramici", "trefilarea-firelor-la-rece", "fabricarea-constructiilor-metalice"]
  }
];

export function getDomainBySlug(slug: string): DomainData | undefined {
  return domains.find(d => d.slug === slug);
}

export function getAllSlugs(): string[] {
  return domains.map(d => d.slug);
}
