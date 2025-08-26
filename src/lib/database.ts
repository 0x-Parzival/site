import { neon } from '@neondatabase/serverless';

// Database connection
const sql = neon(process.env.DATABASE_URL || '');

export interface User {
  id: number;
  email: string;
  name: string;
  created_at: Date;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author_id: number;
  created_at: Date;
  updated_at: Date;
}

// User operations
export async function createUser(email: string, name: string): Promise<User> {
  const result = await sql`
    INSERT INTO users (email, name)
    VALUES (${email}, ${name})
    RETURNING *
  `;
  return result[0] as User;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const result = await sql`
    SELECT * FROM users WHERE email = ${email}
  `;
  return result[0] as User || null;
}

export async function getAllUsers(): Promise<User[]> {
  const result = await sql`
    SELECT * FROM users ORDER BY created_at DESC
  `;
  return result as User[];
}

// Post operations
export async function createPost(title: string, content: string, authorId: number): Promise<Post> {
  const result = await sql`
    INSERT INTO posts (title, content, author_id)
    VALUES (${title}, ${content}, ${authorId})
    RETURNING *
  `;
  return result[0] as Post;
}

export async function getAllPosts(): Promise<Post[]> {
  const result = await sql`
    SELECT * FROM posts ORDER BY created_at DESC
  `;
  return result as Post[];
}

export async function getPostById(id: number): Promise<Post | null> {
  const result = await sql`
    SELECT * FROM posts WHERE id = ${id}
  `;
  return result[0] as Post || null;
}

// Initialize database tables
export async function initializeDatabase(): Promise<void> {
  try {
    // Create users table
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create posts table
    await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        author_id INTEGER REFERENCES users(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

export { sql };
