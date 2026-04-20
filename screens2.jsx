// Raffle detail, Wheel, Result, Wallet, Profile screens + Bottom nav

const { useState: useS2, useEffect: useE2, useRef: useR2 } = React;

// ─────────────────────────────────────────────
// RAFFLE DETAIL
// ─────────────────────────────────────────────
const RaffleDetail = ({ onBack, onSpin }) => {
  const [sel, setSel] = useS2(3);
  const tiers = [
    { n: 1, price: 'R$ 5', odds: '1 em 50' },
    { n: 3, price: 'R$ 12', odds: '1 em 17', tag: 'Popular' },
    { n: 5, price: 'R$ 20', odds: '1 em 10' },
    { n: 10, price: 'R$ 35', odds: '1 em 5', tag: 'Melhor' },
  ];
  return (
    <NavyBg variant="hero">
      <div style={{ padding: '58px 0 120px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 20px', marginBottom: 20,
        }}>
          <button onClick={onBack} style={atomBtn}><Icon name="chevronL" size={18} color="#fff"/></button>
          <button style={atomBtn}><Icon name="share" size={16} color="#fff"/></button>
        </div>

        {/* Hero */}
        <div style={{
          margin: '0 20px', padding: '20px 18px 24px',
          borderRadius: 24, position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(145deg, #1B3178 0%, #0F1B3D 60%, #08122A 100%)',
          border: '1px solid rgba(255,200,61,0.25)',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 80% 30%, rgba(255,200,61,0.25), transparent 60%)',
          }}/>
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '4px 10px', borderRadius: 999,
              background: 'rgba(255,84,112,0.15)', border: '1px solid rgba(255,84,112,0.4)',
              marginBottom: 12,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: 3, background: '#FF5470', animation: 'pulse 1.2s infinite' }}/>
              <span style={{ fontSize: 10, color: '#FF9FB8', fontWeight: 700, letterSpacing: 1 }}>AO VIVO</span>
            </div>
            <div style={{
              fontFamily: '"Archivo Black"', fontSize: 28, color: '#fff',
              textTransform: 'uppercase', lineHeight: 0.95, fontStyle: 'italic',
            }}>
              Sextou<br/><span style={{ color: THEME.gold }}>em Dobro</span>
            </div>
            <div style={{ fontSize: 13, color: THEME.muted, marginTop: 8 }}>
              17 de abril · encerra em 02:14
            </div>

            {/* Coins cluster */}
            <div style={{ position: 'absolute', right: -10, top: -5 }}>
              <div style={{ position: 'relative', width: 140, height: 120 }}>
                <div style={{ position: 'absolute', left: 30, top: 0, animation: 'float 3s ease-in-out infinite' }}><CoinGlyph size={52} rotate={-10}/></div>
                <div style={{ position: 'absolute', left: 70, top: 50, animation: 'float 3s ease-in-out infinite', animationDelay: '0.4s' }}><CoinGlyph size={64} rotate={15}/></div>
                <div style={{ position: 'absolute', left: 0, top: 60, animation: 'float 3s ease-in-out infinite', animationDelay: '0.8s' }}><CoinGlyph size={42} rotate={-25}/></div>
              </div>
            </div>
          </div>

          {/* Prize pool */}
          <div style={{
            marginTop: 24, padding: '12px 14px', borderRadius: 14,
            background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,200,61,0.2)',
            position: 'relative', display: 'flex', gap: 14,
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: THEME.muted, letterSpacing: 1, fontWeight: 600 }}>PRÊMIO TOTAL</div>
              <div style={{ fontFamily: '"Archivo Black"', fontSize: 22, color: THEME.gold, lineHeight: 1 }}>R$ 1.200</div>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: THEME.muted, letterSpacing: 1, fontWeight: 600 }}>GANHADORES</div>
              <div style={{ fontFamily: '"Archivo Black"', fontSize: 22, color: '#fff', lineHeight: 1 }}>130</div>
            </div>
          </div>
        </div>

        {/* Ticket tiers */}
        <div style={{ padding: '28px 20px 0' }}>
          <SectionHeader icon="ticket" title="ESCOLHA SEUS BILHETES"/>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {tiers.map((t, i) => {
              const active = sel === i;
              return (
                <button key={i} onClick={() => setSel(i)} style={{
                  all: 'unset', cursor: 'pointer', boxSizing: 'border-box',
                  padding: 14, borderRadius: 16, position: 'relative',
                  background: active
                    ? 'linear-gradient(145deg, rgba(255,200,61,0.18), rgba(255,200,61,0.06))'
                    : 'rgba(255,255,255,0.03)',
                  border: active ? '1.5px solid #FFC83D' : '1px solid rgba(255,255,255,0.08)',
                }}>
                  {t.tag && (
                    <div style={{
                      position: 'absolute', top: -8, right: 12,
                      padding: '3px 8px', borderRadius: 999,
                      background: THEME.gold, color: '#08122A',
                      fontSize: 9, fontWeight: 800, letterSpacing: 0.5,
                    }}>{t.tag.toUpperCase()}</div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                    <Icon name="ticket" size={16} color={active ? THEME.gold : THEME.muted}/>
                    <span style={{ fontFamily: '"Archivo Black"', fontSize: 20, color: '#fff' }}>
                      {t.n}×
                    </span>
                  </div>
                  <div style={{ fontSize: 16, color: '#fff', fontWeight: 700 }}>{t.price}</div>
                  <div style={{ fontSize: 11, color: THEME.muted, marginTop: 2 }}>
                    chances {t.odds}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current winners stream */}
        <div style={{ padding: '24px 0 0' }}>
          <SectionHeader icon="sparkle" title="GANHARAM AGORA"/>
          <div style={{ padding: '0 20px' }}>
            {[
              { name: 'Ana P.', time: 'há 12s', prize: 'R$ 50' },
              { name: 'Roberto K.', time: 'há 48s', prize: 'R$ 20' },
              { name: 'Fernanda M.', time: 'há 1min', prize: 'R$ 200' },
            ].map((w, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 12px', borderRadius: 12, marginBottom: 8,
                background: 'rgba(53,208,127,0.06)', border: '1px solid rgba(53,208,127,0.12)',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 16,
                  background: `hsl(${i * 80 + 40}, 60%, 60%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700, color: '#08122A',
                }}>{w.name[0]}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>{w.name}</div>
                  <div style={{ fontSize: 11, color: THEME.muted }}>{w.time}</div>
                </div>
                <div style={{
                  padding: '4px 10px', borderRadius: 999,
                  background: 'rgba(53,208,127,0.18)',
                  color: THEME.green, fontSize: 13, fontWeight: 700,
                }}>{w.prize}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 20 }}/>
      </div>

      {/* Sticky CTA */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 20px 28px',
        background: 'linear-gradient(180deg, transparent, #050B1C 40%)',
      }}>
        <GoldButton full size="lg" onClick={onSpin} icon={<Icon name="sparkle" size={18} stroke={2.5}/>}>
          Girar por {tiers[sel].price}
        </GoldButton>
      </div>
    </NavyBg>
  );
};

// ─────────────────────────────────────────────
// WHEEL — animated spin
// ─────────────────────────────────────────────
const WheelScreen = ({ onBack, onComplete }) => {
  const [state, setState] = useS2('idle'); // idle | spinning | done
  const [angle, setAngle] = useS2(0);

  const slices = [
    { label: 'R$ 5', color: '#FFC83D', prize: 5 },
    { label: 'R$ 20', color: '#1B3178', prize: 20 },
    { label: 'R$ 0', color: '#FFC83D', prize: 0 },
    { label: 'R$ 100', color: '#1B3178', prize: 100 },
    { label: 'R$ 2', color: '#FFC83D', prize: 2 },
    { label: 'R$ 10', color: '#1B3178', prize: 10 },
    { label: 'R$ 0', color: '#FFC83D', prize: 0 },
    { label: 'R$ 50', color: '#1B3178', prize: 50 },
  ];
  const N = slices.length;
  const seg = 360 / N;

  const spin = () => {
    if (state !== 'idle') return;
    // Target slice 3 (R$ 100) — winning index
    const winIdx = 3;
    const extraTurns = 6;
    const target = 360 * extraTurns - (winIdx * seg + seg / 2);
    setAngle(target);
    setState('spinning');
    setTimeout(() => {
      setState('done');
      setTimeout(() => onComplete(slices[winIdx]), 1200);
    }, 4500);
  };

  useE2(() => { const t = setTimeout(spin, 500); return () => clearTimeout(t); }, []);

  return (
    <NavyBg variant="hero">
      <div style={{ padding: '58px 0 40px', minHeight: 810 }}>
        <div style={{ padding: '0 20px', marginBottom: 10 }}>
          <button onClick={onBack} style={atomBtn}><Icon name="close" size={18} color="#fff"/></button>
        </div>

        <div style={{
          textAlign: 'center', padding: '0 20px', marginBottom: 20,
        }}>
          <div style={{ fontSize: 11, color: THEME.gold, fontWeight: 700, letterSpacing: 2 }}>
            GIRANDO...
          </div>
          <div style={{
            fontFamily: '"Archivo Black"', fontSize: 28, color: '#fff',
            textTransform: 'uppercase', lineHeight: 1, marginTop: 6, fontStyle: 'italic',
          }}>
            Sextou em Dobro
          </div>
        </div>

        {/* Wheel */}
        <div style={{ position: 'relative', width: 340, height: 340, margin: '20px auto' }}>
          {/* glow */}
          <div style={{
            position: 'absolute', inset: -40, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,200,61,0.3), transparent 70%)',
            animation: state === 'spinning' ? 'pulse 0.8s infinite' : 'none',
          }}/>
          {/* pointer */}
          <div style={{
            position: 'absolute', left: '50%', top: -8,
            transform: 'translateX(-50%)', zIndex: 5,
            width: 0, height: 0,
            borderLeft: '14px solid transparent',
            borderRight: '14px solid transparent',
            borderTop: '22px solid #FFC83D',
            filter: 'drop-shadow(0 4px 8px rgba(255,200,61,0.5))',
          }}/>
          {/* wheel */}
          <svg width="340" height="340" viewBox="0 0 340 340" style={{
            transform: `rotate(${angle}deg)`,
            transition: state === 'spinning' ? 'transform 4.5s cubic-bezier(0.17, 0.67, 0.3, 1)' : 'none',
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
          }}>
            <circle cx="170" cy="170" r="165" fill="#E5A70E"/>
            <circle cx="170" cy="170" r="158" fill="#FFC83D"/>
            {slices.map((s, i) => {
              const a1 = (i * seg - 90) * Math.PI / 180;
              const a2 = ((i + 1) * seg - 90) * Math.PI / 180;
              const x1 = 170 + 155 * Math.cos(a1);
              const y1 = 170 + 155 * Math.sin(a1);
              const x2 = 170 + 155 * Math.cos(a2);
              const y2 = 170 + 155 * Math.sin(a2);
              const mid = (i * seg + seg / 2 - 90) * Math.PI / 180;
              const tx = 170 + 100 * Math.cos(mid);
              const ty = 170 + 100 * Math.sin(mid);
              return (
                <g key={i}>
                  <path d={`M170 170 L${x1} ${y1} A155 155 0 0 1 ${x2} ${y2} Z`} fill={s.color}/>
                  <text x={tx} y={ty}
                    transform={`rotate(${i * seg + seg / 2} ${tx} ${ty})`}
                    fill={s.color === '#FFC83D' ? '#08122A' : '#FFC83D'}
                    fontFamily='"Archivo Black"' fontSize="18"
                    textAnchor="middle" dominantBaseline="middle">
                    {s.label}
                  </text>
                </g>
              );
            })}
            {/* center hub */}
            <circle cx="170" cy="170" r="42" fill="#08122A" stroke="#FFC83D" strokeWidth="3"/>
            <circle cx="170" cy="170" r="32" fill="url(#hubGrad)"/>
            <defs>
              <radialGradient id="hubGrad">
                <stop offset="0%" stopColor="#FFF5CF"/>
                <stop offset="60%" stopColor="#FFC83D"/>
                <stop offset="100%" stopColor="#B8791C"/>
              </radialGradient>
            </defs>
            <text x="170" y="176" fontFamily='"Archivo Black"' fontSize="20"
              fill="#08122A" textAnchor="middle" fontStyle="italic">GS</text>
          </svg>
        </div>

        <div style={{ textAlign: 'center', marginTop: 30, padding: '0 40px' }}>
          <div style={{ fontSize: 13, color: THEME.muted, lineHeight: 1.5 }}>
            {state === 'spinning' && '🎰 Aguarde... a sorte está a caminho'}
            {state === 'done' && '✨ Revelando seu prêmio...'}
            {state === 'idle' && 'Preparando sua gorjeta...'}
          </div>
        </div>
      </div>
    </NavyBg>
  );
};

// ─────────────────────────────────────────────
// RESULT
// ─────────────────────────────────────────────
const ResultScreen = ({ prize, onContinue }) => {
  const won = prize.prize > 0;
  return (
    <NavyBg variant="hero">
      <div style={{ padding: '70px 24px 40px', minHeight: 810, display: 'flex', flexDirection: 'column' }}>
        {/* Confetti */}
        {won && (
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            {[...Array(24)].map((_, i) => {
              const colors = ['#FFC83D', '#FFF', '#35D07F', '#FF9F6B'];
              return (
                <div key={i} style={{
                  position: 'absolute',
                  left: `${(i * 41) % 100}%`, top: -20,
                  width: 8, height: 14, background: colors[i % 4],
                  animation: `confetti ${2 + (i % 3)}s linear infinite`,
                  animationDelay: `${(i % 5) * 0.2}s`,
                  transform: `rotate(${i * 30}deg)`,
                }}/>
              );
            })}
          </div>
        )}

        <div style={{ flex: 1 }}/>

        <div style={{ textAlign: 'center', position: 'relative' }}>
          {won && (
            <>
              <div style={{ fontSize: 13, color: THEME.gold, fontWeight: 700, letterSpacing: 3 }}>
                PARABÉNS!
              </div>
              <div style={{
                fontFamily: '"Archivo Black"', fontSize: 18, color: '#fff',
                textTransform: 'uppercase', marginTop: 6, fontStyle: 'italic',
              }}>Você ganhou</div>

              <div style={{ position: 'relative', margin: '30px 0', height: 180 }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(circle, rgba(255,200,61,0.35), transparent 60%)',
                  animation: 'pulse 2s infinite',
                }}/>
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                  <CoinGlyph size={60} rotate={-15}/>
                  <div style={{
                    fontFamily: '"Archivo Black"', fontSize: 72, color: THEME.gold,
                    fontStyle: 'italic', letterSpacing: -2, lineHeight: 1,
                    textShadow: '0 8px 30px rgba(255,200,61,0.5)',
                  }}>R${prize.prize}</div>
                  <CoinGlyph size={60} rotate={15}/>
                </div>
                <div style={{ fontSize: 14, color: THEME.muted, marginTop: 12 }}>
                  creditado na sua carteira
                </div>
              </div>

              <div style={{
                margin: '20px 0', padding: 16, borderRadius: 18,
                background: 'rgba(53,208,127,0.08)',
                border: '1px solid rgba(53,208,127,0.25)',
                textAlign: 'left',
              }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: 'rgba(53,208,127,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon name="trophy" size={22} color={THEME.green}/>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>
                      Transferência instantânea via PIX
                    </div>
                    <div style={{ fontSize: 11, color: THEME.muted, marginTop: 2 }}>
                      Disponível em até 60 segundos
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div style={{ flex: 1 }}/>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <GoldButton full size="lg" onClick={onContinue}>Ver carteira</GoldButton>
          <GhostButton full icon={<Icon name="share" size={16}/>}>Compartilhar vitória</GhostButton>
        </div>
      </div>
    </NavyBg>
  );
};

// ─────────────────────────────────────────────
// WALLET
// ─────────────────────────────────────────────
const WalletScreen = ({ balance }) => (
  <NavyBg variant="hero">
    <div style={{ padding: '64px 20px 120px' }}>
      <div style={{ fontSize: 13, color: THEME.muted, fontWeight: 600, letterSpacing: 1 }}>
        CARTEIRA
      </div>
      <div style={{
        fontFamily: '"Archivo Black"', fontSize: 32, color: '#fff',
        marginTop: 2, fontStyle: 'italic',
      }}>Meus ganhos</div>

      <div style={{
        marginTop: 20, padding: 22, borderRadius: 24,
        background: 'linear-gradient(135deg, #1B3178 0%, #0F1B3D 55%, #08122A 100%)',
        border: '1px solid rgba(255,200,61,0.25)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: -30, top: -20,
          opacity: 0.15,
        }}>
          <CoinGlyph size={160}/>
        </div>
        <div style={{ fontSize: 11, color: THEME.muted, letterSpacing: 1.2, fontWeight: 600 }}>
          SALDO DISPONÍVEL
        </div>
        <div style={{
          fontFamily: '"Archivo Black"', fontSize: 48, color: THEME.gold,
          fontStyle: 'italic', marginTop: 4, lineHeight: 1,
          textShadow: '0 4px 20px rgba(255,200,61,0.3)',
        }}>R$ 347,<span style={{ fontSize: 30 }}>50</span></div>
        <div style={{ fontSize: 12, color: THEME.muted, marginTop: 6 }}>
          +R$ 100 nos últimos 7 dias
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <GoldButton full size="sm" icon={<Icon name="arrowUp" size={14} stroke={2.5}/>}>Sacar PIX</GoldButton>
          <GhostButton full icon={<Icon name="plus" size={14}/>}>Adicionar</GhostButton>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 18 }}>
        {[
          { label: 'Sorteios', value: '47' },
          { label: 'Vitórias', value: '12' },
          { label: 'Streak', value: '🔥 3' },
        ].map(s => (
          <div key={s.label} style={{
            padding: 14, borderRadius: 14,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            textAlign: 'center',
          }}>
            <div style={{ fontFamily: '"Archivo Black"', fontSize: 22, color: '#fff' }}>{s.value}</div>
            <div style={{ fontSize: 11, color: THEME.muted, marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* History */}
      <div style={{ marginTop: 24 }}>
        <SectionHeader icon="clock" title="MOVIMENTOS"/>
        <div style={{
          borderRadius: 18, overflow: 'hidden',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {[
            { title: 'Sextou em Dobro', sub: 'há 2min', amt: '+R$ 100', up: true },
            { title: 'Gorjeta do Consolo', sub: '16 abr', amt: '−R$ 12', up: false, pill: 'Não ganhou' },
            { title: 'Live em Dobro', sub: '15 abr', amt: '+R$ 50', up: true },
            { title: 'Saque PIX', sub: '13 abr', amt: '−R$ 200', up: false, pill: 'Concluído' },
            { title: 'Super Sexta', sub: '10 abr', amt: '+R$ 20', up: true },
          ].map((r, i, arr) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '14px 16px',
              borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: r.up ? 'rgba(53,208,127,0.15)' : 'rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon name={r.up ? 'arrowDown' : 'arrowUp'} size={16}
                  color={r.up ? THEME.green : THEME.muted}
                  stroke={2.5}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>{r.title}</div>
                <div style={{ fontSize: 11, color: THEME.muted }}>
                  {r.sub}{r.pill ? ' · ' + r.pill : ''}
                </div>
              </div>
              <div style={{
                fontSize: 14, fontWeight: 700, fontVariantNumeric: 'tabular-nums',
                color: r.up ? THEME.green : 'rgba(255,255,255,0.7)',
              }}>{r.amt}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </NavyBg>
);

// ─────────────────────────────────────────────
// PROFILE
// ─────────────────────────────────────────────
const ProfileScreen = ({ user }) => (
  <NavyBg variant="hero">
    <div style={{ padding: '64px 20px 120px' }}>
      <div style={{
        textAlign: 'center', padding: '20px 0 24px',
      }}>
        <div style={{
          width: 86, height: 86, borderRadius: 43,
          background: 'linear-gradient(135deg, #FFC83D, #E5A70E)',
          margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: '"Archivo Black"', fontSize: 30, color: '#08122A',
          boxShadow: '0 10px 30px rgba(255,200,61,0.3)',
        }}>{user.initials}</div>
        <div style={{
          fontFamily: '"Archivo Black"', fontSize: 22, color: '#fff',
          marginTop: 14, fontStyle: 'italic',
        }}>{user.name}</div>
        <div style={{ fontSize: 13, color: THEME.muted, marginTop: 2 }}>
          Membro desde jan 2026 · Nível Ouro
        </div>

        {/* Tier badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          marginTop: 12, padding: '6px 14px', borderRadius: 999,
          background: 'linear-gradient(135deg, rgba(255,200,61,0.25), rgba(229,167,14,0.15))',
          border: '1px solid rgba(255,200,61,0.4)',
        }}>
          <Icon name="trophy" size={14} color={THEME.gold}/>
          <span style={{ fontSize: 12, color: THEME.gold, fontWeight: 700, letterSpacing: 0.5 }}>
            OURO · 1.850 XP
          </span>
        </div>
      </div>

      {/* XP bar */}
      <div style={{
        padding: 16, borderRadius: 18,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        marginBottom: 16,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: THEME.muted, marginBottom: 8 }}>
          <span>Próximo nível: Diamante</span>
          <span style={{ color: '#fff', fontWeight: 600 }}>1850 / 2500</span>
        </div>
        <div style={{
          height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.06)',
          overflow: 'hidden',
        }}>
          <div style={{
            width: '74%', height: '100%',
            background: 'linear-gradient(90deg, #FFC83D, #FFE082)',
            borderRadius: 4,
            boxShadow: '0 0 20px rgba(255,200,61,0.4)',
          }}/>
        </div>
      </div>

      {/* Menu */}
      <div style={{
        borderRadius: 18, overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        {[
          { icon: 'gift', label: 'Indicar amigos', sub: 'Ganhe R$ 10 por cabeça' },
          { icon: 'bell', label: 'Notificações', sub: 'Alertas de sorteio' },
          { icon: 'shield', label: 'Segurança & PIX' },
          { icon: 'copy', label: 'Meus dados' },
          { icon: 'sparkle', label: 'Jogo responsável' },
        ].map((m, i, arr) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '14px 16px', cursor: 'pointer',
            borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: 'rgba(255,200,61,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon name={m.icon} size={16} color={THEME.gold}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>{m.label}</div>
              {m.sub && <div style={{ fontSize: 11, color: THEME.muted, marginTop: 1 }}>{m.sub}</div>}
            </div>
            <Icon name="chevronR" size={16} color={THEME.muted2}/>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 24, fontSize: 11, color: THEME.muted2 }}>
        v1.2.0 · Jogue com responsabilidade · 18+
      </div>
    </div>
  </NavyBg>
);

// ─────────────────────────────────────────────
// BOTTOM NAV
// ─────────────────────────────────────────────
const BottomNav = ({ tab, onTab }) => {
  const items = [
    { id: 'home', icon: 'home', label: 'Início' },
    { id: 'raffles', icon: 'ticket', label: 'Sorteios' },
    { id: 'wallet', icon: 'wallet', label: 'Carteira' },
    { id: 'profile', icon: 'profile', label: 'Perfil' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 50,
      padding: '10px 10px 26px',
      background: 'linear-gradient(180deg, transparent, rgba(5,11,28,0.95) 30%)',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        padding: '8px 8px', borderRadius: 28,
        background: 'rgba(15,27,61,0.9)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
      }}>
        {items.map(it => {
          const active = tab === it.id;
          return (
            <button key={it.id} onClick={() => onTab(it.id)} style={{
              all: 'unset', cursor: 'pointer', flex: 1,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
              padding: '8px 0',
            }}>
              <div style={{
                padding: '6px 14px', borderRadius: 14,
                background: active ? 'rgba(255,200,61,0.15)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: active ? '1px solid rgba(255,200,61,0.3)' : '1px solid transparent',
              }}>
                <Icon name={it.icon} size={20} color={active ? THEME.gold : 'rgba(255,255,255,0.5)'} stroke={active ? 2.3 : 2}/>
              </div>
              <span style={{
                fontSize: 10, fontWeight: 600,
                color: active ? THEME.gold : 'rgba(255,255,255,0.5)',
              }}>{it.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

Object.assign(window, { RaffleDetail, WheelScreen, ResultScreen, WalletScreen, ProfileScreen, BottomNav });
