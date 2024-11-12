import { notFound } from "next/navigation";

import { getPage } from "utils/getPage";
import { BlockRenderer } from "components/BlockRenderer";

export default async function Page({ params }) {
  const uri = params.slug.join("/");
  const data = await getPage(uri);
  if (!data) {
    notFound();
  }
  return <BlockRenderer blocks={data} />;
}
