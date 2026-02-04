import { Suspense } from 'react'
import LoginContent from './LoginContent'

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0b]">
        <div className="text-blue-500">Loading access portal...</div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  )
}