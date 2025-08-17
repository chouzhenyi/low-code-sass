import { CompType } from "./FormItemContent";

export type SchamaType = {
  type: CompType;
  label: string;
  name: string;
  componentProps?: Record<string, any>;
};
