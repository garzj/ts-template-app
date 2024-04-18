try {
  const dotenv = await import('dotenv');
  dotenv.config();
} catch {}

export interface Env {
  NODE_ENV: 'development' | 'production' | 'test';
}

const env: Env = process.env as any;

env.NODE_ENV ??= 'production';
