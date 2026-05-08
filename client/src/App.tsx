// client/src/App.tsx
import { Menu, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import TopHeader from '@/components/TopHeader'
import ChartPanel from '@/components/ChartPanel'
import RightSidebar from '@/components/RightSidebar'
import BadgeToast from '@/components/BadgeToast'
import { Button } from '@/components/ui/button'

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 bg-radial-trade p-3 text-slate-100 sm:p-4">
      <BadgeToast />
      <div className="mx-auto flex max-w-[1800px] gap-4">
        <Sidebar />
        <section className="min-w-0 flex-1 space-y-4">
          <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-3 backdrop-blur-md lg:hidden">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/15 text-cyan-300"><ShieldCheck className="h-5 w-5" /></div>
              <div>
                <p className="font-black uppercase tracking-widest text-white">TradePilot</p>
                <p className="text-xs text-slate-400">Charts active</p>
              </div>
            </div>
            <Button variant="outline" size="icon"><Menu className="h-5 w-5" /></Button>
          </div>

          <TopHeader />

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
              <ChartPanel />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55, delay: .12 }}>
              <RightSidebar />
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
}
