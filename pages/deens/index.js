import styles from '../../styles/Deens.module.css'
import Link from 'next/link'

export const getStaticProps = async (context) => {
  const res = await fetch('https://kittenflutter-56047.firebaseio.com/deens.json')
  const data = await res.json()

  return {
    props: { deens: data }
  }
}

const Deens = ({ deens }) => {
  return (
    <div>
      <h1>Deens 商品列表</h1>
      {deens.map(data => (
        <Link href={'/deens/' + data.id} key={data.id}>
          <a className={styles.single}>
            <h3>{data.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}
export default Deens