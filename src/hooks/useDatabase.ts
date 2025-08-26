import { useState, useEffect } from 'react';
import { 
  getAllUsers, 
  getAllPosts, 
  createUser, 
  createPost, 
  initializeDatabase,
  User, 
  Post 
} from '../lib/database';

export function useDatabase() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize database on first load
  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        await initializeDatabase();
        await loadData();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Database initialization failed');
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const loadData = async () => {
    try {
      const [usersData, postsData] = await Promise.all([
        getAllUsers(),
        getAllPosts()
      ]);
      setUsers(usersData);
      setPosts(postsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
    }
  };

  const addUser = async (email: string, name: string) => {
    try {
      setLoading(true);
      const newUser = await createUser(email, name);
      setUsers(prev => [newUser, ...prev]);
      return newUser;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const addPost = async (title: string, content: string, authorId: number) => {
    try {
      setLoading(true);
      const newPost = await createPost(title, content, authorId);
      setPosts(prev => [newPost, ...prev]);
      return newPost;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create post');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    users,
    posts,
    loading,
    error,
    addUser,
    addPost,
    refreshData: loadData
  };
}
