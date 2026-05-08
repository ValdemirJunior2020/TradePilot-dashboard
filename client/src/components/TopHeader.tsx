// client/src/components/TopHeader.tsx
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export default function TopHeader() {
  return (
    <header className="grid gap-4 md:grid-cols-3">
      <Card className="overflow-hidden bg-cyan-500/10 p-5 shadow-glow">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-lg font-black uppercase tracking-wider text-white">Level 15</p>
          <p className="text-sm font-bold text-slate-400">80% to LEVEL 16</p>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-950/80 ring-1 ring-slate-700/80">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300" initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 1.2, ease: 'easeOut' }} />
        </div>
      </Card>

      <Card className="border-yellow-400/20 bg-yellow-500/10 p-5 shadow-gold">
        <p className="mb-4 text-lg font-black uppercase tracking-wider text-white">7-Day Streak 🔥</p>
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4].map((item) => (
            <motion.div key={item} className={`h-3 flex-1 rounded-full ${item < 3 ? 'bg-yellow-400' : 'bg-slate-700'}`} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: item * 0.1 }} />
          ))}
        </div>
      </Card>

      <Card className="border-emerald-400/20 bg-emerald-500/10 p-5 text-center shadow-lg shadow-emerald-500/10">
        <p className="text-2xl font-black tracking-[0.15em] text-white">$25,000</p>
        <p className="mt-1 text-sm font-bold uppercase tracking-widest text-emerald-100/70">Paper Balance</p>
      </Card>
    </header>
  )
}
