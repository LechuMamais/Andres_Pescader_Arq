'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex flex-col items-center justify-center p-8 text-center'>
      <h2 className='text-2xl font-bold mb-4'>¡Ups! Algo salió mal.</h2>
      <p className='text-gray-500 mb-6'>
        No pudimos cargar este proyecto. Intenta recargar la página.
      </p>
      <button
        className='px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition'
        onClick={() => reset()}
      >
        Reintentar
      </button>
    </div>
  )
}
