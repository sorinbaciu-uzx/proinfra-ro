export function DomainIllustration({ slug }: { slug: string }) {
  const Illustration = illustrations[slug];
  if (!Illustration) return null;
  return (
    <div className="w-full max-w-[380px] opacity-90">
      <Illustration />
    </div>
  );
}

/* ── Shared style tokens ── */
const B = "#3b82f6";   // blue-500 accent
const D = "#1e3a5f";   // dark blue
const S = "#94a3b8";   // slate-400
const L = "#cbd5e1";   // slate-300
const G = "#0f172a";   // ground/dark

/* ── 1. Extractia Pietrei — Excavator ── */
function ExcavatorSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ground */}
      <rect x="0" y="190" width="300" height="30" rx="4" fill={G} opacity="0.3" />
      {/* Body */}
      <rect x="80" y="140" width="120" height="50" rx="8" fill={D} />
      <rect x="90" y="120" width="60" height="25" rx="6" fill={B} />
      {/* Tracks */}
      <ellipse cx="100" cy="195" rx="30" ry="12" fill={D} />
      <ellipse cx="180" cy="195" rx="30" ry="12" fill={D} />
      <rect x="70" y="185" width="140" height="20" rx="10" fill={S} opacity="0.4" />
      {/* Arm */}
      <g className="anim-excavator-arm" style={{ transformOrigin: "130px 130px" }}>
        <rect x="125" y="50" width="10" height="85" rx="4" fill={B} />
        <g className="anim-excavator-bucket" style={{ transformOrigin: "130px 50px" }}>
          <path d="M115 50 L145 50 L150 75 L110 75 Z" fill={L} stroke={B} strokeWidth="2" />
        </g>
      </g>
      {/* Particles */}
      <circle className="anim-particle-1" cx="135" cy="80" r="3" fill={B} opacity="0.6" />
      <circle className="anim-particle-2" cx="125" cy="70" r="2" fill={L} opacity="0.5" />
      <circle className="anim-particle-3" cx="145" cy="75" r="2.5" fill={B} opacity="0.4" />
    </svg>
  );
}

/* ── 2. Extractia Pietrisului — Camion basculanta ── */
function CamionSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="190" width="300" height="30" rx="4" fill={G} opacity="0.3" />
      {/* Truck body */}
      <rect x="60" y="100" width="160" height="80" rx="6" fill={D} />
      <rect className="anim-tipper" x="60" y="100" width="140" height="70" rx="4" fill={B} style={{ transformOrigin: "200px 170px" }} />
      {/* Cabin */}
      <rect x="200" y="120" width="50" height="60" rx="8" fill={D} />
      <rect x="210" y="130" width="30" height="25" rx="4" fill={L} opacity="0.3" />
      {/* Wheels */}
      <circle cx="100" cy="192" r="16" fill={G} />
      <circle cx="100" cy="192" r="8" fill={S} />
      <circle cx="180" cy="192" r="16" fill={G} />
      <circle cx="180" cy="192" r="8" fill={S} />
      <circle cx="230" cy="192" r="16" fill={G} />
      <circle cx="230" cy="192" r="8" fill={S} />
      {/* Falling particles */}
      <circle className="anim-fall-1" cx="90" cy="90" r="4" fill={L} />
      <circle className="anim-fall-2" cx="110" cy="85" r="3" fill={S} />
      <circle className="anim-fall-3" cx="130" cy="88" r="3.5" fill={L} />
    </svg>
  );
}

/* ── 3. Produse Refractare — Cuptor ── */
function CuptorRefractarSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="195" width="300" height="25" rx="4" fill={G} opacity="0.3" />
      {/* Furnace body */}
      <rect x="60" y="60" width="180" height="135" rx="10" fill={D} />
      <rect x="75" y="75" width="150" height="90" rx="6" fill="#1a1a2e" />
      {/* Fire door */}
      <rect x="100" y="100" width="100" height="50" rx="8" fill="#0a0a1a" />
      {/* Flames */}
      <path className="anim-flame-1" d="M130 150 Q135 120 140 150 Q145 130 150 150" fill="#f97316" opacity="0.9" />
      <path className="anim-flame-2" d="M150 150 Q155 110 160 150 Q165 125 170 150" fill={B} opacity="0.7" />
      <path className="anim-flame-3" d="M115 150 Q120 125 125 150 Q130 135 135 150" fill="#ef4444" opacity="0.6" />
      {/* Chimney */}
      <rect x="190" y="30" width="25" height="35" rx="4" fill={S} />
      {/* Smoke */}
      <circle className="anim-smoke-1" cx="202" cy="25" r="6" fill={L} opacity="0.3" />
      <circle className="anim-smoke-2" cx="210" cy="15" r="8" fill={L} opacity="0.2" />
      {/* Bricks */}
      <rect x="80" y="170" width="30" height="15" rx="2" fill={B} opacity="0.5" />
      <rect x="115" y="170" width="30" height="15" rx="2" fill={B} opacity="0.6" />
      <rect x="150" y="170" width="30" height="15" rx="2" fill={B} opacity="0.5" />
      <rect x="185" y="170" width="30" height="15" rx="2" fill={B} opacity="0.4" />
    </svg>
  );
}

