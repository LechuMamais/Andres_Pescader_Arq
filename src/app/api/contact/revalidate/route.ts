import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const secret = searchParams.get('secret')
  const path = searchParams.get('path') || '/'

  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  try {
    revalidatePath(path)
    return NextResponse.json({ revalidated: true, path })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 })
  }
}
