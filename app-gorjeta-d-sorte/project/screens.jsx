// Screens: Login, Home, Raffle Detail, Wheel, Result, Wallet, Profile

const { useState, useEffect, useRef } = React;

// ─────────────────────────────────────────────
// Background — stars + subtle radial
// ─────────────────────────────────────────────
const NavyBg = ({ children, variant = 'base' }) => (
  <div style={{
    minHeight: '100%', position: 'relative',
    background: variant === 'hero'
      ? 'radial-gradient(120% 80% at 50% 0%, #1A2E6E 0%, #0A1530 55%, #050B1C 100%)'
      : 'linear-gradient(180deg, #0A1530 0%, #050B1C 100%)',
    overflow: 'hidden',
  }}>
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.3, pointerEvents: 'none' }}>
      {[...Array(30)].map((_, i) => {
        const x = (i * 83 + 40) % 400;
        const y = (i * 137) % 800;
        const r = i % 3 === 0 ? 1.5 : 0.8;
        return <circle key={i} cx={x} cy={y} r={r} fill="#FFC83D" opacity={0.4 + (i % 3) * 0.2}/>;
      })}
    </svg>
    <div style={{ position: 'relative' }}>{children}</div>
  </div>
);

// ─────────────────────────────────────────────
// LOGIN
// ─────────────────────────────────────────────
const LoginScreen = ({ onLogin }) => {
  const [phone, setPhone] = useState('(11) 98•••-•654');
  return (
    <NavyBg variant="hero">
      <div style={{ padding: '70px 24px 40px', minHeight: 810, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <Logo size={52}/>
        </div>

        {/* Hero coin shower */}
        <div style={{ position: 'relative', height: 220, marginTop: 24, marginBottom: 12 }}>
          {[
            { x: 30, y: 20, s: 68, r: -15, d: 0 },
            { x: 140, y: 90, s: 92, r: 18, d: 0.2 },
            { x: 240, y: 15, s: 58, r: 25, d: 0.4 },
            { x: 70, y: 135, s: 48, r: -30, d: 0.6 },
            { x: 220, y: 125, s: 62, r: 10, d: 0.8 },
            { x: 180, y: 40, s: 38, r: 40, d: 0.3 },
          ].map((c, i) => (
            <div key={i} style={{
              position: 'absolute', left: c.x, top: c.y,
              animation: `float 3s ease-in-out infinite`,
              animationDelay: `${c.d}s`,
            }}>
              <CoinGlyph size={c.s} rotate={c.r}/>
            </div>
          ))}
        </div>

        <div style={{
          fontFamily: '"Archivo Black", system-ui', fontSize: 38,
          color: '#fff', textAlign: 'center', lineHeight: 0.95,
          textTransform: 'uppercase', letterSpacing: -0.5,
        }}>
          <span style={{ color: THEME.gold, fontStyle: 'italic' }}>Gorjeta</span>
          <br/>
          <span style={{ fontStyle: 'italic' }}>dá Sorte</span>
        </div>
        <div style={{
          textAlign: 'center', color: THEME.muted, fontSize: 14,
          marginTop: 14, padding: '0 20px', lineHeight: 1.4,
        }}>
          A cada gorjeta, uma chance de<br/>levar prêmios em dinheiro todo dia.
        </div>

        <div style={{ flex: 1 }}/>

        <div style={{
          padding: 16, borderRadius: 20,
          background: 'rgba(15,27,61,0.7)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{ fontSize: 11, color: THEME.muted, fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>
            ENTRAR COM TELEFONE
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '14px 14px', borderRadius: 12,
            background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.08)',
            marginBottom: 12,
          }}>
            <span style={{ fontSize: 20 }}>🇧🇷</span>
            <div style={{ fontSize: 13, color: THEME.muted }}>+55</div>
            <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.1)' }}/>
            <div style={{ flex: 1, color: '#fff', fontSize: 15, fontWeight: 500 }}>{phone}</div>
          </div>
          <GoldButton full onClick={onLogin} size="lg">Entrar</GoldButton>
          <div style={{ textAlign: 'center', marginTop: 14, fontSize: 13, color: THEME.muted }}>
            Não tem conta? <span style={{ color: THEME.gold, fontWeight: 600 }}>Cadastre-se</span>
          </div>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 12, marginTop: 16, fontSize: 11, color: THEME.muted,
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Icon name="lock" size={12}/> SSL
          </span>
          <span style={{ width: 3, height: 3, borderRadius: 1.5, background: 'rgba(255,255,255,0.2)' }}/>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Icon name="shield" size={12}/> Verificado
          </span>
          <span style={{ width: 3, height: 3, borderRadius: 1.5, background: 'rgba(255,255,255,0.2)' }}/>
          <span>18+</span>
        </div>
      </div>
    </NavyBg>
  );
};

