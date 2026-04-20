// App shell: theme, icons, shared atoms

const THEME = {
  navy: '#08122A',
  navyDeep: '#050B1C',
  navyCard: '#0F1B3D',
  navyCardHi: '#162552',
  navyLine: 'rgba(255,255,255,0.08)',
  gold: '#FFC83D',
  goldDeep: '#E5A70E',
  goldHi: '#FFE082',
  white: '#FFFFFF',
  muted: 'rgba(255,255,255,0.6)',
  muted2: 'rgba(255,255,255,0.38)',
  green: '#35D07F',
  danger: '#FF5470',
};

// — Icons (line, 24px grid) —
const Icon = ({ name, size = 22, color = 'currentColor', stroke = 2 }) => {
  const P = { fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    home: <><path d="M3 11l9-7 9 7" {...P}/><path d="M5 10v10h14V10" {...P}/></>,
    ticket: <><path d="M3 8a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 000-4V8z" {...P}/><path d="M9 6v12" {...P} strokeDasharray="2 2"/></>,
    wallet: <><rect x="3" y="6" width="18" height="13" rx="2" {...P}/><path d="M16 13h2" {...P}/><path d="M3 10h18" {...P}/></>,
    profile: <><circle cx="12" cy="8" r="4" {...P}/><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" {...P}/></>,
    trophy: <><path d="M8 4h8v4a4 4 0 01-8 0V4z" {...P}/><path d="M5 5H3v2a3 3 0 003 3M19 5h2v2a3 3 0 01-3 3" {...P}/><path d="M12 12v4M9 20h6M10 20v-2h4v2" {...P}/></>,
    clock: <><circle cx="12" cy="12" r="9" {...P}/><path d="M12 7v5l3 2" {...P}/></>,
    plus: <><path d="M12 5v14M5 12h14" {...P}/></>,
    chevronR: <path d="M9 5l7 7-7 7" {...P}/>,
    chevronL: <path d="M15 5l-7 7 7 7" {...P}/>,
    chevronD: <path d="M5 9l7 7 7-7" {...P}/>,
    bell: <><path d="M6 8a6 6 0 1112 0c0 7 3 8 3 8H3s3-1 3-8z" {...P}/><path d="M10 20a2 2 0 004 0" {...P}/></>,
    lock: <><rect x="5" y="11" width="14" height="10" rx="2" {...P}/><path d="M8 11V7a4 4 0 018 0v4" {...P}/></>,
    check: <path d="M5 12l5 5 10-10" {...P}/>,
    close: <path d="M6 6l12 12M18 6L6 18" {...P}/>,
    gift: <><rect x="3" y="8" width="18" height="12" rx="1" {...P}/><path d="M3 13h18M12 8v12M8 8c-2 0-3-3-1-4s4 2 4 4c0-2 2-5 4-4s1 4-1 4" {...P}/></>,
    sparkle: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M6 18l3-3" {...P}/></>,
    live: <><circle cx="12" cy="12" r="3" {...P}/><path d="M7 7a7 7 0 000 10M17 7a7 7 0 010 10M4 4a11 11 0 000 16M20 4a11 11 0 010 16" {...P}/></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" {...P}/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2" {...P}/></>,
    shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" {...P}/><path d="M9 12l2 2 4-4" {...P}/></>,
    share: <><circle cx="6" cy="12" r="2.5" {...P}/><circle cx="18" cy="6" r="2.5" {...P}/><circle cx="18" cy="18" r="2.5" {...P}/><path d="M8 11l8-4M8 13l8 4" {...P}/></>,
    qr: <><rect x="3" y="3" width="7" height="7" rx="1" {...P}/><rect x="14" y="3" width="7" height="7" rx="1" {...P}/><rect x="3" y="14" width="7" height="7" rx="1" {...P}/><path d="M14 14h3v3M17 20h4M20 14v3" {...P}/></>,
    arrowUp: <><path d="M12 5v14M5 12l7-7 7 7" {...P}/></>,
    arrowDown: <><path d="M12 5v14M5 12l7 7 7-7" {...P}/></>,
    flame: <path d="M12 3c1 3-2 4-2 7a2 2 0 004 0c0 3 3 4 3 7a7 7 0 11-14 0c0-4 4-5 4-9 0-2 2-3 5-5z" {...P}/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      {paths[name] || null}
    </svg>
  );
};

