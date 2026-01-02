"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function Carousel({
  children,
  className,
  itemsPerPage = 2,
}: {
  children: React.ReactNode;
  className?: string;
  itemsPerPage?: number;
}) {
  const items = React.Children.toArray(children);
  const pages: React.ReactNode[][] = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    pages.push(items.slice(i, i + itemsPerPage));
  }
  const [index, setIndex] = React.useState(0);
  const prev = () => setIndex((i) => (i - 1 + pages.length) % pages.length);
  const next = () => setIndex((i) => (i + 1) % pages.length);
  return (
    <div className={className}>
      <div className="relative mx-auto w-full max-w-[800px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {pages.map((page, i) => (
            <div key={i} className="w-full shrink-0">
              <div className="flex flex-wrap justify-center gap-3">
                {page.map((child, j) => (
                  <div
                    key={j}
                    className="w-full sm:basis-[calc(50%-0.375rem)] flex justify-center"
                  >
                    {child}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        <Button variant="outline" size="sm" onClick={prev}>
          이전
        </Button>
        <div className="flex items-center gap-1">
          {pages.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`inline-block h-2 w-2 rounded-full ${i === index ? "bg-foreground" : "bg-muted"
                } cursor-pointer`}
            />
          ))}
        </div>
        <Button variant="outline" size="sm" onClick={next}>
          다음
        </Button>
      </div>
    </div>
  );
}