/* ── 4. Izolatori Ceramici — Izolator cu arc ── */
function IzolatorSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pole */}
      <rect x="145" y="10" width="10" height="200" fill={S} opacity="0.5" />
      {/* Insulator discs */}
      {[50, 80, 110, 140].map((y, i) => (
        <g key={i}>
          <ellipse cx="150" cy={y} rx="35" ry="10" fill={D} />
          <ellipse cx="150" cy={y - 3} rx="30" ry="8" fill={B} opacity={0.7 - i * 0.1} />
        </g>
      ))}
      {/* Wire */}
      <line x1="20" y1="50" x2="130" y2="50" stroke={L} strokeWidth="3" />
      <line x1="170" y1="50" x2="280" y2="50" stroke={L} strokeWidth="3" />
      {/* Electric arc */}
      <path className="anim-arc" d="M130 50 Q140 35 135 45 Q145 30 140 42 Q150 25 145 40 Q155 30 150 45 Q160 35 170 50" stroke={B} strokeWidth="2" fill="none" />
      {/* Glow */}
      <circle className="anim-glow" cx="150" cy="45" r="15" fill={B} opacity="0.15" />
    </svg>
  );
}

/* ── 5. Var si Ipsos — Cuptor vertical ── */
function VarIpsosSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="200" width="300" height="20" rx="4" fill={G} opacity="0.3" />
      {/* Kiln body */}
      <rect x="100" y="40" width="100" height="160" rx="8" fill={D} />
      <rect x="110" y="50" width="80" height="140" rx="4" fill="#0f172a" />
      {/* Rising particles */}
      <circle className="anim-rise-1" cx="140" cy="160" r="4" fill={L} />
      <circle className="anim-rise-2" cx="155" cy="150" r="3" fill={B} opacity="0.6" />
      <circle className="anim-rise-3" cx="130" cy="155" r="3.5" fill={L} opacity="0.5" />
      <circle className="anim-rise-4" cx="165" cy="145" r="2.5" fill={B} opacity="0.4" />
      {/* Heat glow */}
      <rect className="anim-heat" x="115" y="170" width="70" height="15" rx="3" fill="#f97316" opacity="0.4" />
      {/* Output chute */}
      <rect x="200" y="160" width="60" height="15" rx="4" fill={S} />
      <rect x="245" y="170" width="20" height="30" rx="3" fill={D} />
      {/* Sacks */}
      <rect x="30" y="170" width="40" height="30" rx="4" fill={B} opacity="0.5" />
      <rect x="40" y="160" width="40" height="30" rx="4" fill={B} opacity="0.7" />
    </svg>
  );
}

/* ── 6. Produse Beton Constructii — Vibrocompactare ── */
function VibroSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="195" width="300" height="25" rx="4" fill={G} opacity="0.3" />
      {/* Machine body */}
      <rect x="50" y="60" width="200" height="80" rx="8" fill={D} />
      <rect x="60" y="70" width="180" height="30" rx="4" fill={B} opacity="0.3" />
      {/* Vibration lines */}
      <line className="anim-vibrate" x1="60" y1="145" x2="240" y2="145" stroke={B} strokeWidth="2" strokeDasharray="5,5" />
      {/* Pavers output */}
      <rect className="anim-paver-1" x="70" y="155" width="30" height="15" rx="2" fill={S} />
      <rect className="anim-paver-2" x="105" y="155" width="30" height="15" rx="2" fill={L} />
      <rect className="anim-paver-3" x="140" y="155" width="30" height="15" rx="2" fill={S} />
      <rect className="anim-paver-4" x="175" y="155" width="30" height="15" rx="2" fill={L} />
      <rect x="210" y="155" width="30" height="15" rx="2" fill={S} />
      {/* Conveyor belt */}
      <rect x="50" y="140" width="200" height="8" rx="4" fill={D} />
      {/* Arrows */}
      <path className="anim-conveyor" d="M260 144 L280 144 L270 138 M260 144 L270 150" stroke={B} strokeWidth="2" fill="none" />
    </svg>
  );
}

