'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useCMS } from '@/contexts/CMSContext';
import Link from 'next/link';

export default function AdminDashboard() {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [pages, setPages] = useState([]);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPages: 0,
    totalEdits: 0,
    recentActivity: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Only fetch data if user is admin
    if (!authLoading && isAdmin) {
      fetchDashboardData();
    }
  }, [authLoading, isAdmin]);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // Fetch pages
      const pagesRes = await fetch('/api/cms/pages');
      const pagesData = await pagesRes.json();
      
      // Fetch users
      const usersRes = await fetch('/api/admin/users');
      const usersData = await usersRes.json();
      
      // Fetch stats
      const statsRes = await fetch('/api/admin/stats');
      const statsData = await statsRes.json();
      
      if (pagesData.success) {
        setPages(pagesData.pages);
      }
      
      if (usersData.success) {
        setUsers(usersData.users);
      }
      
      if (statsData.success) {
        setStats(statsData.stats);
      }
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <div className="spinner-border text-earth-green" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-2 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Access Denied</h2>
          <p className="mt-2 text-gray-600">You don't have permission to access the admin dashboard.</p>
          <Link href="/" className="mt-4 inline-block px-4 py-2 bg-earth-green text-white rounded-md hover:bg-earth-green-dark">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-earth-green shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-white text-xl font-bold">Dilulu Admin Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-white mr-4">Welcome, {user?.name}</span>
              <Link href="/" className="text-white hover:text-gray-200">
                Back to Site
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4">
            <div className="text-red-700">{error}</div>
          </div>
        )}

        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'overview' ? 'bg-earth-green text-white' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('content')}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'content' ? 'bg-earth-green text-white' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Content Management
                  </button>
                  <button
                    onClick={() => setActiveTab('users')}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'users' ? 'bg-earth-green text-white' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    User Management
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'settings' ? 'bg-earth-green text-white' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="w-full md:flex-1 md:ml-6">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              {loading ? (
                <div className="p-6 text-center">
                  <div className="spinner-border text-earth-green" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <p className="mt-2 text-gray-600">Loading data...</p>
                </div>
              ) : (
                <>
                  {activeTab === 'overview' && (
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
                          <h3 className="text-lg font-medium text-gray-900">Total Users</h3>
                          <p className="text-3xl font-bold text-earth-green">{stats.totalUsers}</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                          <h3 className="text-lg font-medium text-gray-900">Content Pages</h3>
                          <p className="text-3xl font-bold text-blue-600">{stats.totalPages}</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
                          <h3 className="text-lg font-medium text-gray-900">Total Edits</h3>
                          <p className="text-3xl font-bold text-purple-600">{stats.totalEdits}</p>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                      {stats.recentActivity.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {stats.recentActivity.map((activity: any, index: number) => (
                                <tr key={index}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{activity.username || 'Unknown'}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.action}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.page}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(activity.date).toLocaleString()}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-gray-500">No recent activity to display.</p>
                      )}
                    </div>
                  )}

                  {activeTab === 'content' && (
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
                        <Link href="/cms/create" className="px-4 py-2 bg-earth-green text-white rounded-md hover:bg-earth-green-dark">
                          Create New Page
                        </Link>
                      </div>
                      
                      {pages.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {pages.map((page: any, index: number) => (
                                <tr key={page._id || index}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{page.title}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      page.publishStatus === 'published' ? 'bg-green-100 text-green-800' : 
                                      page.publishStatus === 'draft' ? 'bg-yellow-100 text-yellow-800' : 
                                      'bg-gray-100 text-gray-800'
                                    }`}>
                                      {page.publishStatus}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(page.lastEditedAt).toLocaleString()}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <Link href={`/cms/edit/${page.pageId}`} className="text-earth-green hover:text-earth-green-dark mr-4">
                                      Edit
                                    </Link>
                                    <Link href={`/cms/history/${page.pageId}`} className="text-blue-600 hover:text-blue-900 mr-4">
                                      History
                                    </Link>
                                    <button className="text-red-600 hover:text-red-900">
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-gray-500">No content pages found. Create your first page to get started.</p>
                      )}
                    </div>
                  )}

                  {activeTab === 'users' && (
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                        <button className="px-4 py-2 bg-earth-green text-white rounded-md hover:bg-earth-green-dark">
                          Add New User
                        </button>
                      </div>
                      
                      {users.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {users.map((user: any, index: number) => (
                                <tr key={user._id || index}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      user.role === 'admin' ? 'bg-red-100 text-red-800' : 
                                      user.role === 'editor' ? 'bg-blue-100 text-blue-800' : 
                                      'bg-green-100 text-green-800'
                                    }`}>
                                      {user.role}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(user.createdAt).toLocaleDateString()}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-earth-green hover:text-earth-green-dark mr-4">
                                      Edit
                                    </button>
                                    <button className="text-red-600 hover:text-red-900">
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-gray-500">No users found.</p>
                      )}
                    </div>
                  )}

                  {activeTab === 'settings' && (
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Site Settings</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">General Settings</h3>
                          <div className="bg-gray-50 p-4 rounded-md">
                            <div className="mb-4">
                              <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">
                                Site Name
                              </label>
                              <input
                                type="text"
                                id="siteName"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-earth-green focus:border-earth-green"
                                defaultValue="Dilulu"
                              />
                            </div>
                            <div className="mb-4">
                              <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700 mb-1">
                                Site Description
                              </label>
                              <textarea
                                id="siteDescription"
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-earth-green focus:border-earth-green"
                                defaultValue="Empowering sustainable living through education and community engagement."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Language Settings</h3>
                          <div className="bg-gray-50 p-4 rounded-md">
                            <div className="mb-4">
                              <label htmlFor="defaultLanguage" className="block text-sm font-medium text-gray-700 mb-1">
                                Default Language
                              </label>
                              <select
                                id="defaultLanguage"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-earth-green focus:border-earth-green"
                              >
                                <option value="en">English</option>
                                <option value="fr">French</option>
                              </select>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="enableMultilingual"
                                type="checkbox"
                                className="h-4 w-4 text-earth-green focus:ring-earth-green border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="enableMultilingual" className="ml-2 block text-sm text-gray-700">
                                Enable multilingual support
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="px-4 py-2 bg-earth-green text-white rounded-md hover:bg-earth-green-dark"
                          >
                            Save Settings
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
