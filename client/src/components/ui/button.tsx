// client/src/components/ui/button.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost' | 'outline' | 'success' | 'danger'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const variants = {
  default: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20',
  ghost: 'bg-transparent text-slate-300 hover:bg-slate-800/80 hover:text-white',
  outline: 'border border-slate-700 bg-slate-900/50 text-slate-200 hover:bg-slate-800',
  success: 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-lg shadow-emerald-500/25',
  danger: 'bg-rose-500/15 border border-rose-500/70 text-rose-100 hover:bg-rose-500/25 shadow-lg shadow-rose-500/10',
}

const sizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-8 rounded-lg px-3 text-xs',
  lg: 'h-12 rounded-xl px-6 text-base',
  icon: 'h-10 w-10',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-bold uppercase tracking-wide transition active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'
