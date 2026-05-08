// client/src/components/Sidebar.tsx
import { BarChart3, Gauge, GraduationCap, Grid2X2, Lock, Settings, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const menu = [
  { label: 'Dashboard', icon: Grid2X2 },
  { label: 'Charts', icon: BarChart3, active: true },
  { label: 'Trade Hub', icon: Gauge },
  { label: 'Learn Center', icon: GraduationCap, locked: true, subtitle: '90% completed' },
  { label: 'Risk Tools', icon: ShieldCheck },
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex min-h-[calc(100vh-2rem)] w-[270px] shrink-0 flex-col rounded-[2rem] border border-cyan-400/15 bg-slate-950/75 p-4 shadow-glow backdrop-blur-xl xl:w-[292px]">
      <div className="mb-10 flex items-center gap-3 px-4 pt-4">
        <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-300/25">
          <div className="absolute h-16 w-8 -rotate-45 bg-teal-400/80 blur-[1px]" />
          <div className="absolute right-2 top-2 h-5 w-5 rounded-full bg-cyan-300" />
        </div>
        <div>
          <p className="text-xl font-black uppercase leading-5 tracking-[0.16em] text-white">Trade</p>
          <p className="text-xl font-black uppercase leading-5 tracking-[0.16em] text-white">Pilot</p>
        </div>
      </div>

      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon
          return (
            <motion.button
              key={item.label}
              whileHover={{ x: 5 }}
              className={cn(
                'group flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition',
                item.active
                  ? 'border border-cyan-400/20 bg-cyan-400/15 text-white shadow-lg shadow-cyan-400/10'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-100',
              )}
            >
              <Icon className={cn('h-6 w-6', item.active ? 'text-cyan-300' : 'text-slate-500 group-hover:text-cyan-300')} />
              <span className="flex-1">
                <span className="block text-sm font-black uppercase tracking-widest">{item.label}</span>
                {item.subtitle && <span className="mt-0.5 block text-sm font-medium normal-case tracking-normal text-slate-400">{item.subtitle}</span>}
              </span>
              {item.locked && <Lock className="h-4 w-4 text-slate-500" />}
            </motion.button>
          )
        })}
      </nav>

      <div className="mt-auto space-y-4">
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,.22),transparent_45%)]" />
          <div className="relative text-center">
            <div className="mb-3 text-4xl">🎉</div>
            <p className="text-sm font-black uppercase tracking-wider text-yellow-300">Badge Unlocked</p>
          </div>
        </motion.div>

        <button className="flex w-full items-center gap-4 border-t border-slate-800 px-4 py-5 text-left text-slate-400 transition hover:text-white">
          <Settings className="h-6 w-6" />
          <span className="text-sm font-black uppercase tracking-widest">Profile/Settings</span>
        </button>
      </div>
    </aside>
  )
}
