// client/src/components/RightSidebar.tsx
import { ChevronRight, Lock, ShieldCheck, Trophy, WalletCards } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function BadgeCircle({ icon, title, className }: { icon: React.ReactNode; title: string; className: string }) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.03 }} className="flex flex-col items-center gap-2 text-center">
      <div className={`grid h-16 w-16 place-items-center rounded-full border-4 shadow-lg ${className}`}>{icon}</div>
      <p className="text-xs font-black uppercase leading-4 tracking-wide text-slate-200">{title}</p>
    </motion.div>
  )
}

export default function RightSidebar() {
  return (
    <aside className="grid gap-4 xl:w-[330px] xl:shrink-0">
      <div>
        <h2 className="mb-4 text-xl font-black uppercase tracking-wider text-white">Paper Trading Hub</h2>
        <Card className="bg-slate-900/60">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle>Recent Achievements</CardTitle>
            <ChevronRight className="h-5 w-5 text-slate-500" />
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-3">
            <BadgeCircle icon={<ShieldCheck className="h-7 w-7 text-yellow-200" />} title="Risk Master" className="border-blue-400/40 bg-blue-500/20 text-blue-200 shadow-blue-500/20" />
            <BadgeCircle icon={<WalletCards className="h-7 w-7 text-emerald-200" />} title="First Profit" className="border-emerald-400/45 bg-emerald-500/20 text-emerald-100 shadow-emerald-500/20" />
            <BadgeCircle icon={<span className="text-xl font-black text-yellow-200">100</span>} title="100 Trades" className="border-yellow-400/60 bg-yellow-500/20 shadow-yellow-500/25" />
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-900/60">
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle>Trade Journal</CardTitle>
          <ChevronRight className="h-5 w-5 text-slate-500" />
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-base font-black text-white">Managing emotions during TSLA trade</p>
          <p className="line-clamp-3 text-sm leading-6 text-slate-400">Managing emotions during TSLA trade toward a cleaner entry, less revenge trading, and better risk control.</p>
          <button className="mt-4 text-sm font-bold text-cyan-400 hover:text-cyan-300">Read more⌄</button>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden border-yellow-500/20 bg-slate-900/60">
        <CardHeader>
          <CardTitle>Place Fake Order</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="success" size="lg" className="w-full text-lg">BUY</Button>
          <Button variant="danger" size="lg" className="w-full text-lg">SHORT <Lock className="ml-2 h-5 w-5 text-rose-200/80" /></Button>
        </CardContent>
        <div className="bg-yellow-500/20 px-4 py-3 text-center text-xs font-black uppercase tracking-widest text-yellow-100">Simulated Trading - Fake Money Only</div>
      </Card>

      <Card className="overflow-hidden bg-slate-900/60">
        <CardContent className="p-5">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/15 text-2xl">🎯</div>
            <div>
              <p className="text-sm font-black uppercase tracking-wider text-white">Next Mission</p>
              <p className="text-sm text-slate-400">Journal 3 trades with emotion notes.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
