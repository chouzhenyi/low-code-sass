import CustomForm from "@components/Form";
import type { SchamaType } from "@components/Form/FormType";

const FormPage = () => {
  const schemas: SchamaType[] = [
    {
      label: "姓名",
      type: "Input",
      componentProps: {
        placeholder: "请输入姓名",
      },
    },
    {
      label: "地区",
      type: "Select",
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
      componentProps: {
        format: "YYYY-MM-DD",
      },
    },
    {
      label: "爱好",
      type: "Checkbox",
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
      componentProps: {
        placeholder: "请输入备注",
      },
    },
  ];
  return (
    <div>
      <CustomForm schemas={schemas} />
    </div>
  );
};

export default FormPage;
