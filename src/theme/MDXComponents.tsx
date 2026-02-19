import MDXComponents from '@theme-original/MDXComponents';
import type MDXComponentsType from '@theme/MDXComponents';
import ChecklistItem from '@site/src/components/ChecklistItem';
import StepCard from '@site/src/components/StepCard';
import TroubleshootBox from '@site/src/components/TroubleshootBox';

const components: MDXComponentsType = {
  ...MDXComponents,
  ChecklistItem,
  StepCard,
  TroubleshootBox,
};

export default components;
