import { fetchPost, fetchPosts } from '@/fetchers/posts';
import { useEffect, useState } from 'react';

export const usePosts = () => {
  const [data, setData] = useState<Array<{
    id:any;
    title:string;
  }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const posts = await fetchPosts();
        setData(posts);
      } catch (err:any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { data, loading, error };
};


export const usePost = (id: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const post = await fetchPost(id);
        setData(post);
      } catch (err:any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  return { data, loading, error };
};