export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    return await response.json();
  };

  export const fetchPost = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  };