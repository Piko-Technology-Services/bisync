import { notFound } from "next/navigation";
import ServiceDetails from "../../components/ServiceDetails";
import { services } from "../../data/services";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return <ServiceDetails service={service} />;
}