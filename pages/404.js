import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className='not-found'>
      <h2>找不到頁面</h2>
      <p>3秒後回到<Link href='/'><a>首頁</a></Link>...</p>
    </div>
  )
}

export default NotFound