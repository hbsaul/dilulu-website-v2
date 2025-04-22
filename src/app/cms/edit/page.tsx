'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useCMS } from '@/contexts/CMSContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function CMSEditor() {
  const { user, isAdmin, isEditor, loading: authLoading } = useAuth();
  const { getPageContent, updateContent, publishContent, getContentHistory, revertToVersion } = useCMS();
  const { t, language, setLanguage } = useLanguage();
  
  const [pageId, setPageId] = useState('');
  const [content, setContent] = useState<any>(null);
  const [editingSection, setEditingSection] = useState<any>(null);
  const [editContent, setEditContent] = useState('');
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [contentLanguage, setContentLanguage] = useState<'en' | 'fr'>(language as 'en' | 'fr');

  useEffect(() => {
    // Get pageId from URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id) {
      setPageId(id);
      fetchPageContent(id, contentLanguage);
    }
  }, []);

  const fetchPageContent = async (id: string, lang: string) => {
    setLoading(true);
    try {
      const pageContent = await getPageContent(id, lang);
      setContent(pageContent);
    } catch (err) {
      console.error('Error fetching page content:', err);
      setError('Failed to load page content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchContentHistory = async () => {
    setLoading(true);
    try {
      const historyData = await getContentHistory(pageId, contentLanguage);
      setHistory(historyData);
      setShowHistory(true);
    } catch (err) {
      console.error('Error fetching content history:', err);
      setError('Failed to load content history. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditSection = (section: any) => {
    setEditingSection(section);
    setEditContent(section.content);
  };

  const handleSaveEdit = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const result = await updateContent(pageId, editingSection?.sectionId || '', editContent, contentLanguage);
      
      if (result.success) {
        setSuccess(t('cms.contentUpdated'));
        fetchPageContent(pageId, contentLanguage); // Refresh content
        setEditingSection(null);
      } else {
        setError(result.message || t('cms.updateError'));
      }
    } catch (err) {
      console.error('Error updating content:', err);
      setError(t('cms.updateErrorGeneric'));
    } finally {
      setLoading(false);
    }
  };

  const handlePublish = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const result = await publishContent(pageId, contentLanguage);
      
      if (result.success) {
        setSuccess(t('cms.contentPublished'));
      } else {
        setError(result.message || t('cms.publishError'));
      }
    } catch (err) {
      console.error('Error publishing content:', err);
      setError(t('cms.publishErrorGeneric'));
    } finally {
      setLoading(false);
    }
  };

  const handleRevert = async (version: number) => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const result = await revertToVersion(pageId, version, contentLanguage);
      
      if (result.success) {
        setSuccess(t('cms.revertSuccess'));
        fetchPageContent(pageId, contentLanguage); // Refresh content
        setShowHistory(false);
      } else {
        setError(result.message || t('cms.revertError'));
      }
    } catch (err) {
      console.error('Error reverting content:', err);
      setError(t('cms.revertErrorGeneric'));
    } finally {
      setLoading(false);
    }
  };

  const handleLanguageChange = (lang: string) => {
    setContentLanguage(lang as 'en' | 'fr');
    fetchPageContent(pageId, lang);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <div className="spinner-border text-earth-green" role="status">
            <span className="sr-only">{t('common.loading')}</span>
          </div>
          <p className="mt-2 text-gray-600">{t('cms.loadingEditor')}</p>
        </div>
      </div>
    );
  }

  if (!isAdmin && !isEditor) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">{t('cms.accessDenied')}</h2>
          <p className="mt-2 text-gray-600">{t('cms.noPermission')}</p>
          <Link href="/" className="mt-4 inline-block px-4 py-2 bg-earth-green text-white rounded-md hover:bg-earth-green-dark">
            {t('common.returnHome')}
          </Link>
        </div>
      </div>
    );
  }

  if (!pageId) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('cms.editor')}</h1>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t('cms.selectPage')}</h2>
            <p className="text-gray-600 mb-4">{t('cms.selectPageInstructions')}</p>
            <div className="flex">
              <input
                type="text"
                placeholder={t('cms.enterPageId')}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-earth-green"
                value={pageId}
                onChange={(e) => setPageId(e.target.value)}
              />
              <button
                onClick={() => fetchPageContent(pageId, contentLanguage)}
                className="px-4 py-2 bg-earth-green text-white rounded-r-md hover:bg-earth-green-dark"
              >
                {t('cms.loadPage')}
              </button>
            </div>
            <div className="mt-6">
              <Link href="/admin" className="text-earth-green hover:text-earth-green-dark">
                {t('cms.returnToDashboard')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{t('cms.editor')}</h1>
          <div className="flex space-x-4">
            <div className="flex items-center mr-4">
              <span className="mr-2">{t('common.language')}:</span>
              <select 
                value={contentLanguage} 
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-earth-green"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>
            <Link href="/admin" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              {t('cms.backToDashboard')}
            </Link>
            <button
              onClick={fetchContentHistory}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50"
            >
              {t('cms.history')}
            </button>
            <button
              onClick={handlePublish}
              disabled={loading}
              className="px-4 py-2 bg-earth-green text-white rounded-md hover:bg-earth-green-dark"
            >
              {t('cms.publish')}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
            <div className="text-red-700">{error}</div>
          </div>
        )}
        
        {success && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4">
            <div className="text-green-700">{success}</div>
          </div>
        )}

        {loading ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="spinner-border text-earth-green" role="status">
              <span className="sr-only">{t('common.loading')}</span>
            </div>
            <p className="mt-2 text-gray-600">{t('cms.loadingContent')}</p>
          </div>
        ) : showHistory ? (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">{t('cms.contentHistory')}</h2>
              <button
                onClick={() => setShowHistory(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                {t('common.close')}
              </button>
            </div>
            
            {history.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('cms.version')}</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('cms.editedBy')}</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('cms.date')}</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('cms.actions')}</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {history.map((version) => (
                      <tr key={version.version}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">v{version.version}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{version.editedBy?.name || t('cms.unknown')}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(version.editedAt).toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleRevert(version.version)}
                            className="text-earth-green hover:text-earth-green-dark"
                          >
                            {t('cms.revert')}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">{t('cms.noHistory')}</p>
            )}
          </div>
        ) : content ? (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.title}</h2>
            <div className="mb-4 flex items-center">
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                content.publishStatus === 'published' ? 'bg-green-100 text-green-800' : 
                content.publishStatus === 'draft' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-gray-100 text-gray-800'
              }`}>
                {content.publishStatus}
              </span>
              <span className="ml-4 text-sm text-gray-500">
                {t('cms.lastEdited')}: {new Date(content.lastEditedAt).toLocaleString()}
              </span>
              <span className="ml-4 text-sm text-gray-500">
                {t('common.language')}: {contentLanguage === 'en' ? 'English' : 'Français'}
              </span>
            </div>
            
            <div className="space-y-8">
              {content.sections.map((section: any) => (
                <div key={section.sectionId} className="border border-gray-200 rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                    <button
                      onClick={() => handleEditSection(section)}
                      className="text-earth-green hover:text-earth-green-dark"
                    >
                      {t('common.edit')}
                    </button>
                  </div>
                  
                  {editingSection && editingSection.sectionId === section.sectionId ? (
                    <div>
                      <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        rows={10}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-earth-green"
                      ></textarea>
                      <div className="mt-2 flex justify-end space-x-2">
                        <button
                          onClick={() => setEditingSection(null)}
                          className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                          {t('common.cancel')}
                        </button>
                        <button
                          onClick={handleSaveEdit}
                          disabled={loading}
                          className="px-3 py-1 bg-earth-green text-white rounded-md hover:bg-earth-green-dark"
                        >
                          {t('common.save')}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: section.content }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500">{t('cms.noContent')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
