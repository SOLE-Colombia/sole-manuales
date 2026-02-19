import {useId, useState} from 'react';
import type {ReactNode} from 'react';

type ChecklistItemProps = {
  children: ReactNode;
};

export default function ChecklistItem({children}: ChecklistItemProps) {
  const [checked, setChecked] = useState(false);
  const id = useId();

  return (
    <label className="manual-check" htmlFor={id}>
      <input id={id} type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <span>{children}</span>
    </label>
  );
}