// Lucky coin SVG (original clover-less design — four-point star inside a coin)
const CoinGlyph = ({ size = 40, rotate = 0 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" style={{ transform: `rotate(${rotate}deg)` }}>
    <defs>
      <radialGradient id="coinA" cx="35%" cy="30%">
        <stop offset="0%" stopColor="#FFF5CF"/>
        <stop offset="45%" stopColor="#FFC83D"/>
        <stop offset="100%" stopColor="#B8791C"/>
      </radialGradient>
      <linearGradient id="coinRim" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFE082"/>
        <stop offset="100%" stopColor="#7A4C05"/>
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="30" fill="url(#coinRim)"/>
    <circle cx="32" cy="32" r="26" fill="url(#coinA)"/>
    <circle cx="32" cy="32" r="26" fill="none" stroke="#B8791C" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="1 3"/>
    {/* 4-point compass star */}
    <path d="M32 12 L36 28 L52 32 L36 36 L32 52 L28 36 L12 32 L28 28 Z" fill="#8A5A0B" opacity="0.55"/>
    <path d="M32 16 L34.5 29.5 L48 32 L34.5 34.5 L32 48 L29.5 34.5 L16 32 L29.5 29.5 Z" fill="#FFF6D1" opacity="0.8"/>
    {/* shine */}
    <ellipse cx="22" cy="22" rx="8" ry="4" fill="#fff" opacity="0.45" transform="rotate(-30 22 22)"/>
  </svg>
);

// Logo — "GS" monogram in a coin
const Logo = ({ size = 36 }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <div style={{
      width: size, height: size, borderRadius: size / 2,
      background: 'radial-gradient(circle at 35% 30%, #FFF5CF 0%, #FFC83D 45%, #B8791C 100%)',
      border: '2px solid #E5A70E',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Archivo Black", system-ui', fontSize: size * 0.42,
      color: '#08122A', letterSpacing: -1,
      boxShadow: 'inset -2px -2px 4px rgba(122,76,5,0.4), inset 2px 2px 3px rgba(255,255,255,0.5)',
    }}>GS</div>
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <span style={{ fontFamily: '"Archivo Black", system-ui', fontSize: 15, color: THEME.gold, letterSpacing: 0.3 }}>GORJETA</span>
      <span style={{ fontFamily: '"Archivo Black", system-ui', fontSize: 15, color: '#fff', letterSpacing: 0.3, fontStyle: 'italic' }}>dá SORTE</span>
    </div>
  </div>
);

// Shared button
const GoldButton = ({ children, onClick, full, size = 'md', disabled, icon }) => {
  const pads = { sm: '10px 16px', md: '14px 22px', lg: '18px 28px' };
  const fs = { sm: 13, md: 15, lg: 17 };
  return (
    <button onClick={onClick} disabled={disabled} style={{
      all: 'unset', cursor: disabled ? 'not-allowed' : 'pointer',
      boxSizing: 'border-box', width: full ? '100%' : undefined,
      padding: pads[size], borderRadius: 999,
      background: disabled
        ? 'rgba(255,200,61,0.25)'
        : 'linear-gradient(180deg, #FFD666 0%, #FFC83D 55%, #E5A70E 100%)',
      color: '#0B1326', fontFamily: 'Inter, system-ui',
      fontSize: fs[size], fontWeight: 800, letterSpacing: 0.2,
      textAlign: 'center', display: 'inline-flex', alignItems: 'center',
      justifyContent: 'center', gap: 8,
      boxShadow: disabled ? 'none' : '0 8px 20px -6px rgba(255,200,61,0.55), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(122,76,5,0.25)',
      transition: 'transform 0.1s',
    }}
    onMouseDown={e => !disabled && (e.currentTarget.style.transform = 'scale(0.97)')}
    onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {icon}{children}
    </button>
  );
};

const GhostButton = ({ children, onClick, full, icon }) => (
  <button onClick={onClick} style={{
    all: 'unset', cursor: 'pointer', boxSizing: 'border-box',
    width: full ? '100%' : undefined,
    padding: '13px 20px', borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.16)',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff', fontFamily: 'Inter, system-ui',
    fontSize: 14, fontWeight: 600, textAlign: 'center',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  }}>{icon}{children}</button>
);

