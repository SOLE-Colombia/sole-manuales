import type {ReactNode} from 'react';

type TroubleshootBoxProps = {
  title?: string;
  children: ReactNode;
};

export default function TroubleshootBox({
  title = 'Si falla, haz esto',
  children,
}: TroubleshootBoxProps) {
  return (
    <aside className="manual-warning">
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}
