import Layout from '../../../components/layout'
import { getPostData } from '../../../lib/posts'
import Head from 'next/head'
import IDate from '../../../components/idate'
import utilStyles from '../../../styles/utils.module.css'

export default function Post({postData}) {
    return <Layout>
        <Head>
            <title>{postData.id}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <IDate dateString={postData.date} />
            </div>
            <img src={postData.img} alt={postData.alt} />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>
}

export async function getStaticProps() {
    const postData = await getPostData('0');
    return {
        props: {
            postData
        }
    }
}