// Section heading (like "ÚLTIMOS SORTEIOS")
const SectionHeader = ({ icon, title, action, onAction }) => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 20px', marginBottom: 12,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {icon && <Icon name={icon} size={16} color={THEME.gold} stroke={2.2}/>}
      <span style={{
        fontFamily: 'Inter, system-ui', fontSize: 12, fontWeight: 700,
        color: 'rgba(255,255,255,0.7)', letterSpacing: 1.4,
      }}>{title}</span>
    </div>
    {action && (
      <button onClick={onAction} style={{
        all: 'unset', cursor: 'pointer', color: THEME.gold, fontSize: 13,
        fontFamily: 'Inter, system-ui', fontWeight: 600,
        display: 'inline-flex', alignItems: 'center', gap: 2,
      }}>{action} <Icon name="chevronR" size={14}/></button>
    )}
  </div>
);

// Raffle card
const RaffleCard = ({ title, date, prizes, total, live, onClick, featured }) => (
  <div onClick={onClick} style={{
    cursor: 'pointer', minWidth: 220, flexShrink: 0,
    padding: 16, borderRadius: 18,
    background: featured
      ? 'linear-gradient(155deg, #1B3178 0%, #0F1B3D 70%)'
      : 'linear-gradient(180deg, #14225A 0%, #0F1B3D 100%)',
    border: featured ? '1px solid rgba(255,200,61,0.35)' : '1px solid rgba(255,255,255,0.06)',
    position: 'relative', overflow: 'hidden',
  }}>
    {live && (
      <div style={{
        position: 'absolute', top: 12, right: 12,
        display: 'flex', alignItems: 'center', gap: 5,
        padding: '3px 8px', borderRadius: 999,
        background: 'rgba(255,84,112,0.15)', border: '1px solid rgba(255,84,112,0.4)',
      }}>
        <div style={{ width: 6, height: 6, borderRadius: 3, background: '#FF5470', animation: 'pulse 1.2s infinite' }}/>
        <span style={{ fontSize: 10, color: '#FF5470', fontWeight: 700, letterSpacing: 0.5 }}>AO VIVO</span>
      </div>
    )}
    <div style={{
      fontFamily: '"Archivo Black", system-ui', fontSize: 15,
      color: '#fff', lineHeight: 1.15, textTransform: 'uppercase',
      marginBottom: 4, paddingRight: live ? 60 : 0,
    }}>{title}</div>
    <div style={{ fontSize: 11, color: THEME.muted, marginBottom: 14 }}>{date}</div>
    <div style={{
      padding: '10px 12px', borderRadius: 10,
      background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,200,61,0.12)',
    }}>
      <div style={{ fontSize: 13, color: '#fff', fontWeight: 700 }}>
        {prizes} prêmios distribuídos
      </div>
      <div style={{ fontSize: 11, color: THEME.muted, marginTop: 2 }}>
        Total <span style={{ color: THEME.gold, fontWeight: 700 }}>R$ {total}</span>
      </div>
    </div>
  </div>
);

Object.assign(window, { THEME, Icon, CoinGlyph, Logo, GoldButton, GhostButton, SectionHeader, RaffleCard });
