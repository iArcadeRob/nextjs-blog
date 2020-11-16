import Layout from '../../../components/layout'
import Head from 'next/head'
import Link from 'next/link';
import IDate from '../../../components/idate'
import utilStyles from '../../../styles/utils.module.css'

export default function Page({ data }) {
    const count = data.number === 0 ? 0 : data.number + 1;
    return <Layout>
        <Head>
            <title>{4}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{data.title}</h1>
            <div className={utilStyles.lightText}>
                <IDate dateString={'2020-01-01'} />
            </div>
            <img src={data.img} alt={data.alt} />
            <div dangerouslySetInnerHTML={{ __html: `<span>${data.transcript}</span>` }} />
            <br />
            <span>{count}</span>
            <Link href={{ pathname: '/posts/ssr/ssr0', query: { name: '1' } }}>
                <a>Barrel - Part 1</a>
            </Link>
        </article>
    </Layout>;
}

// This gets called on every request
export async function getServerSideProps({query}) {
    //Fetch data from external API
    const res = await fetch(`https://xkcd.com/4/info.0.json`);
    const data = await res.json();

    const res2 = await fetch(`http://asdfast.beobit.net/api/?length=10000`);
    const data2 = await res2.json();

    data.transcript = data2.text;
    data.img = '/images/island.jpg';
    data.number = query.name ? parseInt(query.name) : 0;


    return { props: { data } };
}