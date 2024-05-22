import { Button, Container, Heading, Section } from "@/components";
import Notfound from "@/components/elements/icons/Notfound";
import Notfoundbg from "@/components/elements/icons/Notfound-bg";

export default function NotFound() {
  return (
    <Section className="bg-secondary-950 h-screen flex items-center justify-center">
      <Notfoundbg />
      <Container className="w-full relative overflow-hidden flex flex-col items-center justify-center">
        <div className="max-w-xl text-white flex flex-col items-center justify-center">
          <Notfound />
          <Heading as="h1">
            The page you are looking for was moved, removed, renamed or might
            have never existed! The page you are looking for was moved, removed,
            renamed or might have never existed!
          </Heading>

          <Button variant="secondary" className="text-black">
            Back to home
          </Button>
        </div>
      </Container>
    </Section>
  );
}
