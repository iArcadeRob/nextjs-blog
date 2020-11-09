import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getStaticPageMetadata } from '../lib/posts'
import Link from 'next/link'
import IDate from '../components/idate'

export default function Home({ allStaticPages = [] }) {
  return (
    <Layout home>
      <Head>
        <title>V2</title>
      </Head>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>(Static HTML)</h2>
        <ul className={utilStyles.list}>
        <li className={utilStyles.listItem} key={99}><a href="/static-pages/0.html">Large Example</a></li>
        </ul>
        <h2 className={utilStyles.headingLg}>(Static Site Generation)</h2>
        <ul>
          {allStaticPages.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <IDate dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <h2 className={utilStyles.headingLg}>(Server Side Rendering)</h2>
        <ul>
          <li>
          <Link href="/posts/z">
            <a>Large</a>
          </Link>
          </li>
          <li>
          <Link href="/posts/a">
            <a>A</a>
          </Link>
          </li>
          <li>
          <Link href="/posts/b">
            <a>B</a>
          </Link>
          </li>
          <li>
          <Link href="/posts/c">
            <a>C</a>
          </Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allStaticPages = getStaticPageMetadata();
  return {
    props: {
      allStaticPages
    }
  }
}