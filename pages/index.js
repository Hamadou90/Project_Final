import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"></div>
      <Head>
        <title>Tourist Destination Portal</title>
        <meta name="description" content="Final Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <h3 className={styles.title}>
          Welcome to T_Rec_Sys
        </h3>

        <div className={styles.grid}>
          <div className='{styles.card} w-max m-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta, excepturi deserunt in velit voluptatum, amet assumenda aspernatur inventore quaerat ad fuga animi. Libero distinctio, eligendi dolores amet veniam nam pariatur necessitatibus aperiam at cum delectus voluptatibus autem aliquam est commodi quo, voluptatum aliquid laborum qui alias, reiciendis similique. Molestiae recusandae voluptatum ipsam quas, modi harum. Corporis vel blanditiis, deleniti, odio distinctio officiis porro ipsa id adipisci, fugit officia dolor.
          </div>
          <div className='{styles.card} w-max m-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta, excepturi deserunt in velit voluptatum, amet assumenda aspernatur inventore quaerat ad fuga animi. Libero distinctio, eligendi dolores amet veniam nam pariatur necessitatibus aperiam at cum delectus voluptatibus autem aliquam est commodi quo, voluptatum aliquid laborum qui alias, reiciendis similique. Molestiae recusandae voluptatum ipsam quas, modi harum. Corporis vel blanditiis, deleniti, odio distinctio officiis porro ipsa id adipisci, fugit officia dolor.
          </div>
          <div className='{styles.card} w-max m-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta, excepturi deserunt in velit voluptatum, amet assumenda aspernatur inventore quaerat ad fuga animi. Libero distinctio, eligendi dolores amet veniam nam pariatur necessitatibus aperiam at cum delectus voluptatibus autem aliquam est commodi quo, voluptatum aliquid laborum qui alias, reiciendis similique. Molestiae recusandae voluptatum ipsam quas, modi harum. Corporis vel blanditiis, deleniti, odio distinctio officiis porro ipsa id adipisci, fugit officia dolor.
          </div>
          <div className='{styles.card} w-max m-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta, excepturi deserunt in velit voluptatum, amet assumenda aspernatur inventore quaerat ad fuga animi. Libero distinctio, eligendi dolores amet veniam nam pariatur necessitatibus aperiam at cum delectus voluptatibus autem aliquam est commodi quo, voluptatum aliquid laborum qui alias, reiciendis similique. Molestiae recusandae voluptatum ipsam quas, modi harum. Corporis vel blanditiis, deleniti, odio distinctio officiis porro ipsa id adipisci, fugit officia dolor.
          </div>
        </div>

      </main>
    </div>
  )
}
