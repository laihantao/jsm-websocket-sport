import 'dotenv/config';
import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

if (!process.env.DATABASE_URL){
    throw new Error ('Database connection string is not defined');
}

export const pool = new pg.Pool ({
    connectionString: process.env.DATABASE_URL,
});

export const db = drizzle (pool);