// ─────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────
const HomeScreen = ({ user, onOpenRaffle, onTabChange, nextDrawIn }) => {
  return (
    <NavyBg variant="hero">
      <div style={{ padding: '64px 0 120px' }}>
        {/* Top bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 20px', marginBottom: 18,
        }}>
          <Logo size={34}/>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={atomBtn}><Icon name="bell" size={18} color="#fff"/></button>
            <button style={atomBtn}>
              <div style={{
                width: 28, height: 28, borderRadius: 14,
                background: 'linear-gradient(135deg, #FFC83D, #E5A70E)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Archivo Black"', fontSize: 12, color: '#08122A',
              }}>{user.initials}</div>
            </button>
          </div>
        </div>

        {/* Balance hero */}
        <div style={{ padding: '0 20px', marginBottom: 20 }}>
          <div style={{
            padding: 20, borderRadius: 24,
            background: 'linear-gradient(135deg, #1B3178 0%, #0F1B3D 55%, #08122A 100%)',
            border: '1px solid rgba(255,200,61,0.2)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Decorative big GORJETA word */}
            <div style={{
              position: 'absolute', right: -20, top: 10,
              fontFamily: '"Archivo Black"', fontSize: 70,
              color: 'transparent', WebkitTextStroke: '1px rgba(255,200,61,0.12)',
              letterSpacing: -3, fontStyle: 'italic', transform: 'rotate(-4deg)',
              pointerEvents: 'none',
            }}>SORTE</div>

            <div style={{ fontSize: 11, color: THEME.muted, fontWeight: 600, letterSpacing: 1.2 }}>
              SEU SALDO DE CHANCES
            </div>
            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 4,
              marginTop: 4, marginBottom: 12,
            }}>
              <span style={{ fontFamily: '"Archivo Black"', fontSize: 42, color: '#fff' }}>
                {user.tickets}
              </span>
              <span style={{ fontSize: 14, color: THEME.muted, fontWeight: 600 }}>bilhetes</span>
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 12px', borderRadius: 12,
              background: 'rgba(0,0,0,0.35)',
              border: '1px solid rgba(255,200,61,0.15)',
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: 'rgba(255,200,61,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon name="flame" size={18} color={THEME.gold}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: THEME.muted }}>Próximo sorteio em</div>
                <div style={{ fontSize: 15, color: '#fff', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
                  {nextDrawIn}
                </div>
              </div>
              <div style={{
                padding: '6px 10px', borderRadius: 999,
                background: THEME.gold, color: '#08122A',
                fontSize: 11, fontWeight: 800, letterSpacing: 0.3,
              }}>
                R$ 1.200
              </div>
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              <GoldButton full size="sm" icon={<Icon name="plus" size={14} stroke={3}/>}>
                Dar gorjeta
              </GoldButton>
              <GhostButton full icon={<Icon name="qr" size={14}/>}>Escanear</GhostButton>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8,
          padding: '0 20px', marginBottom: 24,
        }}>
          {[
            { icon: 'ticket', label: 'Bilhetes', tint: '#FFC83D' },
            { icon: 'trophy', label: 'Ganhos', tint: '#35D07F' },
            { icon: 'gift', label: 'Convidar', tint: '#8B9DFF' },
            { icon: 'sparkle', label: 'Missões', tint: '#FF9F6B' },
          ].map(a => (
            <button key={a.label} style={{
              all: 'unset', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              padding: '10px 4px',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: `${a.tint}22`, border: `1px solid ${a.tint}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon name={a.icon} size={20} color={a.tint}/>
              </div>
              <span style={{ fontSize: 11, color: THEME.muted, fontWeight: 500 }}>{a.label}</span>
            </button>
          ))}
        </div>

        {/* Live raffle banner */}
        <div style={{ padding: '0 20px', marginBottom: 20 }}>
          <div onClick={() => onOpenRaffle('live')} style={{
            cursor: 'pointer', padding: '16px 18px', borderRadius: 20,
            background: 'linear-gradient(100deg, #2E0B3D 0%, #6B1C5A 100%)',
            border: '1px solid rgba(255,84,112,0.25)',
            position: 'relative', overflow: 'hidden',
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div style={{
              width: 54, height: 54, borderRadius: 14,
              background: 'rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <CoinGlyph size={46}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                <div style={{ width: 6, height: 6, borderRadius: 3, background: '#FF5470', animation: 'pulse 1.2s infinite' }}/>
                <span style={{ fontSize: 10, color: '#FF9FB8', fontWeight: 700, letterSpacing: 1 }}>AO VIVO AGORA</span>
              </div>
              <div style={{
                fontFamily: '"Archivo Black"', fontSize: 15, color: '#fff',
                textTransform: 'uppercase', lineHeight: 1.1,
              }}>Sextou em Dobro</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', marginTop: 2 }}>
                1.247 pessoas assistindo · próximo em 02:14
              </div>
            </div>
            <Icon name="chevronR" size={20} color="#fff"/>
          </div>
        </div>

        {/* Recent raffles */}
        <SectionHeader icon="clock" title="ÚLTIMOS SORTEIOS" action="Ver todos"/>
        <div style={{
          display: 'flex', gap: 12, overflowX: 'auto',
          padding: '0 20px 4px', scrollbarWidth: 'none',
        }}>
          <RaffleCard title="Sextou em Dobro" date="17 de abril de 2026" prizes={130} total="500,00" live onClick={() => onOpenRaffle('live')} featured/>
          <RaffleCard title="Gorjeta do Consolo" date="16 de abril de 2026" prizes={30} total="200,00" onClick={() => onOpenRaffle('c1')}/>
          <RaffleCard title="Live em Dobro - GEA" date="15 de abril de 2026" prizes={140} total="700,00" onClick={() => onOpenRaffle('c2')}/>
          <div style={{ width: 4, flexShrink: 0 }}/>
        </div>

        {/* Leaderboard teaser */}
        <div style={{ padding: '28px 20px 0' }}>
          <SectionHeader icon="trophy" title="TOP GANHADORES DA SEMANA" action="Ranking"/>
          <div style={{
            padding: 16, borderRadius: 18,
            background: 'linear-gradient(180deg, #14225A 0%, #0F1B3D 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            {[
              { pos: 1, name: 'Mariana S.', prize: 'R$ 1.800', avatar: '#FFC83D' },
              { pos: 2, name: 'Carlos D.', prize: 'R$ 1.200', avatar: '#8B9DFF' },
              { pos: 3, name: 'Juliana R.', prize: 'R$ 900', avatar: '#FF9F6B' },
            ].map((u, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 0',
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  width: 24, height: 24, borderRadius: 12,
                  background: i === 0 ? THEME.gold : 'rgba(255,255,255,0.1)',
                  color: i === 0 ? '#08122A' : '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 800, fontFamily: '"Archivo Black"',
                }}>{u.pos}</div>
                <div style={{
                  width: 32, height: 32, borderRadius: 16, background: u.avatar,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700, color: '#08122A',
                }}>{u.name[0]}</div>
                <div style={{ flex: 1, fontSize: 14, color: '#fff', fontWeight: 500 }}>{u.name}</div>
                <div style={{ fontSize: 14, color: THEME.gold, fontWeight: 700 }}>{u.prize}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 40 }}/>

        {/* Trust bar */}
        <div style={{
          margin: '0 20px', padding: '12px 14px', borderRadius: 14,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-around',
          fontSize: 11, color: THEME.muted,
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Icon name="lock" size={12} color={THEME.gold}/> SSL Encrypted
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Icon name="shield" size={12} color={THEME.gold}/> Dados seguros
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Icon name="check" size={12} color={THEME.gold}/> Verificado
          </span>
        </div>
      </div>
    </NavyBg>
  );
};

const atomBtn = {
  all: 'unset', cursor: 'pointer',
  width: 40, height: 40, borderRadius: 12,
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.08)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

Object.assign(window, { NavyBg, LoginScreen, HomeScreen, atomBtn });
