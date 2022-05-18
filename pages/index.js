import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>阿展前端工程師 | 首頁</title>
        <meta name='keywords' content='deen' />
      </Head>
      <div>
        <h1 className={styles.title}>首頁</h1>
        <p className={styles.text}>您好，我是阿展，善於思考獨立分析並解決問題，熟悉HTML5、CSS3、JavaScript、jQuery語言及Vue3、React17前端框架，有串接API經驗，曾接觸過Unity、Flutter開發 Android/iOS App，目前走向前端工程師，雖經驗少，但時時刻刻的不斷追求新技術及積極學習複習做筆記，為公司帶來創新與新技術，英文聽與說略懂，期盼有機會與貴公司進一步參與面談，誠摯感謝。</p>
        <Link href='/deens/'>
          <a className={styles.btn}>觀看商品列表</a>
        </Link>
      </div>
    </>
  )
}
