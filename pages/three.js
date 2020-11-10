import useSWR from 'swr';
import Layout from '../components/layout'
import Head from 'next/head'
import IDate from '../components/idate'
import utilStyles from '../styles/utils.module.css'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Local() {
const { data, error } = useSWR('/api/three', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  // render data
  console.log('data, data', data);
  return <Layout>
    <Head>
        <title>{3}</title>
    </Head>
    <article>
        <h1 className={utilStyles.headingXl}>{data.title}</h1>
        <div className={utilStyles.lightText}>
            <IDate dateString={'2020-01-01'} />
        </div>
        <img src={data.img} alt={data.alt} />
        <div dangerouslySetInnerHTML={{ __html: `<span>${data.transcript}</span>` }} />
    </article>
  </Layout>;
}