export interface Env extends NodeJS.ProcessEnv {
  NODE_ENV: 'development' | 'production' | 'test';
}

const env: Env = process.env as any;

env.NODE_ENV ??= 'production';

export { env };
