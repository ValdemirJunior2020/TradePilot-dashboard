// client/src/components/BadgeToast.tsx
import { motion } from 'framer-motion'
import { Trophy, X } from 'lucide-react'

const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.cos(i) * (40 + (i % 5) * 12),
  y: Math.sin(i * 1.7) * (28 + (i % 4) * 10),
  rotate: i * 28,
}))

export default function BadgeToast() {
  return (
    <motion.div initial={{ opacity: 0, y: -30, scale: .94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: .55, type: 'spring', stiffness: 140 }} className="pointer-events-none fixed right-4 top-4 z-50 sm:right-8 sm:top-7">
      <div className="relative">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute left-12 top-8 h-2 w-1 rounded-full bg-yellow-300"
            initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
            animate={{ opacity: [0, 1, 0], x: particle.x, y: particle.y, rotate: particle.rotate }}
            transition={{ duration: 1.6, delay: .75 + particle.id * .025, repeat: Infinity, repeatDelay: 2.5 }}
            style={{ backgroundColor: particle.id % 3 === 0 ? '#22c55e' : particle.id % 3 === 1 ? '#38bdf8' : '#facc15' }}
          />
        ))}
        <div className="glass-card flex w-[min(420px,calc(100vw-2rem))] items-center gap-4 rounded-2xl p-4 shadow-gold">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-emerald-300/40 bg-emerald-500/20 text-yellow-300 shadow-lg shadow-emerald-400/15">
            <Trophy className="h-7 w-7" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-black uppercase tracking-widest text-yellow-300">Badge Unlocked</p>
            <p className="truncate text-sm text-slate-200 sm:text-base">Managing emotions during it!</p>
          </div>
          <X className="h-5 w-5 text-slate-400" />
        </div>
      </div>
    </motion.div>
  )
}
