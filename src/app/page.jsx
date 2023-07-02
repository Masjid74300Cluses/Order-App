import Generator from './qrCode'
import HomePage from './homepage/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <HomePage />

      <div className='py-5'>
        <Generator />
      </div>
    </main>
  )
}
