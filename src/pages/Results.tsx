import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ChevronDown, ChevronUp, CheckCircle2, XCircle, Clock, ExternalLink, FileText, Play, Bug, BarChart3, PieChart } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Screen } from '../types';
import { cn } from '../lib/utils';

const results = [
  {
    id: 'TR-4021',
    name: 'Latency Optimization Alpha',
    suite: 'Performance Suite',
    status: 'success',
    runtime: '1.2s',
    date: 'Oct 28, 2023',
    coverage: '94%',
    logs: [
      'Started execution at 10:42:01',
      'Establishing connection to Node-Alpha-7',
      'Running latency benchmarks...',
      'Optimization threshold met: 14ms',
      'Test completed successfully.'
    ]
  },
  {
    id: 'TR-4020',
    name: 'Neural Divergence Check',
    suite: 'Stability Core',
    status: 'failed',
    runtime: '4.5s',
    date: 'Oct 28, 2023',
    coverage: '82%',
    error: 'Neural mismatch detected at Layer 4. Expected 0.98, received 0.42.',
    logs: [
      'Started execution at 10:38:14',
      'Initializing synaptic mapping...',
      'Error: Divergence detected at Node-Omega-1',
      'Stack trace: Layer4.synapse.map() failed',
      'Test aborted.'
    ]
  },
  {
    id: 'TR-4019',
    name: 'Contextual Awareness Test',
    suite: 'NLP Engine',
    status: 'success',
    runtime: '2.8s',
    date: 'Oct 27, 2023',
    coverage: '100%',
    logs: [
      'Started execution at 16:12:45',
      'Loading language model v4.2',
      'Verifying contextual coherence...',
      'All assertions passed.'
    ]
  }
];

interface ResultsProps {
  onNavigate: (screen: Screen) => void;
  showToast: (message: string, type?: 'success' | 'error') => void;
}

