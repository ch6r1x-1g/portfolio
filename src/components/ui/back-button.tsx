"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      size="sm"
      className={className}
      onClick={() => router.back()}
    >
      ← 전으로 돌아가기
    </Button>
  );
}