/* ── 7. Fabricarea Betonului — Betoniera ── */
function BetonieraSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="195" width="300" height="25" rx="4" fill={G} opacity="0.3" />
      {/* Drum */}
      <ellipse className="anim-spin-drum" cx="150" cy="110" rx="65" ry="55" fill={D} style={{ transformOrigin: "150px 110px" }} />
      <ellipse cx="150" cy="110" rx="55" ry="45" fill={B} opacity="0.2" />
      {/* Stripes on drum */}
      <path className="anim-spin-drum" d="M100 90 Q150 130 200 90" stroke={B} strokeWidth="3" fill="none" opacity="0.5" style={{ transformOrigin: "150px 110px" }} />
      <path className="anim-spin-drum" d="M95 120 Q150 80 205 120" stroke={B} strokeWidth="3" fill="none" opacity="0.5" style={{ transformOrigin: "150px 110px" }} />
      {/* Opening */}
      <ellipse cx="215" cy="85" rx="15" ry="25" fill="#0f172a" />
      {/* Support frame */}
      <rect x="130" y="160" width="40" height="35" rx="4" fill={S} />
      {/* Wheels */}
      <circle cx="120" cy="197" r="14" fill={G} />
      <circle cx="120" cy="197" r="7" fill={S} />
      <circle cx="180" cy="197" r="14" fill={G} />
      <circle cx="180" cy="197" r="7" fill={S} />
      {/* Pouring concrete */}
      <rect className="anim-pour" x="222" y="85" width="8" height="40" rx="3" fill={S} opacity="0.6" />
    </svg>
  );
}

/* ── 8. Mortar — Mistrie ── */
function MortarSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="195" width="300" height="25" rx="4" fill={G} opacity="0.3" />
      {/* Sack */}
      <rect x="50" y="100" width="80" height="95" rx="8" fill={B} opacity="0.6" />
      <rect x="60" y="90" width="60" height="20" rx="4" fill={B} opacity="0.8" />
      <text x="90" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">MORTAR</text>
      {/* Trowel */}
      <g className="anim-trowel" style={{ transformOrigin: "200px 160px" }}>
        <rect x="190" y="90" width="8" height="70" rx="3" fill={S} />
        <path d="M170 160 L230 160 L210 180 L180 180 Z" fill={L} />
      </g>
      {/* Spreading mortar */}
      <rect className="anim-spread" x="160" y="180" width="100" height="12" rx="3" fill={S} opacity="0.5" />
      {/* Particles */}
      <circle className="anim-particle-1" cx="200" cy="150" r="2" fill={L} />
      <circle className="anim-particle-2" cx="210" cy="145" r="1.5" fill={B} opacity="0.5" />
    </svg>
  );
}

/* ── 9. Articole Beton/Ciment/Ipsos — Jardiniera ── */
function JardinieraSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="195" width="300" height="25" rx="4" fill={G} opacity="0.3" />
      {/* Planter */}
      <path d="M80 120 L100 195 L200 195 L220 120 Z" fill={D} />
      <path d="M85 120 L95 180 L205 180 L215 120 Z" fill={B} opacity="0.2" />
      <rect x="75" y="110" width="150" height="15" rx="4" fill={D} />
      {/* Texture lines */}
      <line x1="100" y1="135" x2="200" y2="135" stroke={B} strokeWidth="1" opacity="0.3" />
      <line x1="95" y1="155" x2="205" y2="155" stroke={B} strokeWidth="1" opacity="0.3" />
      {/* Decorative panel */}
      <rect x="110" y="130" width="80" height="50" rx="3" fill={B} opacity="0.15" />
      {/* Form/mold behind */}
      <rect x="40" y="70" width="40" height="50" rx="4" fill={S} opacity="0.3" />
      <rect x="220" y="70" width="40" height="50" rx="4" fill={S} opacity="0.3" />
      {/* Shimmer effect */}
      <rect className="anim-shimmer" x="80" y="110" width="20" height="85" rx="2" fill="white" opacity="0.05" />
    </svg>
  );
}

