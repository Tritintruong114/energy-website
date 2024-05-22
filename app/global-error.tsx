"use client";

import { Container, Heading, Section } from "@/components";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Section className="bg-primary-900">
          <Container>
            <Heading as="h1">404</Heading>
          </Container>
        </Section>
      </body>
    </html>
  );
}
