import type {ReactNode} from 'react';

type StepCardProps = {
  number: number;
  title: string;
  children: ReactNode;
};

export default function StepCard({number, title, children}: StepCardProps) {
  return (
    <section className="manual-step">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <span className="manual-step__number">{number}</span>
        <h3>{title}</h3>
      </div>
      <div>{children}</div>
    </section>
  );
}
