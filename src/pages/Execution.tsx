import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu, Zap, CheckCircle2, Loader2, ShieldCheck, Database, Network } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Screen } from '../types';

interface ExecutionProps {
  onNavigate: (screen: Screen) => void;
}

const logs = [
  "Initializing Execution Kernel v2.4.0...",
  "Loading neural weights from Shard-Alpha-7...",
  "Establishing secure handshake with Amazon.com...",
  "Injecting automation payload into browser context...",
  "Waiting for DOM ready state...",
  "Executing: page.goto('https://amazon.com')",
  "Executing: page.fill('#twotabsearchtextbox', 'Mechanical Keyboard')",
  "Executing: page.press('#twotabsearchtextbox', 'Enter')",
  "Analyzing search results for 'Mechanical Keyboard'...",
  "Neural verification: expect(results.first()).toBeVisible()",
  "Success: Assertion passed in 142ms.",
  "Cleaning up session data...",
  "Finalizing intelligence report...",
];

export default function Execution({ onNavigate }: ExecutionProps) {
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setCurrentLogIndex(prev => {
        if (prev < logs.length - 1) return prev + 1;
        clearInterval(logInterval);
        return prev;
      });
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 1;
        clearInterval(progressInterval);
        return prev;
      });
    }, 100);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100 && currentLogIndex === logs.length - 1) {
      const timer = setTimeout(() => onNavigate('results'), 2000);
      return () => clearTimeout(timer);
    }
  }, [progress, currentLogIndex, onNavigate]);

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-headline font-bold mb-2">Execution <span className="text-primary">Kernel</span></h1>
          <p className="text-on-surface-variant flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Running AI-generated test: Amazon Search Verification
          </p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 rounded-xl glass-panel border border-primary/20 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold font-mono">CPU: 14%</span>
          </div>
          <div className="px-4 py-2 rounded-xl glass-panel border border-secondary/20 flex items-center gap-2">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-xs font-bold font-mono">RAM: 1.2GB</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Terminal */}
        <div className="lg:col-span-7">
          <GlassCard className="p-0 overflow-hidden h-[500px] flex flex-col border border-on-surface-variant/10">
            <div className="bg-surface-variant/80 px-4 py-3 flex items-center gap-2 border-b border-on-surface-variant/15">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">System Log</span>
            </div>
            <div className="flex-1 p-6 font-mono text-sm overflow-y-auto bg-black/60 space-y-2">
              <AnimatePresence mode="popLayout">
                {logs.slice(0, currentLogIndex + 1).map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-4"
                  >
                    <span className="text-on-surface-variant/30 select-none">[{new Date().toLocaleTimeString()}]</span>
                    <span className={log.includes('Success') ? 'text-tertiary' : 'text-on-surface/80'}>
                      {log.includes('Success') && <CheckCircle2 className="inline w-4 h-4 mr-2" />}
                      {log}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-5 bg-primary/60 inline-block ml-1"
              />
            </div>
          </GlassCard>
        </div>

        {/* Visualizer */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard className="flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            
            <div className="relative mb-8">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="w-48 h-48 rounded-full border-2 border-dashed border-primary/20"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-secondary/20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Loader2 className="w-16 h-16 text-primary animate-spin" />
                  <div className="absolute inset-0 blur-xl bg-primary/40 animate-pulse" />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-headline font-bold mb-2">Intelligence Load</h3>
            <p className="text-on-surface-variant text-sm mb-8">Synthesizing neural pathways for execution...</p>

            <div className="w-full space-y-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 w-full bg-surface-high rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="p-4 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-tertiary/10 text-tertiary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Security</p>
                <p className="text-sm font-bold">Encrypted</p>
              </div>
            </GlassCard>
            <GlassCard className="p-4 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Node</p>
                <p className="text-sm font-bold">Alpha-7</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
