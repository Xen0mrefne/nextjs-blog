import Head from "next/head";
import Layout from "../../../components/layout";
import Date from "../../../components/date";
import utilStyles from "../../../styles/utils.module.css"


export default function Post({
    postData
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {

    return (
        <Layout>

            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>

                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
            </article>
        </Layout>
    )
}