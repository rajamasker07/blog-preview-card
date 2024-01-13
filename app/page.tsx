import Image from 'next/image'
import { Card } from './ui/components/card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
      <Card/>
      <div className="text-neutral-800 text-sm">    
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className='text-blue-500 underline'>Frontend Mentor</a>. 
        Coded by <Link href="#" className='text-blue-500 underline'> Rajamasker </Link>.
      </div>
    </main>
  )
}
