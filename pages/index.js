import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getStaticPageMetadata } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allStaticPages = [] }) {
  return (
    <Layout home>
      <Head>
        <title>V2</title>
      </Head>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog (Static Site Generation)</h2>
        <ul className={utilStyles.list}>
        <li className={utilStyles.listItem} key={99}><a href="/posts/0">Regular Link - Large Example</a></li>
          {allStaticPages.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
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