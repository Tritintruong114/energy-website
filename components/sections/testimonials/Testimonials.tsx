import { Heading, SubTitle } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import { getHomepage } from "@/sanity/queries/page";
import { TestimonialsCarousel } from "./Testimonials-carousel";

export const Testimonials = async () => {
  const data = await getHomepage();
  const { testimonials } = data;
  return (
    <Section className="bg-secondary-950 rounded-3xl">
      <Container className="flex flex-col items-center">
        <SubTitle subTitle={testimonials.tagline} />
        <Heading
          as="h2"
          className="text-section leading-none text-white text-left w-full"
        >
          {testimonials.heading}
        </Heading>
        <div className="mt-24">
          <TestimonialsCarousel users={data.testimonials} />
        </div>
      </Container>
    </Section>
  );
};
