// Private site analytics via GoatCounter (https://www.goatcounter.com).
// Pageviews, country, referrer, browser, OS, device and screen size are collected by GoatCounter itself.
// This file adds engagement events: active reading time, scroll depth, outbound clicks, resume downloads.
// The dashboard lives at https://<GOATCOUNTER_CODE>.goatcounter.com and is only visible to you when you
// leave "Allow adding visitors/public view" off (the default). Nothing happens until the code is set.

const GOATCOUNTER_CODE = 'levon' // e.g. 'levon' -> https://levon.goatcounter.com

type GC = { count: (v: { path: string; title?: string; event?: boolean; referrer?: string }) => void }
const gc = (): GC | undefined => (window as unknown as { goatcounter?: GC }).goatcounter

function event(path: string, title: string) {
  gc()?.count({ path, title, event: true })
}

const TIME_BUCKETS = [5, 15, 30, 60, 120, 300, 600]
const SCROLL_STEPS = [25, 50, 75, 100]

let current = ''
let activeMs = 0
let lastTick = 0
let maxScroll = 0
const sentScroll = new Set<number>()

function slug(p: string) {
  return p === '/' ? 'home' : p.replace(/^\/|\/$/g, '')
}

function tick() {
  const now = Date.now()
  if (lastTick && document.visibilityState === 'visible') activeMs += Math.min(now - lastTick, 5000)
  lastTick = document.visibilityState === 'visible' ? now : 0
}

function updateScroll() {
  const el = document.documentElement
  const max = el.scrollHeight - window.innerHeight
  const pct = max <= 0 ? 100 : Math.min(100, ((window.scrollY / max) * 100))
  maxScroll = Math.max(maxScroll, pct)
  for (const s of SCROLL_STEPS) {
    if (maxScroll >= s && !sentScroll.has(s)) {
      sentScroll.add(s)
      event(`scroll/${slug(current)}/${s}`, `Scroll ${s}% on ${current}`)
    }
  }
}

function flush() {
  if (!current) return
  tick()
  const secs = Math.round(activeMs / 1000)
  if (secs >= 1) {
    const upper = TIME_BUCKETS.find((b) => secs <= b)
    const label = upper ? `<=${upper}s` : `>${TIME_BUCKETS[TIME_BUCKETS.length - 1]}s`
    event(`time/${slug(current)}/${label}`, `Time on ${current}: ${label}`)
  }
  current = ''
}

/** Call on every route change. */
export function trackPage(path: string) {
  if (!GOATCOUNTER_CODE) return
  flush()
  current = path
  activeMs = 0
  lastTick = Date.now()
  maxScroll = 0
  sentScroll.clear()
  gc()?.count({ path, title: document.title })
  setTimeout(updateScroll, 300)
}

export function initAnalytics() {
  if (!GOATCOUNTER_CODE) return
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return // don't count dev traffic

  const s = document.createElement('script')
  s.async = true
  s.src = 'https://gc.zgo.at/count.js'
  s.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`
  s.dataset.goatcounterSettings = JSON.stringify({ no_onload: true })
  s.onload = () => trackPage(location.pathname)
  document.head.appendChild(s)

  setInterval(tick, 1000)
  window.addEventListener('scroll', updateScroll, { passive: true })
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flush()
    else if (!current) { current = location.pathname; activeMs = 0 }
    lastTick = Date.now()
  })
  window.addEventListener('pagehide', flush)

  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest?.('a')
    if (!a) return
    const href = a.getAttribute('href') || ''
    if (/^https?:/.test(href) && new URL(href).host !== location.host) {
      event(`click/${new URL(href).host}`, `Outbound: ${href}`)
    } else if (href.startsWith('mailto:')) {
      event('click/email', 'Email click')
    } else if (/\.pdf$/i.test(href)) {
      event(`click/${href.split('/').pop()}`, `Download: ${href}`)
    }
  })
}
