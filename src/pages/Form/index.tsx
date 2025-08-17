import { useRef } from "react";
import CustomForm from "@components/Form";
import type { SchamaType } from "@components/Form/FormType";
import styles from "./index.module.scss";
import { Button } from "antd";
const FormPage = () => {
  const schemas: SchamaType[] = [
    {
      label: "姓名",
      type: "Input",
      name: "name",
      componentProps: {
        placeholder: "请输入姓名",
      },
    },
    {
      label: "地区",
      type: "Select",
      name: "region",
      componentProps: {
        options: [
          {
            label: "北京",
            value: "1",
          },
        ],
      },
    },
    {
      label: "性别",
      type: "Radio",
      name: "gender",
      componentProps: {
        options: [
          {
            label: "男",
            value: "1",
          },
          {
            label: "女",
            value: "2",
          },
        ],
        defaultValue: "1",
      },
    },
    {
      label: "出发时间",
      type: "DatePicker",
      name: "departureDate",
      componentProps: {
        format: "YYYY-MM-DD",
      },
    },
    {
      label: "爱好",
      type: "Checkbox",
      name: "hobbies",
      componentProps: {
        options: [
          {
            label: "篮球",
            value: "1",
          },
          {
            label: "足球",
            value: "2",
          },
          {
            label: "跑步",
            value: "3",
          },
        ],
        defaultValue: ["1", "2", "3"],
      },
    },
    {
      label: "备注",
      type: "TextArea",
      name: "remark",
      componentProps: {
        placeholder: "请输入备注",
      },
    },
  ];
  const formRef = useRef(null);
  const submitForm = () => {
    const v = formRef.current?.getFieldsValue?.();
    console.log("Form values:", v);
  };
  const onReset = () => {
    formRef.current?.setFieldsValue?.({
      name: "",
      region: undefined,
      gender: undefined,
      departureDate: "2025-01-01",
      hobbies: [],
      remark: "王德发",
    });
  };
  return (
    <div className={styles.wrapper}>
      <CustomForm schemas={schemas} ref={formRef} />
      <Button onClick={submitForm}>提交</Button>
      <Button onClick={onReset}>重置</Button>
    </div>
  );
};

export default FormPage;
