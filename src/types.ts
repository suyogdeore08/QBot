export type Screen = 'login' | 'signup' | 'dashboard' | 'generator' | 'results' | 'execution' | 'settings';

export interface Experiment {
  id: string;
  name: string;
  suite: string;
  status: 'success' | 'failed' | 'in-progress' | 'queued';
  duration?: string;
  date: string;
}

export interface Shard {
  name: string;
  load: number;
  type: 'alpha' | 'omega';
}
