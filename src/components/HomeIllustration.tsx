export function HomeIllustration() {
  const B = "#3b82f6";
  const D = "#1e3a5f";
  const S = "#94a3b8";
  const L = "#cbd5e1";

  return (
    <div className="w-full max-w-[420px] opacity-90">
      <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ground line */}
        <rect x="0" y="290" width="400" height="30" rx="6" fill="#0f172a" opacity="0.4" />

        {/* === Factory building === */}
        <rect x="30" y="120" width="140" height="170" rx="6" fill={D} />
        <rect x="40" y="130" width="50" height="40" rx="4" fill="#0f172a" />
        <rect x="100" y="130" width="50" height="40" rx="4" fill="#0f172a" />
        {/* Windows glow */}
        <rect className="anim-window-1" x="45" y="135" width="40" height="30" rx="3" fill={B} opacity="0.15" />
        <rect className="anim-window-2" x="105" y="135" width="40" height="30" rx="3" fill={B} opacity="0.15" />
        {/* Door */}
        <rect x="75" y="230" width="50" height="60" rx="4" fill="#0f172a" />
        <circle cx="117" cy="260" r="3" fill={S} opacity="0.5" />
        {/* Factory sign */}
        <rect x="55" y="185" width="90" height="25" rx="4" fill={B} opacity="0.2" />
        <rect x="65" y="192" width="70" height="4" rx="2" fill={B} opacity="0.4" />
        <rect x="75" y="200" width="50" height="3" rx="1" fill={B} opacity="0.3" />

        {/* === Chimney with smoke === */}
        <rect x="50" y="80" width="25" height="45" rx="3" fill={S} opacity="0.6" />
        <rect x="120" y="70" width="25" height="55" rx="3" fill={S} opacity="0.6" />
        {/* Smoke */}
        <circle className="anim-smoke-h1" cx="62" cy="75" r="8" fill={L} opacity="0.15" />
        <circle className="anim-smoke-h2" cx="70" cy="60" r="10" fill={L} opacity="0.1" />
        <circle className="anim-smoke-h3" cx="132" cy="65" r="9" fill={L} opacity="0.12" />
        <circle className="anim-smoke-h4" cx="138" cy="45" r="12" fill={L} opacity="0.08" />

        {/* === Crane === */}
        <rect x="220" y="60" width="8" height="230" rx="2" fill={S} opacity="0.7" />
        <rect x="200" y="60" width="80" height="8" rx="2" fill={S} opacity="0.6" />
        {/* Crane diagonal support */}
        <line x1="224" y1="68" x2="270" y2="60" stroke={S} strokeWidth="2" opacity="0.4" />
        <line x1="224" y1="68" x2="200" y2="60" stroke={S} strokeWidth="2" opacity="0.4" />
        {/* Crane cable */}
        <line className="anim-crane-cable" x1="260" y1="68" x2="260" y2="180" stroke={L} strokeWidth="1.5" strokeDasharray="4,3" />
        {/* Crane hook + load */}
        <g className="anim-crane-load">
          <path d="M255 180 L265 180 L262 186 L258 186 Z" fill={B} opacity="0.7" />
          <rect x="248" y="186" width="24" height="18" rx="3" fill={D} />
          <rect x="250" y="188" width="20" height="14" rx="2" fill={B} opacity="0.2" />
        </g>

        {/* === Truck === */}
        <g className="anim-truck">
          {/* Truck body */}
          <rect x="280" y="245" width="80" height="35" rx="4" fill={D} />
          <rect x="280" y="248" width="55" height="28" rx="3" fill={B} opacity="0.2" />
          {/* Cabin */}
          <rect x="345" y="252" width="25" height="28" rx="5" fill={D} />
          <rect x="350" y="257" width="15" height="12" rx="3" fill={L} opacity="0.2" />
          {/* Wheels */}
          <circle cx="300" cy="285" r="9" fill="#0f172a" />
          <circle cx="300" cy="285" r="4" fill={S} opacity="0.5" />
          <circle cx="350" cy="285" r="9" fill="#0f172a" />
          <circle cx="350" cy="285" r="4" fill={S} opacity="0.5" />
        </g>

        {/* === Conveyor belt with materials === */}
        <line x1="170" y1="260" x2="280" y2="260" stroke={S} strokeWidth="3" opacity="0.4" />
        {/* Support legs */}
        <line x1="195" y1="260" x2="195" y2="290" stroke={S} strokeWidth="2" opacity="0.3" />
        <line x1="240" y1="260" x2="240" y2="290" stroke={S} strokeWidth="2" opacity="0.3" />
        {/* Moving blocks */}
        <rect className="anim-block-1" x="180" y="248" width="14" height="12" rx="2" fill={B} opacity="0.5" />
        <rect className="anim-block-2" x="210" y="248" width="14" height="12" rx="2" fill={L} opacity="0.4" />
        <rect className="anim-block-3" x="240" y="248" width="14" height="12" rx="2" fill={B} opacity="0.5" />

        {/* === Energy/efficiency symbol === */}
        <circle cx="340" cy="100" r="35" fill={D} opacity="0.5" />
        <circle cx="340" cy="100" r="28" fill="#0f172a" opacity="0.6" />
        {/* Lightning bolt */}
        <path className="anim-bolt" d="M335 80 L330 100 L338 98 L333 120 L348 95 L340 97 L345 80 Z" fill={B} opacity="0.8" />
        {/* Circular arrows (efficiency) */}
        <path className="anim-efficiency" d="M315 100 A25 25 0 0 1 365 100" fill="none" stroke={B} strokeWidth="2" opacity="0.4" strokeDasharray="6,4" />
        <path className="anim-efficiency" d="M365 100 A25 25 0 0 1 315 100" fill="none" stroke={B} strokeWidth="2" opacity="0.4" strokeDasharray="6,4" />

        {/* === EU flag stars hint === */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const r = 20;
          const cx = 340 + r * Math.cos(((angle - 90) * Math.PI) / 180);
          const cy = 100 + r * Math.sin(((angle - 90) * Math.PI) / 180);
          return <circle key={i} cx={cx} cy={cy} r="1.5" fill={B} opacity="0.5" />;
        })}

        {/* === Gears === */}
        <circle className="anim-gear-1" cx="45" cy="270" r="12" fill="none" stroke={B} strokeWidth="2" opacity="0.3" strokeDasharray="5,3" style={{ transformOrigin: "45px 270px" }} />
        <circle cx="45" cy="270" r="4" fill={B} opacity="0.2" />
        <circle className="anim-gear-2" cx="68" cy="278" r="8" fill="none" stroke={B} strokeWidth="2" opacity="0.3" strokeDasharray="4,2" style={{ transformOrigin: "68px 278px" }} />
        <circle cx="68" cy="278" r="3" fill={B} opacity="0.2" />

        {/* === Data/digital indicators === */}
        <rect x="42" y="138" width="8" height="20" rx="1" fill={B} opacity="0.3" />
        <rect className="anim-bar-1" x="52" y="145" width="8" height="13" rx="1" fill={B} opacity="0.4" />
        <rect className="anim-bar-2" x="62" y="140" width="8" height="18" rx="1" fill={B} opacity="0.35" />
        <rect x="72" y="148" width="8" height="10" rx="1" fill={B} opacity="0.25" />
      </svg>
    </div>
  );
}
