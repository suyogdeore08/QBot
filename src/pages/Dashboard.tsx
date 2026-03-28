import React from 'react';
import { motion } from 'motion/react';
import { Rocket, CheckCircle2, AlertTriangle, TrendingUp, ExternalLink, Sparkles, Bot, Database, Plus, Settings } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Experiment, Shard, Screen } from '../types';
import { cn } from '../lib/utils';

const experiments: Experiment[] = [
  { id: '#EX-9042', name: 'Semantic Logic Core V4', suite: 'Regression Suite A', status: 'success', duration: '142ms', date: 'Oct 24, 2023' },
  { id: '#EX-9041', name: 'Neural Synapse Mapping', suite: 'Memory Leak Detection', status: 'failed', duration: '2.1s', date: 'Oct 23, 2023' },
  { id: '#EX-9039', name: 'Contextual Awareness Test', suite: 'Edge Case Analysis', status: 'in-progress', duration: '--', date: 'Oct 22, 2023' },
];

const shards: Shard[] = [
  { name: 'Node-Alpha-7', load: 98, type: 'alpha' },
  { name: 'Node-Omega-1', load: 42, type: 'omega' },
];

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="space-y-10">
      {/* Hero Header */}
      <section className="relative overflow-hidden rounded-xl p-10 glass-panel min-h-[240px] flex flex-col justify-end border border-white/5">
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-40 mix-blend-screen pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent" />
          <img 
            src="https://picsum.photos/seed/abstract/1200/400" 
            alt="AI Network" 
            className="w-full h-full object-cover grayscale opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-headline text-5xl font-extrabold text-on-surface tracking-tighter mb-4 leading-tight">
            Welcome back to <span className="text-primary italic">QBot.</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">System latency is currently 14ms. All neural shards are synced and ready for deployment.</p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="group relative overflow-hidden transition-all hover:translate-y-[-4px]">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors" />
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Rocket className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-primary flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> 12%
            </span>
          </div>
          <p className="text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-1">Total Tests Run</p>
          <h3 className="font-headline text-4xl font-bold text-on-surface">1,284</h3>
          <div className="mt-4 h-1 w-full bg-surface-high rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '66%' }}
              className="h-full bg-primary rounded-full" 
            />
          </div>
        </GlassCard>

        <GlassCard className="group relative overflow-hidden transition-all hover:translate-y-[-4px]">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-tertiary/10 blur-3xl rounded-full group-hover:bg-tertiary/20 transition-colors" />
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-xl bg-tertiary/10 text-tertiary">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-tertiary flex items-center gap-1">
              Stable
            </span>
          </div>
          <p className="text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-1">Passed Tests</p>
          <h3 className="font-headline text-4xl font-bold text-on-surface">1,242</h3>
          <div className="mt-4 h-1 w-full bg-surface-high rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '96%' }}
              className="h-full bg-tertiary rounded-full" 
            />
          </div>
        </GlassCard>

        <GlassCard className="group relative overflow-hidden transition-all hover:translate-y-[-4px]">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-error/10 blur-3xl rounded-full group-hover:bg-error/20 transition-colors" />
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-xl bg-error/10 text-error">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-error flex items-center gap-1">
              -4% Reduced
            </span>
          </div>
          <p className="text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-1">Failed Tests</p>
          <h3 className="font-headline text-4xl font-bold text-on-surface">42</h3>
          <div className="mt-4 h-1 w-full bg-surface-high rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '4%' }}
              className="h-full bg-error rounded-full" 
            />
          </div>
        </GlassCard>
      </section>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Recent Activity */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h4 className="font-headline text-2xl font-bold">Recent Intelligence Shards</h4>
              <p className="text-on-surface-variant text-sm">Real-time stream of experimental outcomes</p>
            </div>
            <button 
              onClick={() => onNavigate('results')}
              className="text-primary text-xs font-bold hover:underline"
            >
              View All History
            </button>
          </div>
          
          <GlassCard className="p-2 overflow-hidden">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-[10px] text-on-surface-variant tracking-widest uppercase font-bold">
                  <th className="py-4 pl-6">Experiment ID</th>
                  <th className="py-4">Module Name</th>
                  <th className="py-4">Status</th>
                  <th className="py-4">Duration</th>
                  <th className="py-4 pr-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {experiments.map((exp) => (
                  <tr key={exp.id} className="bg-surface-container/30 hover:bg-surface-container/60 transition-colors rounded-xl group">
                    <td className="py-5 pl-6 font-mono text-xs text-primary font-bold">{exp.id}</td>
                    <td className="py-5">
                      <p className="text-sm font-semibold">{exp.name}</p>
                      <p className="text-[10px] text-on-surface-variant opacity-60">{exp.suite}</p>
                    </td>
                    <td className="py-5">
                      <div className={cn(
                        "inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-bold",
                        exp.status === 'success' && "bg-tertiary/10 text-tertiary",
                        exp.status === 'failed' && "bg-error/10 text-error",
                        exp.status === 'in-progress' && "bg-secondary/10 text-secondary"
                      )}>
                        <span className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          exp.status === 'success' && "bg-tertiary shadow-[0_0_8px_#a1faff]",
                          exp.status === 'failed' && "bg-error shadow-[0_0_8px_#ff716c]",
                          exp.status === 'in-progress' && "bg-secondary shadow-[0_0_8px_#c180ff]"
                        )} />
                        {exp.status.toUpperCase().replace('-', ' ')}
                      </div>
                    </td>
                    <td className="py-5 text-sm text-on-surface-variant">{exp.duration}</td>
                    <td className="py-5 pr-6 text-right">
                      <button 
                        onClick={() => onNavigate('results')}
                        className="p-2 rounded-lg hover:bg-surface-variant transition-colors text-on-surface-variant group-hover:text-primary"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
        </div>

        {/* Sidebar Insights */}
        <div className="lg:col-span-4 space-y-6">
          <h4 className="font-headline text-2xl font-bold">System Insights</h4>
          
          <GlassCard className="relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-secondary w-4 h-4" />
                <span className="text-xs font-bold tracking-[0.2em] text-on-surface uppercase opacity-80">AI Suggestion</span>
              </div>
              <h5 className="text-lg font-bold mb-3 leading-tight">Optimization Identified</h5>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">Your recent "Recursive Feedback" tests show a 12% increase in latency. Consider adjusting the shard distribution on Tier-2 nodes.</p>
              <button 
                onClick={() => onNavigate('generator')}
                className="text-primary text-xs font-bold flex items-center gap-2 group"
              >
                Apply Auto-Optimization
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <TrendingUp className="w-4 h-4" />
                </motion.span>
              </button>
            </div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-secondary/10 blur-[60px] rounded-full" />
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between mb-6">
              <h5 className="font-bold">Active Shards</h5>
              <Settings className="w-4 h-4 text-on-surface-variant" />
            </div>
            <div className="space-y-4">
              {shards.map((shard) => (
                <div key={shard.name} className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    shard.type === 'alpha' ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                  )}>
                    {shard.type === 'alpha' ? <Bot className="w-5 h-5" /> : <Database className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-xs font-bold">{shard.name}</p>
                      <p className={cn("text-[10px]", shard.load > 90 ? "text-error" : "text-primary")}>{shard.load}% Load</p>
                    </div>
                    <div className="h-1 w-full bg-surface-high rounded-full overflow-hidden">
                      <div 
                        className={cn("h-full transition-all duration-1000", shard.load > 90 ? "bg-error" : "bg-primary")} 
                        style={{ width: `${shard.load}%` }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Mobile FAB */}
      <button 
        onClick={() => onNavigate('generator')}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary-container shadow-2xl shadow-primary/40 flex items-center justify-center md:hidden z-50"
      >
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}

