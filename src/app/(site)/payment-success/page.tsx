import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Successful | SignalizeAI",
  description: "Your payment has been processed successfully.",
};

const PaymentSuccessPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-black font-sans">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white/60 p-0 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/60">
          
          <div className="relative p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 ring-1 ring-green-500/20">
              <svg
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Payment Successful
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Welcome to SignalizeAI Premium. Your account has been upgraded.
            </p>
          </div>

          <div className="bg-gray-50/50 px-8 py-6 dark:bg-white/5 border-t border-b border-gray-200 dark:border-white/10">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Amount Paid</span>
                <span className="font-semibold text-gray-900 dark:text-white">$29.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Date</span>
                <span className="font-medium text-gray-900 dark:text-white">Jan 13, 2026</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Payment ID</span>
                <span className="font-mono text-xs text-gray-500 bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded">
                  PID-2024-X99
                </span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <Link
              href="/dashboard"
              className="group relative flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Access Dashboard
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <div className="mt-4 text-center">
              <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
        
        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
          Need help? <a href="mailto:support@signalizeai.com" className="hover:text-primary underline">Contact Support</a>
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;