/* ── 10. Taiere/Fasonare Piatra — Disc diamantat ── */
function DiscDiamantSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="195" width="300" height="25" rx="4" fill={G} opacity="0.3" />
      {/* Stone slab */}
      <rect x="40" y="130" width="220" height="60" rx="4" fill={S} opacity="0.4" />
      <rect x="40" y="130" width="220" height="60" rx="4" stroke={L} strokeWidth="1" fill="none" />
      {/* Cutting disc */}
      <circle className="anim-spin-disc" cx="150" cy="110" r="50" fill="none" stroke={B} strokeWidth="4" style={{ transformOrigin: "150px 110px" }} />
      <circle cx="150" cy="110" r="45" fill="none" stroke={B} strokeWidth="1" opacity="0.3" strokeDasharray="8,4" />
      <circle cx="150" cy="110" r="10" fill={D} />
      <circle cx="150" cy="110" r="5" fill={B} />
      {/* Cut line */}
      <line x1="150" y1="130" x2="150" y2="190" stroke={B} strokeWidth="2" opacity="0.5" />
      {/* Sparks */}
      <circle className="anim-spark-1" cx="150" cy="130" r="2" fill="#fbbf24" />
      <circle className="anim-spark-2" cx="145" cy="128" r="1.5" fill="#f97316" />
      <circle className="anim-spark-3" cx="155" cy="126" r="1.5" fill="#fbbf24" />
    </svg>
  );
}

/* ── 11. Minerale Nemetalice — Disc abraziv ── */
function AbrazivSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="195" width="300" height="25" rx="4" fill={G} opacity="0.3" />
      {/* Grinding disc */}
      <circle className="anim-spin-disc" cx="150" cy="110" r="60" fill={D} style={{ transformOrigin: "150px 110px" }} />
      <circle cx="150" cy="110" r="50" fill={B} opacity="0.2" />
      <circle cx="150" cy="110" r="35" fill={D} />
      <circle cx="150" cy="110" r="20" fill={B} opacity="0.15" />
      <circle cx="150" cy="110" r="8" fill={S} />
      {/* Texture dots */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const r = 42;
        const x = 150 + r * Math.cos((angle * Math.PI) / 180);
        const y = 110 + r * Math.sin((angle * Math.PI) / 180);
        return <circle key={i} cx={x} cy={y} r="2" fill={L} opacity="0.5" />;
      })}
      {/* Sparks */}
      <circle className="anim-spark-1" cx="210" cy="110" r="2" fill="#fbbf24" />
      <circle className="anim-spark-2" cx="205" cy="105" r="1.5" fill="#f97316" />
      {/* Label */}
      <rect x="60" y="180" width="60" height="15" rx="3" fill={B} opacity="0.3" />
    </svg>
  );
}

/* ── 12. Tragere Bare — Bara prin filiera ── */
function TragereBareSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="195" width="300" height="25" rx="4" fill={G} opacity="0.3" />
      {/* Die block */}
      <rect x="130" y="70" width="40" height="100" rx="6" fill={D} />
      <rect x="140" y="90" width="20" height="60" rx="3" fill="#0f172a" />
      {/* Bar going through */}
      <rect className="anim-draw-bar" x="0" y="112" width="300" height="16" rx="3" fill={B} opacity="0.7" />
      <rect x="170" y="115" width="130" height="10" rx="2" fill={S} opacity="0.5" />
      {/* Thicker bar before die */}
      <rect x="0" y="108" width="130" height="24" rx="4" fill={S} opacity="0.6" />
      {/* Direction arrow */}
      <path className="anim-arrow-move" d="M240 120 L260 120 L255 112 M260 120 L255 128" stroke={B} strokeWidth="2.5" fill="none" />
      {/* Machine frame */}
      <rect x="120" y="55" width="60" height="15" rx="4" fill={S} opacity="0.4" />
      <rect x="120" y="170" width="60" height="15" rx="4" fill={S} opacity="0.4" />
    </svg>
  );
}

