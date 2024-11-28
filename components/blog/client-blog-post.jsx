'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ClientBlogPost({ blog }) {
  // useEffect(() => {
    // const tl = gsap.timeline();
    // tl.from('.blog-header', {
    //   opacity: 0,
    //   y: 30,
    //   duration: 1,
    //   ease: 'power2.out'
    // }).from('.blog-content', {
    //   opacity: 0,
    //   y: 20,
    //   duration: 0.8,
    //   ease: 'power2.out'
    // }, '-=0.5');
  // }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-block mb-8">
          <Button variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>

        <article>
          <header className="blog-header mb-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {blog.category}
              </span>
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {blog.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {blog.readTime}
              </div>
              <div>By {blog.author}</div>
            </div>
          </header>

          <div className="blog-content">
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {blog.content}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}