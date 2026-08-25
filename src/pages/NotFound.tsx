import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Layout";

export function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-tertiary">
          404
        </p>
        <h1 className="mb-4 font-serif text-2xl font-semibold text-text-primary">
          Nothing on record at this reference.
        </h1>
        <Link to="/" className="font-mono text-xs uppercase tracking-wider text-accent">
          → Back to the homepage
        </Link>
      </div>
    </Container>
  );
}