/* ── 13. Laminare Benzi — Cilindri cu banda ── */
function LaminareSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="195" width="300" height="25" rx="4" fill={G} opacity="0.3" />
      {/* Top roller */}
      <ellipse className="anim-roll-top" cx="150" cy="80" rx="40" ry="25" fill={D} style={{ transformOrigin: "150px 80px" }} />
      <ellipse cx="150" cy="80" rx="35" ry="20" fill={S} opacity="0.3" />
      {/* Bottom roller */}
      <ellipse className="anim-roll-bottom" cx="150" cy="140" rx="40" ry="25" fill={D} style={{ transformOrigin: "150px 140px" }} />
      <ellipse cx="150" cy="140" rx="35" ry="20" fill={S} opacity="0.3" />
      {/* Strip going through */}
      <rect className="anim-strip" x="20" y="105" width="260" height="10" rx="2" fill={B} opacity="0.6" />
      {/* Input coil */}
      <circle cx="40" cy="110" r="25" fill={D} />
      <circle cx="40" cy="110" r="15" fill={B} opacity="0.2" />
      <circle cx="40" cy="110" r="6" fill={S} />
      {/* Output coil */}
      <circle cx="260" cy="110" r="25" fill={D} />
      <circle cx="260" cy="110" r="15" fill={B} opacity="0.2" />
      <circle cx="260" cy="110" r="6" fill={S} />
      {/* Frame */}
      <rect x="105" y="50" width="10" height="130" rx="3" fill={S} opacity="0.4" />
      <rect x="185" y="50" width="10" height="130" rx="3" fill={S} opacity="0.4" />
    </svg>
  );
}

/* ── 14. Profile la Rece — Profil C care se formeaza ── */
function ProfilSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="195" width="300" height="25" rx="4" fill={G} opacity="0.3" />
      {/* Flat strip entering */}
      <rect x="10" y="105" width="80" height="8" rx="1" fill={S} opacity="0.6" />
      {/* Forming rolls */}
      {[100, 150, 200].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="90" r="12" fill={D} />
          <circle cx={x} cy="128" r="12" fill={D} />
          <circle cx={x} cy="90" r="5" fill={S} opacity="0.4" />
          <circle cx={x} cy="128" r="5" fill={S} opacity="0.4" />
        </g>
      ))}
      {/* Progressively formed profile */}
      <path d="M90 109 L110 105 L110 113 L90 109" fill={B} opacity="0.4" />
      <path d="M140 109 L160 100 L160 118 L140 109" fill={B} opacity="0.5" />
      <path className="anim-form-profile" d="M230 95 L230 123 L260 123 L260 118 L235 118 L235 100 L260 100 L260 95 Z" fill={B} opacity="0.7" />
      {/* Output arrow */}
      <path className="anim-arrow-move" d="M265 109 L285 109 L280 103 M285 109 L280 115" stroke={B} strokeWidth="2" fill="none" />
    </svg>
  );
}

/* ── 15. Trefilare Fire — Sarma prin filiere ── */
function TrefilareSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="195" width="300" height="25" rx="4" fill={G} opacity="0.3" />
      {/* Wire coil input */}
      <circle cx="40" cy="110" r="30" fill={D} />
      <circle cx="40" cy="110" r="20" fill={B} opacity="0.15" />
      <circle cx="40" cy="110" r="8" fill={S} />
      {/* Dies */}
      {[100, 150, 200].map((x, i) => (
        <g key={i}>
          <rect x={x - 8} y="85" width="16" height="50" rx="4" fill={D} />
          <rect x={x - 3} y="100" width="6" height="20" rx="2" fill="#0f172a" />
        </g>
      ))}
      {/* Wire getting thinner */}
      <line className="anim-wire" x1="70" y1="110" x2="100" y2="110" stroke={B} strokeWidth="6" />
      <line className="anim-wire" x1="108" y1="110" x2="150" y2="110" stroke={B} strokeWidth="4" />
      <line className="anim-wire" x1="158" y1="110" x2="200" y2="110" stroke={B} strokeWidth="3" />
      <line className="anim-wire" x1="208" y1="110" x2="260" y2="110" stroke={B} strokeWidth="2" />
      {/* Output spool */}
      <circle cx="265" cy="110" r="20" fill={D} />
      <circle className="anim-spool" cx="265" cy="110" r="15" fill={B} opacity="0.2" style={{ transformOrigin: "265px 110px" }} />
      <circle cx="265" cy="110" r="5" fill={S} />
    </svg>
  );
}

