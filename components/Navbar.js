import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'><a><Image src='/logo.jpg' alt='site logo' width={88} height={88} /></a></Link>
      </div>
      <Link href='/'><a>首頁</a></Link>
      <Link href='/about'><a>關於</a></Link>
      <Link href='/deens/'><a>商品列表</a></Link>
      <Link href='/todos'><a>Todos</a></Link>
    </nav>
  )
}

export default Navbar