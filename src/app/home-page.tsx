'use client'

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps, Metadata } from 'next';

export const metadata: Metadata = {
    title: siteTitle
}

export default function HomePage({
  allPostsData
}: {
  allPostsData: {
    date: string,
    title: string,
    id: string
  }[]
}) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Me gusta el chocolate, tengo una fabrica de chocolate</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({ id, date, title }) => (
              <li className='utilStyles.listItem' key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}