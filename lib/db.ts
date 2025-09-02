// Minimal file-based "DB" for early-access. Swap with a real DB in production.
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'early-access.json');

type User = {
  email: string;
  name?: string;
  code: string;
  referrer?: string | null;
  createdAt: string;
};

type Store = { users: Record<string, User>, codes: Record<string, string> }; // email -> user, code -> email

async function ensureFile(){
  try { await fs.mkdir(DATA_DIR, { recursive: true }); } catch {}
  try { await fs.access(DATA_FILE); }
  catch { await fs.writeFile(DATA_FILE, JSON.stringify({ users:{}, codes:{} } satisfies Store, null, 2)); }
}

async function read(): Promise<Store>{
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, 'utf8');
  return JSON.parse(raw) as Store;
}
async function write(data: Store){
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

export async function getUserByEmail(email: string){ 
  const db = await read(); 
  return db.users[email.toLowerCase()] || null; 
}
export async function getEmailByCode(code: string){
  const db = await read();
  return db.codes[code] || null;
}
export async function saveUser(user: User){
  const db = await read();
  db.users[user.email.toLowerCase()] = user;
  db.codes[user.code] = user.email.toLowerCase();
  await write(db);
  return user;
}
export async function upsertUser(user: Omit<User, 'createdAt'>){
  const existing = await getUserByEmail(user.email);
  if (existing) {
    const merged = { ...existing, ...user };
    await saveUser(merged);
    return merged;
  }
  const created = await saveUser({ ...user, createdAt: new Date().toISOString() });
  return created;
}