export default function Results({ onNavigate, showToast }: ResultsProps) {
  const [expandedId, setExpandedId] = useState<string | null>('TR-4020');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'success' | 'failed'>('all');

  const filteredResults = results.filter(res => {
    const matchesSearch = res.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         res.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         res.suite.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || res.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-headline font-bold mb-2">Test <span className="text-secondary">Results</span></h1>
          <p className="text-on-surface-variant">Detailed analytics and diagnostics from your neural experiments.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => {
              const btn = document.activeElement as HTMLButtonElement;
              const originalText = btn.innerHTML;
              btn.innerHTML = '<span class="animate-pulse">Exporting...</span>';
              btn.disabled = true;
              setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                showToast('PDF Report generated and downloaded successfully.');
              }, 2000);
            }}
            className="px-6 py-3 rounded-xl glass-panel border border-on-surface-variant/10 font-bold text-sm flex items-center gap-2 hover:bg-surface-variant/40 transition-all disabled:opacity-50"
          >
            <FileText className="w-4 h-4" />
            Export PDF
          </button>
          <button 
            onClick={() => onNavigate('generator')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary-container font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
          >
            <Play className="w-4 h-4" />
            Run Suite
          </button>
        </div>
      </header>


      {/* Summary Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard label="Success Rate" value="96.4%" icon={<CheckCircle2 className="text-tertiary" />} color="tertiary" />
        <StatCard label="Avg Runtime" value="1.8s" icon={<Clock className="text-primary" />} color="primary" />
        <StatCard label="Total Tests" value="1,284" icon={<BarChart3 className="text-secondary" />} color="secondary" />
        <StatCard label="Neural Coverage" value="88%" icon={<PieChart className="text-on-surface-variant" />} color="on-surface-variant" />
      </section>

      {/* Filter Bar */}
      <GlassCard className="p-4 flex flex-col md:flex-row items-center gap-4 border border-on-surface-variant/10">
        <div className="flex-1 flex items-center gap-3 px-4 py-2 rounded-xl bg-surface-high border border-on-surface-variant/10 w-full">
          <Search className="text-on-surface-variant w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search by ID, name or suite..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-on-surface-variant/40"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="flex-1 md:flex-none px-4 py-2 rounded-xl bg-surface-high border border-on-surface-variant/10 text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-variant transition-all outline-none"
          >
            <option value="all">All Status</option>
            <option value="success">Success</option>
            <option value="failed">Failed</option>
          </select>
          <button className="flex-1 md:flex-none px-4 py-2 rounded-xl bg-surface-high border border-on-surface-variant/10 text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-variant transition-all">
            Latest
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </GlassCard>

      {/* Results List */}
      <div className="space-y-4">
        {filteredResults.length > 0 ? filteredResults.map((result) => (
          <div key={result.id} className="space-y-2">
            <GlassCard 
              className={cn(
                "p-0 overflow-hidden border transition-all cursor-pointer",
                expandedId === result.id ? "border-primary/40 ring-1 ring-primary/20" : "border-on-surface-variant/10 hover:border-on-surface-variant/30"
              )}
              onClick={() => setExpandedId(expandedId === result.id ? null : result.id)}
            >
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    result.status === 'success' ? "bg-tertiary/10 text-tertiary" : "bg-error/10 text-error"
                  )}>
                    {result.status === 'success' ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-mono font-bold text-primary">{result.id}</span>
                      <h3 className="font-bold text-lg">{result.name}</h3>
                    </div>
                    <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">{result.suite}</p>
                  </div>
                </div>

                <div className="flex items-center gap-10">
                  <div className="hidden lg:block text-center">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Runtime</p>
                    <p className="text-sm font-bold">{result.runtime}</p>
                  </div>
                  <div className="hidden lg:block text-center">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Coverage</p>
                    <p className="text-sm font-bold">{result.coverage}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">{result.date}</p>
                    <button className="text-primary hover:text-secondary transition-colors">
                      {expandedId === result.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedId === result.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-on-surface-variant/10 bg-black/20"
                  >
                    <div className="p-8 space-y-8">
                      {result.status === 'failed' && (
                        <div className="p-4 rounded-xl bg-error/10 border border-error/20 flex gap-4">
                          <Bug className="text-error w-6 h-6 shrink-0" />
                          <div>
                            <h4 className="text-sm font-bold text-error mb-1 uppercase tracking-wider">AI Failure Diagnostics</h4>
                            <p className="text-sm text-on-surface/90 leading-relaxed">{result.error}</p>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4">Detailed Logs</h4>
                          <div className="bg-surface-low p-4 rounded-xl font-mono text-xs space-y-2 border border-on-surface-variant/5">
                            {result.logs.map((log, i) => (
                              <div key={i} className="flex gap-4">
                                <span className="text-on-surface-variant/30 select-none">{i + 1}</span>
                                <span className="text-on-surface-variant/80">{log}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4">Execution Captures</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-video rounded-xl bg-surface-high border border-on-surface-variant/10 overflow-hidden relative group">
                              <img src="https://picsum.photos/seed/capture1/400/225" alt="Capture 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                <ExternalLink className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <div className="aspect-video rounded-xl bg-surface-high border border-on-surface-variant/10 overflow-hidden relative group">
                              <img src="https://picsum.photos/seed/capture2/400/225" alt="Capture 2" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                <ExternalLink className="w-6 h-6 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        )) : (
          <div className="text-center py-20 glass-panel rounded-3xl border border-dashed border-on-surface-variant/20">
            <Search className="w-12 h-12 text-on-surface-variant/20 mx-auto mb-4" />
            <p className="text-on-surface-variant">No experiments found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, color }: { label: string, value: string, icon: React.ReactNode, color: string }) {
  return (
    <GlassCard className="p-6 border border-on-surface-variant/10">
      <div className="flex justify-between items-start mb-4">
        <div className={cn("p-2 rounded-lg bg-opacity-10", `bg-${color}`)}>
          {icon}
        </div>
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">{label}</p>
      <p className="text-2xl font-headline font-bold">{value}</p>
    </GlassCard>
  );
}
