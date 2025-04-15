import * as dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env.local
dotenv.config({ path: resolve(__dirname, '.env.local') });

export default {
  dialect: 'postgresql',
  schema: './utils/schema.jsx',
  out: './drizzle',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};
