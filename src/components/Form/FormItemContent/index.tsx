import { Input, Select, Radio, Checkbox, Upload, DatePicker } from "antd";
import moment from "moment";
import { useState, useImperativeHandle, forwardRef } from "react";

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

const CustomFormItemContent = forwardRef((props: InputPropsType, ref) => {
  const { type, componentProps } = props;
  const { ...componentPropsRest } = componentProps || {};
  const [value, setValue] = useState(componentPropsRest.defaultValue || "");
  const onChange = (e) => {
    let result = e;
    if (type === "DatePicker") {
      const { formatValue = "YYYY-MM-DD" } = componentProps;
      const m = e?.format?.(formatValue) || null;
      result = m;
    } else if (["Select", "Checkbox"].includes(type)) {
      result = e;
    } else if (e?.target) {
      const { value } = e.target;
      result = value;
    }
    setValue(result);
  };
  const schemaComponentProps = {
    ...componentPropsRest,
    onChange,
  };
  useImperativeHandle(ref, () => ({
    getValue: () => value,
  }));
  switch (type) {
    case "Input":
      return <Input {...schemaComponentProps} />;
    case "Select":
      return <Select {...schemaComponentProps} />;
    case "Radio":
      return <Radio.Group {...schemaComponentProps} />;
    case "Checkbox":
      return <Checkbox.Group {...schemaComponentProps} />;
    case "TextArea":
      return <Input.TextArea {...schemaComponentProps} />;
    case "Upload":
      return <Upload {...schemaComponentProps} />;
    case "DatePicker":
      return <DatePicker {...schemaComponentProps} />;
    default:
      return null;
  }
});

export default CustomFormItemContent;
