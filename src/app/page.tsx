import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Hello World!</h1>
     <a href="/about">Visit W3Schools</a> 
     <link href='/about'>About</link>
    </main>
  )
}
