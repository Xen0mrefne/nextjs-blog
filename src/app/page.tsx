import { Metadata } from "next";
import { getSortedPostsData } from "../lib/posts";
import HomePage from "./home-page";
import { siteTitle } from "../components/layout";

export const metadata: Metadata = {
    title: siteTitle
}

export default async function Page() {
    const allPostsData = getSortedPostsData()

    return (
        <HomePage allPostsData={allPostsData } />
    )
}