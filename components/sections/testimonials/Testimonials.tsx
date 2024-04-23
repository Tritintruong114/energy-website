import { Heading, SubTitle } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import { TestimonialsCarousel } from "./Testimonials-carousel";

export const Testimonials = () => {
  return (
    <Section className="bg-secondary-950 rounded-3xl">
      <Container className="flex flex-col items-center">
        <SubTitle subTitle="Testimonials" />
        <Heading
          as="h2"
          className="text-section leading-none text-white text-left w-full"
        >
          {" "}
          What our customers say
        </Heading>
        <div className="mt-24">
          <TestimonialsCarousel />
        </div>
      </Container>
    </Section>
  );
};
