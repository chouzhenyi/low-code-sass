import { Input, Select, Radio, Checkbox, Upload, DatePicker } from "antd";

export type CompType =
  | "Input"
  | "Select"
  | "Radio"
  | "Checkbox"
  | "TextArea"
  | "Upload"
  | "DatePicker";

type InputPropsType = {
  type: CompType;
  componentProps?: Record<string, any>;
};

const CustomFormItemContent = (props: InputPropsType) => {
  const { type, componentProps } = props;
  switch (type) {
    case "Input":
      return <Input {...componentProps} />;
    case "Select":
      return <Select {...componentProps} />;
    case "Radio":
      return <Radio.Group {...componentProps} />;
    case "Checkbox":
      return <Checkbox.Group {...componentProps} />;
    case "TextArea":
      return <Input.TextArea {...componentProps} />;
    case "Upload":
      return <Upload {...componentProps} />;
    case "DatePicker":
      return <DatePicker {...componentProps} />;
    default:
      return null;
  }
};

export default CustomFormItemContent;
