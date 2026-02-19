import type {ReactNode} from 'react';

type StepCardProps = {
  number: number;
  title: string;
  children: ReactNode;
};

export default function StepCard({number, title, children}: StepCardProps) {
  return (
    <section className="manual-step">
      <h3>
        Paso {number}: {title}
      </h3>
      <div>{children}</div>
    </section>
  );
}
