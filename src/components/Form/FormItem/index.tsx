import { Form } from "antd";

type FormItemProps = {
  label?: string;
  name?: string;
  children?: any;
};

const FormItem = (props: FormItemProps) => {
  const { label = "", name, children } = props;
  return (
    <Form.Item label={label} name={name}>
      {children}
    </Form.Item>
  );
};

export default FormItem;
