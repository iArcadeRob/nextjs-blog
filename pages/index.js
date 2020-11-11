import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <Layout>
            <Head>
            <meta charset="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
            <meta name="description" content="Next JS Prototype"/>
            <meta name="keywords" content="Next"/>
            <title>Next JS Prototype</title>

            <meta name="theme-color" content="red"/>
            <meta name="mobile-web-app-capable" content="yes"/>

            <meta name="apple-mobile-web-app-title" content="Next JS Prototype"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="default"/>

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