import Layout from '../../components/layout'
import Head from 'next/head'
import IDate from '../../components/idate'
import utilStyles from '../../styles/utils.module.css'

export default function Page({ data }) {
    return <Layout>
        <Head>
            <title>{1}</title>
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

// This gets called on every request
export async function getServerSideProps() {
    //Fetch data from external API
    const res = await fetch(`https://xkcd.com/1/info.0.json`);
    const data = await res.json();

    return { props: { data } };
}

/*
{
  month: '1',
  num: 1,
  link: '',
  year: '2006',
  news: '',
  safe_title: 'Barrel - Part 1',
  transcript: '[[A boy sits in a barrel which is floating in an ocean.]]\n' +
    "Boy: I wonder where I'll float next?\n" +
    '[[The barrel drifts into the distance. Nothing else can be seen.]]\n' +
    "{{Alt: Don't we all.}}",
  alt: "Don't we all.",
  img: 'https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg',
  title: 'Barrel - Part 1',
  day: '1'
}
*/