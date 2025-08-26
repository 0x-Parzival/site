import React, { useState } from 'react';
import { useDatabase } from '../hooks/useDatabase';

const DatabaseDemo: React.FC = () => {
  const { users, posts, loading, error, addUser, addPost } = useDatabase();
  const [userForm, setUserForm] = useState({ email: '', name: '' });
  const [postForm, setPostForm] = useState({ title: '', content: '', authorId: '' });

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addUser(userForm.email, userForm.name);
      setUserForm({ email: '', name: '' });
    } catch (err) {
      console.error('Failed to create user:', err);
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addPost(postForm.title, postForm.content, parseInt(postForm.authorId));
      setPostForm({ title: '', content: '', authorId: '' });
    } catch (err) {
      console.error('Failed to create post:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Neon Database Demo</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* User Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          
          <form onSubmit={handleCreateUser} className="mb-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={userForm.email}
                onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={userForm.name}
                onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add User
            </button>
          </form>

          <div className="space-y-3">
            {users.map((user) => (
              <div key={user.id} className="bg-gray-50 p-3 rounded-md">
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-gray-600">{user.email}</div>
                <div className="text-xs text-gray-500">ID: {user.id}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Post Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Posts</h2>
          
          <form onSubmit={handleCreatePost} className="mb-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={postForm.title}
                onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              <textarea
                value={postForm.content}
                onChange={(e) => setPostForm({ ...postForm, content: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author ID
              </label>
              <select
                value={postForm.authorId}
                onChange={(e) => setPostForm({ ...postForm, authorId: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Author</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
              disabled={users.length === 0}
            >
              Add Post
            </button>
          </form>

          <div className="space-y-3">
            {posts.map((post) => (
              <div key={post.id} className="bg-gray-50 p-3 rounded-md">
                <div className="font-medium">{post.title}</div>
                <div className="text-sm text-gray-700 mt-1">{post.content}</div>
                <div className="text-xs text-gray-500 mt-2">
                  Author ID: {post.author_id} | Created: {new Date(post.created_at).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseDemo;
