import React from 'react'

interface SignInLayout {
  children: React.ReactNode
}

export default function SignInLayout({ children }: SignInLayout) {
  return (
    <html lang="ja" className="h-screen">
      <body>
        {children}
      </body>
    </html>
  )
}