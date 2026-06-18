'use client'

import Link from 'next/link'
import { CheckCircle, Phone, Clock, ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ThankYouPage() {
  const [seconds, setSeconds] = useState(10)
  const router = useRouter()

  useEffect(() => {
    if (seconds === 0) {
      router.push('/')
      return
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [seconds, router])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-[5%] py-16">
      <div className="max-w-lg w-full">

        {/* Card */}
        <div className="bg-white rounded-3xl p-10 text-center shadow-2xl flex flex-col items-center gap-6">

          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle size={42} className="text-green-500" />
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-2xl font-black text-[#013a5e] mb-2">You&apos;re All Set!</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Thank you for reaching out. Your request has been successfully submitted.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#e2edf5]" />

          {/* Info cards */}
          <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-4 bg-[#f7fafc] rounded-xl px-5 py-4">
              <div className="w-10 h-10 bg-[#01507c]/10 rounded-lg flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#01507c]" />
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-0.5">Next Step</p>
                <p className="text-sm font-bold text-[#013a5e]">A counsellor will call you shortly</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#f7fafc] rounded-xl px-5 py-4">
              <div className="w-10 h-10 bg-[#f46f1a]/10 rounded-lg flex items-center justify-center shrink-0">
                <Clock size={18} className="text-[#f46f1a]" />
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-0.5">Response Time</p>
                <p className="text-sm font-bold text-[#013a5e]">Within 30 minutes during working hours</p>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <p className="text-xs text-gray-400 font-medium">
            Redirecting to home in{' '}
            <span className="font-black text-[#01507c]">{seconds}s</span>
          </p>

          {/* Back link */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#01507c] font-medium transition-colors duration-150"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

        </div>
      </div>
    </main>
  )
}