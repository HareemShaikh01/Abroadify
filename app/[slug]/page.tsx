import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/lib/destinations-data";
import DestinationHero from "@/components/destinations/DestinationHero";
import DestinationTrustBar from "@/components/destinations/DestinationTrustBar";
import DestinationWhy from "@/components/destinations/DestinationWhy";
import DestinationFields from "@/components/destinations/DestinationFields";
import DestinationProcess from "@/components/destinations/DestinationProcess";
import DestinationNote from "@/components/destinations/DestinationNote";
import DestinationFAQ from "@/components/destinations/DestinationFAQ";
import DestinationCompare from "@/components/destinations/DestinationCompare";
import DestinationCTA from "@/components/destinations/DestinationCTA";

export const dynamicParams = true;

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getDestination(slug);
  if (!data) return {};

  return {
    title: `${data.heroHeadline} | Abroadify`,
    description: data.heroSubtext,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getDestination(slug);

  if (!data) notFound();

  return (
    <>
      <DestinationHero data={data} />
      <DestinationTrustBar data={data} />
      <DestinationWhy data={data} />
      <DestinationFields data={data} />
      <DestinationProcess data={data} />
      <DestinationNote data={data} />
      <DestinationFAQ data={data} />
      <DestinationCompare data={data} />
      <DestinationCTA data={data} />
    </>
  );
}