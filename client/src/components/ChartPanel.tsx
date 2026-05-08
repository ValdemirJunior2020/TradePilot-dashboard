// client/src/components/ChartPanel.tsx
import { useEffect, useRef } from 'react'
import { createChart, ColorType, CandlestickSeries, HistogramSeries } from 'lightweight-charts'
import { ChevronDown, Crosshair, Maximize2, Search, Settings2, ShieldAlert, Sparkles, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const candleData = [
  { time: '2024-01-01', open: 182, high: 191, low: 175, close: 188 },
  { time: '2024-01-02', open: 188, high: 196, low: 181, close: 184 },
  { time: '2024-01-03', open: 184, high: 187, low: 172, close: 176 },
  { time: '2024-01-04', open: 176, high: 181, low: 169, close: 174 },
  { time: '2024-01-05', open: 174, high: 183, low: 171, close: 180 },
  { time: '2024-02-01', open: 180, high: 194, low: 178, close: 190 },
  { time: '2024-02-02', open: 190, high: 202, low: 184, close: 197 },
  { time: '2024-02-03', open: 197, high: 208, low: 194, close: 206 },
  { time: '2024-02-04', open: 206, high: 216, low: 201, close: 214 },
  { time: '2024-02-05', open: 214, high: 226, low: 211, close: 222 },
  { time: '2024-03-01', open: 222, high: 238, low: 218, close: 234 },
  { time: '2024-03-02', open: 234, high: 246, low: 226, close: 228 },
  { time: '2024-03-03', open: 228, high: 239, low: 219, close: 236 },
  { time: '2024-03-04', open: 236, high: 254, low: 231, close: 249 },
  { time: '2024-03-05', open: 249, high: 263, low: 232, close: 241 },
  { time: '2024-04-01', open: 241, high: 255, low: 224, close: 230 },
  { time: '2024-04-02', open: 230, high: 244, low: 221, close: 238 },
  { time: '2024-04-03', open: 238, high: 251, low: 230, close: 247 },
  { time: '2024-04-04', open: 247, high: 258, low: 238, close: 242 },
  { time: '2024-04-05', open: 242, high: 254, low: 236, close: 250 },
  { time: '2024-05-01', open: 250, high: 266, low: 244, close: 260 },
] as const

const volumeData = candleData.map((item, index) => ({
  time: item.time,
  value: 10 + index * 1.5,
  color: item.close >= item.open ? 'rgba(16, 185, 129, .25)' : 'rgba(244, 63, 94, .25)',
}))

export default function ChartPanel() {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = createChart(chartRef.current, {
      autoSize: true,
      height: 560,
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#94a3b8',
      },
      grid: {
        vertLines: { color: 'rgba(148, 163, 184, .09)' },
        horzLines: { color: 'rgba(148, 163, 184, .09)' },
      },
      rightPriceScale: { borderColor: 'rgba(148, 163, 184, .12)' },
      timeScale: { borderColor: 'rgba(148, 163, 184, .12)', timeVisible: true },
      crosshair: { mode: 1 },
    })

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#14b8a6',
      downColor: '#ef4444',
      borderVisible: false,
      wickUpColor: '#14b8a6',
      wickDownColor: '#ef4444',
    })
    candleSeries.setData([...candleData])

    const volumeSeries = chart.addSeries(HistogramSeries, {
      priceFormat: { type: 'volume' },
      priceScaleId: '',
    })
    volumeSeries.priceScale().applyOptions({ scaleMargins: { top: 0.78, bottom: 0 } })
    volumeSeries.setData(volumeData)
    chart.timeScale().fitContent()

    const resize = () => chart.applyOptions({ height: chartRef.current?.clientHeight || 560 })
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      chart.remove()
    }
  }, [])

  return (
    <Card className="relative min-h-[720px] overflow-hidden border-cyan-300/10 bg-slate-950/85 shadow-glow">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/80 p-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex h-10 min-w-[170px] items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/85 px-3 text-sm font-bold text-slate-200">
            <Search className="h-4 w-4 text-slate-500" />
            TSLA
          </div>
          <Button variant="outline" size="sm">Compare</Button>
          <Button variant="ghost" size="icon"><Crosshair className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon"><Settings2 className="h-4 w-4" /></Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">English</Button>
          <Button variant="ghost" size="icon"><Maximize2 className="h-4 w-4" /></Button>
        </div>
      </div>

      <div className="relative h-[590px] subtle-grid">
        <div className="absolute left-4 top-3 z-20 flex flex-wrap items-center gap-2 rounded-xl bg-slate-950/60 px-3 py-2 backdrop-blur-sm">
          <span className="font-bold text-slate-200">TSLA (Tesla, Inc.)</span>
          <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-black text-emerald-300">● LIVE</span>
          <span className="text-sm font-semibold text-emerald-400">O 318.00 H 134.70 C 133.10 −17.87 (−0.83%)</span>
        </div>

        <div ref={chartRef} className="absolute inset-0 z-10" />

        <svg className="pointer-events-none absolute inset-0 z-20 h-full w-full" viewBox="0 0 1000 590" preserveAspectRatio="none">
          <line x1="66" y1="385" x2="933" y2="385" stroke="#22c55e" strokeWidth="3" opacity=".9" />
          <rect x="66" y="365" width="867" height="26" fill="rgba(34,197,94,.13)" stroke="#22c55e" strokeWidth="2" />
          <line x1="420" y1="300" x2="690" y2="210" stroke="#facc15" strokeWidth="2.5" />
          <line x1="455" y1="365" x2="690" y2="280" stroke="#facc15" strokeWidth="2.5" />
          <line x1="690" y1="210" x2="690" y2="280" stroke="#facc15" strokeWidth="1.3" opacity=".35" />
          <path d="M750 220 L835 95 L800 110 L835 95 L820 133" fill="none" stroke="#eab308" strokeWidth="8" opacity=".72" />
          <line x1="66" y1="325" x2="933" y2="325" stroke="#ef4444" strokeWidth="3" opacity=".75" />
        </svg>

        <motion.div className="absolute left-[8%] top-[31%] z-30 max-w-[320px] rounded-xl border border-emerald-400/50 bg-emerald-950/45 p-4 text-sm shadow-lg shadow-emerald-500/10 backdrop-blur-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="mb-1 font-black uppercase tracking-wide text-emerald-100">Support Level - explained</p>
          <p className="leading-relaxed text-emerald-50/85">Simple text in semi-transparent product annotation.</p>
          <div className="absolute -bottom-5 left-28 h-5 w-5 border-l border-emerald-400/50 bg-emerald-950/45 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
        </motion.div>

        <motion.div className="absolute bottom-[24%] right-[9%] z-30 max-w-[300px] rounded-xl border border-rose-400/60 bg-rose-950/50 p-4 shadow-danger backdrop-blur-md" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 }}>
          <div className="mb-2 flex items-center gap-2 text-rose-100"><ShieldAlert className="h-4 w-4" /><p className="font-black uppercase tracking-wide">Risk Management Zone</p></div>
          <p className="text-sm leading-relaxed text-rose-50/80">Tool tip on hover for conservative position sizing.</p>
        </motion.div>

        <motion.div className="absolute right-[17%] top-[18%] z-30 rounded-xl border border-yellow-400/60 bg-yellow-950/45 px-4 py-3 shadow-gold backdrop-blur-md" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .25 }}>
          <div className="flex items-center gap-2 text-yellow-100"><TrendingUp className="h-4 w-4" /><span className="font-black uppercase tracking-wide">Potential Breakout - analysis</span></div>
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 bg-slate-950/80 px-4 py-3">
        <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-400">
          {['1D', '5D', '1M', '3M', '6M', 'YTD', '1Y', 'All'].map((time) => <button key={time} className="rounded-lg px-2 py-1 hover:bg-slate-800 hover:text-white">{time}</button>)}
          <button className="flex items-center gap-1 rounded-lg px-2 py-1 hover:bg-slate-800 hover:text-white">Stack Scanners <ChevronDown className="h-3 w-3" /></button>
        </div>
        <div className="text-xs font-semibold text-slate-400">12:13:36 (UTC-19) / % log auto</div>
      </div>

      <motion.div className="absolute bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-xl bg-rose-500 px-5 py-2 text-center text-sm font-black uppercase tracking-widest text-white shadow-danger" animate={{ boxShadow: ['0 0 12px rgba(244,63,94,.35)', '0 0 32px rgba(244,63,94,.75)', '0 0 12px rgba(244,63,94,.35)'] }} transition={{ duration: 2, repeat: Infinity }}>
        <Sparkles className="h-4 w-4" /> Simulated Trading - Fake Money Only
      </motion.div>
    </Card>
  )
}
