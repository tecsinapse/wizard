import {ComponentType, ReactNode} from 'react';

export interface WizardProps {
  children: ReactNode;
  activeStep: number;
  onChange(newStep: number): string | undefined;
  classes?: object;
  className?: string;
  isSubmitting?: boolean;
  stepText?: string;
  hideBottomStepLabel?: boolean;
}

declare const Wizard: ComponentType<WizardProps>;


