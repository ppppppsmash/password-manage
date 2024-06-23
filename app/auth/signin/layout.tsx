import React from 'react'
import { BackgroundBeams } from '../../../components/effective-ui/background-beams'

interface SignInLayout {
  children: React.ReactNode
}

export default function SignInLayout({ children }: SignInLayout) {
  return (
    <html lang="ja" className="h-screen bg-neutral-950">
      <body>
        <div className="flex flex-col justify-center h-screen items-center bg-transparent dark:bg-neutral-950 relative z-50">
          <h1 className="relative z-50 text-5xl sm:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600
            text-center font-sans font-bold"
          >
            Password Manager
          </h1>

          {children}
        </div>
        <BackgroundBeams />
      </body>
    </html>
  )
}