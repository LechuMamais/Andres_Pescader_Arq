export default function Loading() {
  return (
    <div className='animate-pulse p-8'>
      <div className='h-10 bg-gray-300 rounded mb-6 w-1/2'></div>
      <div className='h-6 bg-gray-300 rounded mb-4 w-3/4'></div>
      <div className='h-96 bg-gray-300 rounded mb-6 w-full'></div>
      <div className='space-y-4'>
        <div className='h-4 bg-gray-300 rounded w-full'></div>
        <div className='h-4 bg-gray-300 rounded w-5/6'></div>
        <div className='h-4 bg-gray-300 rounded w-3/4'></div>
      </div>
    </div>
  )
}
