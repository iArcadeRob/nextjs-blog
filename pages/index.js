import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <section className={utilStyles.headingMd}></section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}></section>
            <Link href='/ssg'>
                <h2><a>Static Site Generation</a></h2>
            </Link>
            <Link href='/ssr'>
                <h2><a>Server Side Rendering</a></h2>
            </Link>
            <Link href='/client'>
                <h2><a>Client Side Rendering</a></h2>
            </Link>
        </Layout>
    )
}