// app/not-found.tsx
'use client'
import { useEffect } from 'react'
export default function NotFound() {
  useEffect(() => {
    window.location.href = 'https://jinjiutech.com';
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Page not found</h1>
      <p className="text-sm text-gray-500">Redirecting to homepage...</p>
    </div>
  )
}
