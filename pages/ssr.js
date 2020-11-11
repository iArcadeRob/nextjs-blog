import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <section className={utilStyles.headingMd}></section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}></section>
            <h2>Server Side Rendered Pages</h2>
            <ul>
                <li className={utilStyles.listItem}>
                    <Link href="/posts/ssr/ssr0">
                        <a>Large Example</a>
                    </Link>
                </li>
                <li className={utilStyles.listItem}>
                    <Link href="/posts/ssr/ssr1">
                        <a>Barrel - Part 1</a>
                    </Link>
                </li>
                <li className={utilStyles.listItem}>
                    <Link href="/posts/ssr/ssr2">
                        <a>Petit Trees (sketch)</a>
                    </Link>
                </li>
                <li className={utilStyles.listItem}>
                    <Link href="/posts/ssr/ssr3">
                        <a>Island (sketch)</a>
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}