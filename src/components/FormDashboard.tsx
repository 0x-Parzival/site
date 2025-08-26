// src/components/FormDashboard.tsx
import React, { useState, useEffect } from 'react';
import { getSubmissions, getFormStats, deleteSubmission } from '../utils/formSubmission';

interface Submission {
  id: number;
  form_type: string;
  name: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
  submitted_at: string;
  ip_address: string;
}

interface FormStats {
  total_submissions: number;
  recent_submissions: number;
  submissions_by_type: Array<{ form_type: string; count: string }>;
  submissions_by_date: Array<{ date: string; count: string }>;
}

const FormDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [stats, setStats] = useState<FormStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    form_type: '',
    limit: '20',
    offset: '0'
  });

  useEffect(() => {
    loadData();
  }, [filters]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [submissionsResult, statsResult] = await Promise.all([
        getSubmissions(filters),
        getFormStats()
      ]);
      
      setSubmissions(submissionsResult.data);
      setStats(statsResult.stats);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return;
    }

    try {
      await deleteSubmission(id);
      setSubmissions(prev => prev.filter(sub => sub.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete submission');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading && !submissions.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Form Submissions Dashboard</h1>

        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
            {error}
          </div>
        )}

        {/* Statistics */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-300">Total Submissions</h3>
              <p className="text-3xl font-bold text-purple-400">{stats.total_submissions}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-300">Recent (7 days)</h3>
              <p className="text-3xl font-bold text-blue-400">{stats.recent_submissions}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-300">Form Types</h3>
              <p className="text-3xl font-bold text-green-400">{stats.submissions_by_type.length}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-300">Active Days</h3>
              <p className="text-3xl font-bold text-yellow-400">{stats.submissions_by_date.length}</p>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          <select
            value={filters.form_type}
            onChange={(e) => setFilters(prev => ({ ...prev, form_type: e.target.value, offset: '0' }))}
            className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">All Form Types</option>
            {stats?.submissions_by_type.map(type => (
              <option key={type.form_type} value={type.form_type}>
                {type.form_type} ({type.count})
              </option>
            ))}
          </select>

          <select
            value={filters.limit}
            onChange={(e) => setFilters(prev => ({ ...prev, limit: e.target.value, offset: '0' }))}
            className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="10">10 per page</option>
            <option value="20">20 per page</option>
            <option value="50">50 per page</option>
            <option value="100">100 per page</option>
          </select>

          <button
            onClick={loadData}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
          >
            Refresh
          </button>
        </div>

        {/* Submissions Table */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Subject</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Submitted</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {submissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-700/50">
                    <td className="px-4 py-3 text-sm text-gray-300">{submission.id}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
                        {submission.form_type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-300">{submission.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-300">{submission.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-300 max-w-xs truncate">
                      {submission.subject || '-'}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-300">
                      {formatDate(submission.submitted_at)}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <button
                        onClick={() => handleDelete(submission.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {submissions.length === 0 && !loading && (
            <div className="p-8 text-center text-gray-400">
              No submissions found.
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => setFilters(prev => ({ 
              ...prev, 
              offset: String(Math.max(0, parseInt(prev.offset) - parseInt(prev.limit)))
            }))}
            disabled={parseInt(filters.offset) === 0}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <span className="text-gray-400">
            Showing {parseInt(filters.offset) + 1} - {parseInt(filters.offset) + submissions.length}
          </span>

          <button
            onClick={() => setFilters(prev => ({ 
              ...prev, 
              offset: String(parseInt(prev.offset) + parseInt(prev.limit))
            }))}
            disabled={submissions.length < parseInt(filters.limit)}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormDashboard;
