import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Post from "./post";
import { Metadata, ResolvingMetadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
    return getAllPostIds()
}

async function getPost(params: Params) {
    const postData = await getPostData(params?.id as string)

    return postData
}

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
    const post = await getPost(params)

    return {
        title: post.title
    }
}

export default async function Page({ params }: { params: Params }) {

    const postData = await getPost(params)

    return <Post postData={postData} />
}