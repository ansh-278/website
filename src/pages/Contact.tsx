import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";
import { EmptyState } from "@/components/ui/EmptyState";

export function Contact() {
  return (
    <Container>
      <PageHeader eyebrow="Contact" title="Contact" spacingClass="pb-8" />
      <div className="max-w-[58ch] pb-24">
        <EmptyState
          label="Not yet supplied"
          message="A real contact email will be added here — once it is, this becomes a working mailto link rather than a placeholder."
        />
      </div>
    </Container>
  );
}
