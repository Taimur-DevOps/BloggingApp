'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { BlogGrid } from '@/components/blog/blog-grid';
import { Button } from '@/components/ui/button';

export function ClientCategory({ blogs }) {
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  // useEffect(() => {
  //   gsap.from('.category-content', {
  //     opacity: 0,
  //     y: 30,
  //     duration: 1,
  //     ease: 'power2.out'
  //   });
  // }, []);

  const loadMore = () => {
    setVisibleBlogs(prev => prev + 6);
  };

  return (
    <>
      <BlogGrid blogs={blogs.slice(0, visibleBlogs)} />

      {visibleBlogs < blogs.length && (
        <div className="text-center">
          <Button
            onClick={loadMore}
            size="lg"
            className="px-8"
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
}