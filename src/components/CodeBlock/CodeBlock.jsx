import { useState } from 'react';

const ktCode = (
  <pre style={{
    margin: 0, padding: '22px 24px', fontFamily: 'var(--font-mono)',
    fontSize: 13, lineHeight: 1.75, overflowX: 'auto', color: 'var(--code-text)',
  }}>
    <span style={{ color: 'var(--code-comment)' }}>{'// Android · Kotlin · Coroutines + Flow'}</span>{'\n'}
    <span style={{ color: 'var(--code-keyword)' }}>class</span>{' '}
    <span style={{ color: 'var(--primary)' }}>FeedViewModel</span>
    {'('}<span style={{ color: 'var(--code-keyword)' }}>private val</span>{' repo: FeedRepository) : ViewModel() {'}{'\n'}
    {'\n'}
    {'    '}<span style={{ color: 'var(--code-keyword)' }}>private val</span>{' _state = MutableStateFlow(FeedState.Loading)'}{'\n'}
    {'    '}<span style={{ color: 'var(--code-keyword)' }}>val</span>{' state: StateFlow<FeedState> = _state.asStateFlow()'}{'\n'}
    {'\n'}
    {'    '}<span style={{ color: 'var(--code-keyword)' }}>fun</span>{' '}
    <span style={{ color: 'var(--cyan)' }}>refresh</span>{'() = viewModelScope.'}
    <span style={{ color: 'var(--cyan)' }}>launch</span>{' {'}{'\n'}
    {'        _state.value = '}<span style={{ color: 'var(--code-keyword)' }}>runCatching</span>{' { repo.'}
    <span style={{ color: 'var(--cyan)' }}>feed</span>{'() }'}{'\n'}
    {'            .fold(::FeedState.Ready, ::FeedState.Error)'}{'\n'}
    {'    }'}{'\n'}
    {'}'}
  </pre>
);

const javaCode = (
  <pre style={{
    margin: 0, padding: '22px 24px', fontFamily: 'var(--font-mono)',
    fontSize: 13, lineHeight: 1.75, overflowX: 'auto', color: 'var(--code-text)',
  }}>
    <span style={{ color: 'var(--code-comment)' }}>{'// Backend · Java 17 · Spring Boot 3'}</span>{'\n'}
    <span style={{ color: 'var(--blue)' }}>@RestController</span>{'\n'}
    <span style={{ color: 'var(--blue)' }}>@RequestMapping</span>{'('}
    <span style={{ color: 'var(--primary)' }}>"/api/v1/feed"</span>{')'}{'\n'}
    <span style={{ color: 'var(--code-keyword)' }}>class</span>{' '}
    <span style={{ color: 'var(--cyan)' }}>FeedController</span>
    {'('}<span style={{ color: 'var(--code-keyword)' }}>private final</span>{' FeedService service) {'}{'\n'}
    {'\n'}
    {'    '}<span style={{ color: 'var(--blue)' }}>@GetMapping</span>{'\n'}
    {'    '}<span style={{ color: 'var(--blue)' }}>@PreAuthorize</span>{'('}
    <span style={{ color: 'var(--primary)' }}>"hasRole('USER')"</span>{')'}{'\n'}
    {'    '}<span style={{ color: 'var(--code-keyword)' }}>public</span>{' Page<FeedItem> '}
    <span style={{ color: 'var(--cyan)' }}>feed</span>{'(Pageable page) {'}{'\n'}
    {'        '}<span style={{ color: 'var(--code-keyword)' }}>return</span>{' service.'}
    <span style={{ color: 'var(--cyan)' }}>cachedFeed</span>{'(page); '}
    <span style={{ color: 'var(--code-comment)' }}>{'// Redis-backed'}</span>{'\n'}
    {'    }'}{'\n'}
    {'}'}
  </pre>
);

const CodeBlock = () => {
  const [tab, setTab] = useState('kt');
  const isKt = tab === 'kt';

  return (
    <section style={{ marginBottom: 120 }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 12,
        color: 'var(--primary)', letterSpacing: '0.12em', marginBottom: 14,
      }}>{"// 03 — show, don't tell"}</div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(28px, 3.6vw, 44px)', letterSpacing: '-0.025em',
        margin: '0 0 28px', lineHeight: 1.05,
      }}>Same feature, both sides.</h2>

      <div style={{
        background: 'var(--code-bg)', border: '1px solid var(--border)',
        borderRadius: 14, overflow: 'hidden',
        boxShadow: `0 24px 60px rgba(0,0,0,var(--shadow-alpha))`,
        transition: 'background .3s, border-color .3s',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 7,
          padding: '11px 15px', borderBottom: '1px solid var(--border)',
          background: 'var(--surface2)',
        }} className="codeblock-header">
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'var(--dot-red)' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'var(--dot-yellow)' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'var(--dot-green)' }} />
          <div style={{ display: 'flex', gap: 4, marginLeft: 14 }} className="codeblock-tabs">
            <button
              onClick={() => setTab('kt')}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                padding: '6px 13px', borderRadius: '7px 7px 0 0',
                border: 'none', cursor: 'pointer',
                background: isKt ? 'var(--surface)' : 'transparent',
                color: isKt ? 'var(--primary)' : 'var(--muted)',
              }}
            >FeedViewModel.kt</button>
            <button
              onClick={() => setTab('java')}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                padding: '6px 13px', borderRadius: '7px 7px 0 0',
                border: 'none', cursor: 'pointer',
                background: !isKt ? 'var(--surface)' : 'transparent',
                color: !isKt ? 'var(--blue)' : 'var(--muted)',
              }}
            >FeedController.java</button>
          </div>
        </div>
        {isKt ? ktCode : javaCode}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .codeblock-header { flex-wrap: wrap; gap: 6px !important; }
          .codeblock-tabs { margin-left: 0 !important; width: 100%; }
          .codeblock-tabs button { flex: 1; text-align: center; font-size: 11px !important; }
        }
      `}</style>
    </section>
  );
};

export default CodeBlock;
