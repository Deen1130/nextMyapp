import styles from '../../styles/Deens.module.css'
import Link from 'next/link'

export const getStaticPaths = async () => {
  const res = await fetch('https://kittenflutter-56047.firebaseio.com/deens.json')
  const data = await res.json()

  const paths = data.map(data => {
    return {
      params: { id: data.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://kittenflutter-56047.firebaseio.com/deens/' + id + '.json')
  const data = await res.json()

  return {
    props: { deen: data }
  }
}

const Details = ({ deen }) => {
  return (
    <div className={styles['details-box']}>
      <div>
        <h2>{deen.name}</h2>
        <p>{deen.email}</p>
      </div>
      <br />
      <Link href='/deens/'>
        <a>返回商品列表</a>
      </Link>
    </div>

  )
}
export default Details