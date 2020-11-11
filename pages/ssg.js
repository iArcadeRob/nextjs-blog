import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import { getStaticPageMetadata } from '../lib/posts';
import Link from 'next/link';
import IDate from '../components/idate';

export default function Home({ allStaticPages }) {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <section className={utilStyles.headingMd}></section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}></section>
            <h2>Static Site Rendered Pages</h2>
            <h3>Prefetched</h3>
            <ul>
                {allStaticPages.map(({ id, title, date }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/ssg/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <IDate dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
            <h3>Prefetch Disabled</h3>
            <ul>
                <li className={utilStyles.listItem}>
                    <Link href='/posts/ssg/ssg0' prefetch={false}>
                        <a>Large Example</a>
                    </Link>
                </li>
                <li className={utilStyles.listItem}>
                    <Link href='/posts/ssg/ssg1' prefetch={false}>
                        <a>Barrel - Part 1</a>
                    </Link>
                </li>
                <li className={utilStyles.listItem}>
                    <Link href='/posts/ssg/ssg2' prefetch={false}>
                        <a>Petit Trees (sketch)</a>
                    </Link>
                </li>
                <li className={utilStyles.listItem}>
                    <Link href='/posts/ssg/ssg3' prefetch={false}>
                        <a>Island (sketch)</a>
                    </Link>
                </li>
            </ul>
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