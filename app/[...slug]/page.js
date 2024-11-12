import { notFound } from "next/navigation";

import { getPage } from "utils/getPage";
import { BlockRenderer } from "components/BlockRenderer";
import { getSeo } from "utils/getSeo";

export async function generateMetadata({ params }) {
  const uri = params.slug.join("/");
  const seo = await getSeo(uri);
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
  };
}

export default async function Page({ params }) {
  const uri = params.slug.join("/");
  const data = await getPage(uri);
  if (!data) {
    notFound();
  }
  return <BlockRenderer blocks={data} />;
}
