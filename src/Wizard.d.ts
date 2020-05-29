import { ReactNode } from 'react';

export type Variant = 'auto' | 'web' | 'mobile';

export interface LabelsProps {
  finishText?: string;
  nextText?: string;
  backText?: string;
  nextMobileLabel?: string;
}

export interface WizardProps {
  /** Element children to be rendered */
  children: ReactNode;
  /** Active step index */
  activeStep: number;
  /** Change step handler */
  onChange(newStep: number): string | undefined;
  /** Styles object to decorate component */
  classes?: object;
  /** CSS class name applied to root div */
  className?: string;
  /** Subitting loading state */
  isSubmitting?: boolean;
  /** Choose wich variant of wizard should render */
  variant?: Variant;
  /** Size of circular stepper (mobile) */
  size?: number;
  /** Stroke width of circular stepper (mobile) */
  strokeWidth?: number;
  /** Labels used on Wizard */
  labels?: LabelsProps;
}

export default function Wizard(props: WizardProps): JSX.Element;
