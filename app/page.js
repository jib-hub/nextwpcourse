import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage";
import { getSeo } from "utils/getSeo";

export async function generateMetadata() {
  const seo = await getSeo("/");
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
  };
}

export default async function Home() {
  const data = await getPage("/");
  console.log({ data });
  return <BlockRenderer blocks={data} />;
}
