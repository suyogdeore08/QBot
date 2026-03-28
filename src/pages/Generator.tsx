import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wand2, Play, Copy, ShoppingCart, UserPlus, Bug, ArrowRight, Zap, CheckCircle2, Loader2 } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Screen } from '../types';
import { cn } from '../lib/utils';

interface GeneratorProps {
  onNavigate: (screen: Screen) => void;
}

const DEFAULT_CODE = `import { test, expect } from '@playwright/test';

test('verify amazon search', async ({ page }) => {
    await page.goto('https://amazon.com');
    await page.fill('#twotabsearchtextbox', 'Mechanical Keyboard');
    await page.press('#twotabsearchtextbox', 'Enter');
    const results = page.locator('.s-result-item');
    await expect(results.first()).toBeVisible();
});`;

export default function Generator({ onNavigate }: GeneratorProps) {
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 800);
    return () => clearInterval(interval);
  }, []);

  const handleGenerate = () => {
    if (!input.trim()) return;
    
    setIsGenerating(true);
    setGeneratedCode(null);
    
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedCode(DEFAULT_CODE);
    }, 2500);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <header className="mb-12">
        <h1 className="text-5xl font-headline font-bold mb-4 tracking-tight">
          Test <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Generator</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          Convert natural language requirements into executable automation scripts using our core neural engine.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Section */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard className="p-0 overflow-hidden border border-on-surface-variant/10">
            <div className="bg-surface-container/30 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80">Input Specification</label>
                <div className="flex gap-2">
                  <span className={cn("h-2 w-2 rounded-full transition-colors", isGenerating ? "bg-primary animate-pulse" : "bg-primary/40")} />
                  <span className={cn("h-2 w-2 rounded-full transition-colors", isGenerating ? "bg-secondary animate-pulse delay-75" : "bg-primary/20")} />
                </div>
              </div>
              
              <div className="relative group">
                <textarea 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isGenerating}
                  className="w-full bg-transparent border-none focus:ring-0 text-lg font-sans placeholder:text-on-surface-variant/30 min-h-[240px] resize-none leading-relaxed text-on-surface disabled:opacity-50"
                  placeholder="Login to Amazon and verify product search..."
                />
                <div className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 transition-all duration-500",
                  isGenerating ? "bg-gradient-to-r from-primary via-secondary to-tertiary animate-shimmer" : "bg-surface-high group-focus-within:bg-gradient-to-r group-focus-within:from-primary group-focus-within:to-secondary"
                )} />
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={handleGenerate}
                  disabled={isGenerating || !input.trim()}
                  className="flex-1 min-w-[200px] group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary font-bold text-on-primary-container shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:scale-100"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Wand2 className="w-5 h-5" />}
                    {isGenerating ? 'Synthesizing...' : 'Generate Test using AI'}
                  </span>
                </button>
                <button 
                  onClick={() => onNavigate('execution')}
                  disabled={!generatedCode || isGenerating}
                  className="px-8 py-4 rounded-xl bg-surface-bright/20 backdrop-blur-md border border-on-surface-variant/20 font-bold text-on-surface transition-all hover:bg-surface-bright/40 hover:shadow-lg active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Run Test
                </button>
              </div>
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="p-6">
              <Zap className="text-primary w-6 h-6 mb-2" />
              <div className="text-2xl font-headline font-bold">1.2s</div>
              <div className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">Avg. Synthesis</div>
            </GlassCard>
            <GlassCard className="p-6">
              <CheckCircle2 className="text-secondary w-6 h-6 mb-2" />
              <div className="text-2xl font-headline font-bold">99.4%</div>
              <div className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">Script Accuracy</div>
            </GlassCard>
          </div>
        </div>

        {/* Output Terminal */}
        <div className="lg:col-span-5 h-full">
          <GlassCard className="h-full flex flex-col p-0 overflow-hidden min-h-[500px] border border-on-surface-variant/10">
            <div className="bg-surface-variant/80 px-4 py-3 flex items-center justify-between border-b border-on-surface-variant/15">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-error/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-tertiary/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                </div>
                <span className="ml-4 text-xs font-medium text-on-surface-variant/60 font-sans">output_script.ts</span>
              </div>
              <Copy className="w-4 h-4 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
            <div className="flex-1 p-6 font-mono text-[13px] leading-relaxed overflow-y-auto bg-black/40">
              <pre className="text-on-surface">
                {isGenerating ? (
                  <div className="flex flex-col gap-2 opacity-50 italic">
                    <div className="flex gap-4">
                      <span className="text-on-surface-variant/40 select-none w-4">01</span>
                      <span className="animate-pulse">Analyzing requirements...</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-on-surface-variant/40 select-none w-4">02</span>
                      <span className="animate-pulse delay-75">Mapping DOM selectors...</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-on-surface-variant/40 select-none w-4">03</span>
                      <span className="animate-pulse delay-150">Synthesizing Playwright script...</span>
                    </div>
                  </div>
                ) : generatedCode ? (
                  generatedCode.split('\n').map((line, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-4"
                    >
                      <span className="text-on-surface-variant/40 select-none w-4">{(i + 1).toString().padStart(2, '0')}</span>
                      <span>{line}</span>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-on-surface-variant/30 italic">Waiting for input...</div>
                )}
                
                {!isGenerating && (
                  <div className="flex gap-4">
                    <span className="text-on-surface-variant/40 select-none w-4">
                      {generatedCode ? (generatedCode.split('\n').length + 1).toString().padStart(2, '0') : '01'}
                    </span>
                    <span className={cn("w-2 h-5 bg-primary/60", showCursor ? "opacity-100" : "opacity-0")} />
                  </div>
                )}
              </pre>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Recent Syntheses */}
      <section className="mt-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl font-headline font-bold tracking-tight">Recent Syntheses</h2>
          <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
            View All History <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HistoryCard 
            icon={<ShoppingCart className="w-5 h-5" />} 
            title="Checkout Flow" 
            desc="Test the guest checkout process with a standard VISA credit card simulation..."
            time="2 mins ago"
            status="success"
            onClick={() => {
              setInput("Test the guest checkout process with a standard VISA credit card simulation...");
              setGeneratedCode(DEFAULT_CODE);
            }}
          />
          <HistoryCard 
            icon={<UserPlus className="w-5 h-5" />} 
            title="User Onboarding" 
            desc="Complete the multi-step profile setup and verify email notification trigger..."
            time="45 mins ago"
            status="success"
            onClick={() => {
              setInput("Complete the multi-step profile setup and verify email notification trigger...");
              setGeneratedCode(DEFAULT_CODE);
            }}
          />
          <HistoryCard 
            icon={<Bug className="w-5 h-5" />} 
            title="Regression Set B" 
            desc="Navigate to pricing page and verify that all currency toggles update correctly..."
            time="2 hours ago"
            status="queued"
            onClick={() => {
              setInput("Navigate to pricing page and verify that all currency toggles update correctly...");
              setGeneratedCode(DEFAULT_CODE);
            }}
          />
        </div>
      </section>
    </div>
  );
}

function HistoryCard({ icon, title, desc, time, status, onClick }: { icon: React.ReactNode, title: string, desc: string, time: string, status: string, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="group bg-surface-container p-6 rounded-xl border border-on-surface-variant/10 hover:bg-surface-variant/40 transition-all cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{title}</span>
      </div>
      <p className="text-sm line-clamp-2 mb-4 text-on-surface/80 leading-relaxed">{desc}</p>
      <div className="flex items-center justify-between text-[10px] text-on-surface-variant font-mono">
        <span>{time}</span>
        <span className={cn(
          "px-2 py-0.5 rounded border",
          status === 'success' ? "bg-tertiary/10 text-tertiary border-tertiary/20" : "bg-primary/10 text-primary border-primary/20"
        )}>
          {status.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
