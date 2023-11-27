import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QR Code Generator',
  description: 'QR Code Generator App, Easy adn secure without saving any single bit of your data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>
          Generate QR Code
        </title>
        <meta
          name="description"
          content="QR Code Generator App: Easy and secure webiste to generate your QR Code for websites and other social media single post such as poster, picture and text content"
          key="desc"
        />
        <meta name="google-site-verification" content="ZN_O3DSVGmPNxLUfAeAH7v58siSR1CWRVYXYuVP6Im0" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
