import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
    <Card/>
      <h1 className='bg-green-400  font-semibold text-black rounded- xl: animate-pulse p-4' >Tailwind test</h1>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto animate-bounce" src="https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium border-lime-200 font-semibold text-red-400">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>

    </>
  )
}

export default App
