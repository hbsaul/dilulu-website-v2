'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the context type
interface CMSContextType {
  content: any | null;
  loading: boolean;
  getPageContent: (pageId: string, language?: string) => Promise<any>;
  updateContent: (pageId: string, sectionId: string, newContent: string, language?: string) => Promise<{ success: boolean; message: string }>;
  publishContent: (pageId: string, language?: string) => Promise<{ success: boolean; message: string }>;
  getContentHistory: (pageId: string, language?: string) => Promise<any[]>;
  revertToVersion: (pageId: string, version: number, language?: string) => Promise<{ success: boolean; message: string }>;
}

// Create the context with default values
const CMSContext = createContext<CMSContextType>({
  content: null,
  loading: true,
  getPageContent: async () => null,
  updateContent: async () => ({ success: false, message: 'Not implemented' }),
  publishContent: async () => ({ success: false, message: 'Not implemented' }),
  getContentHistory: async () => [],
  revertToVersion: async () => ({ success: false, message: 'Not implemented' }),
});

// Custom hook to use the CMS context
export const useCMS = () => useContext(CMSContext);

// Provider component
export const CMSProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Get page content
  const getPageContent = async (pageId: string, language = 'en') => {
    setLoading(true);
    try {
      const res = await fetch(`/api/cms/content?pageId=${pageId}&language=${language}`);
      if (res.ok) {
        const data = await res.json();
        setContent(data.content);
        return data.content;
      }
      return null;
    } catch (error) {
      console.error('Failed to fetch content:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Update content section
  const updateContent = async (pageId: string, sectionId: string, newContent: string, language = 'en') => {
    try {
      const res = await fetch('/api/cms/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pageId, sectionId, content: newContent, language }),
      });

      const data = await res.json();

      if (res.ok) {
        // Update local content state if successful
        if (content && content.pageId === pageId) {
          const updatedContent = {
            ...content,
            sections: content.sections.map((section: any) => 
              section.sectionId === sectionId 
                ? { ...section, content: newContent } 
                : section
            )
          };
          setContent(updatedContent);
        }
        return { success: true, message: 'Content updated successfully' };
      } else {
        return { success: false, message: data.message || 'Failed to update content' };
      }
    } catch (error) {
      console.error('Content update error:', error);
      return { success: false, message: 'An error occurred while updating content' };
    }
  };

  // Publish content
  const publishContent = async (pageId: string, language = 'en') => {
    try {
      const res = await fetch('/api/cms/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pageId, language }),
      });

      const data = await res.json();

      if (res.ok) {
        return { success: true, message: 'Content published successfully' };
      } else {
        return { success: false, message: data.message || 'Failed to publish content' };
      }
    } catch (error) {
      console.error('Content publish error:', error);
      return { success: false, message: 'An error occurred while publishing content' };
    }
  };

  // Get content history
  const getContentHistory = async (pageId: string, language = 'en') => {
    try {
      const res = await fetch(`/api/cms/history?pageId=${pageId}&language=${language}`);
      if (res.ok) {
        const data = await res.json();
        return data.history || [];
      }
      return [];
    } catch (error) {
      console.error('Failed to fetch content history:', error);
      return [];
    }
  };

  // Revert to previous version
  const revertToVersion = async (pageId: string, version: number, language = 'en') => {
    try {
      const res = await fetch('/api/cms/revert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pageId, version, language }),
      });

      const data = await res.json();

      if (res.ok) {
        // Refresh content if successful
        await getPageContent(pageId, language);
        return { success: true, message: 'Content reverted successfully' };
      } else {
        return { success: false, message: data.message || 'Failed to revert content' };
      }
    } catch (error) {
      console.error('Content revert error:', error);
      return { success: false, message: 'An error occurred while reverting content' };
    }
  };

  return (
    <CMSContext.Provider
      value={{
        content,
        loading,
        getPageContent,
        updateContent,
        publishContent,
        getContentHistory,
        revertToVersion,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};
