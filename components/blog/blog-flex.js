'use client';

import { BlogCard } from './blog-card';

// For categories listed on the home page
export function BlogFlex({ blogs }) {
  return (
    <div className=" gap-6 mx-2">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
