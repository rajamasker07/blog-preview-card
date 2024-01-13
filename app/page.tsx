import Image from 'next/image'
import { Card } from './ui/components/card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid place-items-center justify-center min-h-screen gap-2">
      <Card/>
    </main>
  )
}