/* ── 16. Constructii Metalice — Hala cu sudura ── */
function HalaMetalicaSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="195" width="300" height="25" rx="4" fill={G} opacity="0.3" />
      {/* Hall frame */}
      <path d="M40 195 L40 80 L150 30 L260 80 L260 195" fill="none" stroke={D} strokeWidth="4" />
      <line x1="40" y1="120" x2="260" y2="120" stroke={D} strokeWidth="2" />
      <line x1="100" y1="195" x2="100" y2="55" stroke={D} strokeWidth="2" opacity="0.5" />
      <line x1="200" y1="195" x2="200" y2="55" stroke={D} strokeWidth="2" opacity="0.5" />
      {/* Roof triangle */}
      <path d="M40 80 L150 30 L260 80" fill={B} opacity="0.1" />
      {/* I-beam */}
      <rect x="120" y="140" width="60" height="6" rx="1" fill={S} />
      <rect x="147" y="140" width="6" height="50" rx="1" fill={S} />
      <rect x="120" y="185" width="60" height="6" rx="1" fill={S} />
      {/* Welding spark */}
      <circle className="anim-weld" cx="150" cy="140" r="8" fill={B} opacity="0.6" />
      <circle className="anim-spark-1" cx="155" cy="135" r="2" fill="#fbbf24" />
      <circle className="anim-spark-2" cx="145" cy="137" r="1.5" fill="#f97316" />
      <circle className="anim-spark-3" cx="152" cy="132" r="1" fill="#fbbf24" />
    </svg>
  );
}

/* ── 17. Fire si Cabluri — Cablu cu curent ── */
function CabluElectricSVG() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cable spool left */}
      <circle cx="50" cy="110" r="35" fill={D} />
      <circle cx="50" cy="110" r="25" fill={B} opacity="0.15" />
      <circle cx="50" cy="110" r="10" fill={S} />
      {/* Cable path */}
      <path d="M85 110 Q150 60 200 110 Q230 140 270 110" fill="none" stroke={D} strokeWidth="8" />
      <path className="anim-current" d="M85 110 Q150 60 200 110 Q230 140 270 110" fill="none" stroke={B} strokeWidth="4" strokeDasharray="15,10" />
      {/* Insulation layers */}
      <circle cx="150" cy="85" r="15" fill="none" stroke={D} strokeWidth="6" />
      <circle cx="150" cy="85" r="15" fill="none" stroke={B} strokeWidth="2" opacity="0.4" />
      <circle cx="150" cy="85" r="8" fill={S} opacity="0.4" />
      {/* Cross section view */}
      <circle cx="150" cy="85" r="3" fill="#ef4444" />
      <circle cx="145" cy="82" r="2" fill={B} />
      <circle cx="155" cy="82" r="2" fill="#22c55e" />
      {/* Electric pulses */}
      <circle className="anim-pulse-1" cx="120" cy="95" r="4" fill={B} opacity="0.5" />
      <circle className="anim-pulse-2" cx="180" cy="95" r="4" fill={B} opacity="0.5" />
      <circle className="anim-pulse-3" cx="240" cy="115" r="4" fill={B} opacity="0.5" />
      {/* Connector right */}
      <rect x="260" y="100" width="30" height="20" rx="4" fill={D} />
      <rect x="265" y="105" width="10" height="10" rx="2" fill={B} opacity="0.5" />
    </svg>
  );
}

/* ── Mapping slug → component ── */
const illustrations: Record<string, () => React.JSX.Element> = {
  "extractia-pietrei-ornamentale": ExcavatorSVG,
  "extractia-pietrisului-nisipului": CamionSVG,
  "fabricarea-produselor-refractare": CuptorRefractarSVG,
  "fabricarea-izolatorilor-ceramici": IzolatorSVG,
  "fabricarea-varului-ipsosului": VarIpsosSVG,
  "fabricarea-produselor-beton-constructii": VibroSVG,
  "fabricarea-betonului": BetonieraSVG,
  "fabricarea-mortarului": MortarSVG,
  "fabricarea-articolelor-beton-ciment-ipsos": JardinieraSVG,
  "taierea-fasonarea-finisarea-pietrei": DiscDiamantSVG,
  "fabricarea-produselor-minerale-nemetalice": AbrazivSVG,
  "tragerea-la-rece-a-barelor": TragereBareSVG,
  "laminarea-la-rece-a-benzilor-inguste": LaminareSVG,
  "productia-de-profile-la-rece": ProfilSVG,
  "trefilarea-firelor-la-rece": TrefilareSVG,
  "fabricarea-constructiilor-metalice": HalaMetalicaSVG,
  "fabricarea-firelor-cablurilor-electrice": CabluElectricSVG,
};
