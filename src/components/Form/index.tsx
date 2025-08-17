import { createRef, forwardRef, useImperativeHandle } from "react";
import { Form, Row, Col, Button } from "antd";
import type { FormProps } from "antd";
import FormItem from "./FormItem";
import FormItemContent from "./FormItemContent";
import type { SchamaType } from "./FormType";
import { useEffect } from "react";

type CustomFormProps = {
  schemas: SchamaType[];
  lineCount?: 2 | 3 | 4;
};
const CustomForm = forwardRef((props: CustomFormProps, formRef) => {
  const { schemas = [], lineCount = 4 } = props;
  const schemasLen = schemas.length;
  const restCount = schemasLen % lineCount;
  const offsetCount = restCount === 0 ? 0 : lineCount - restCount - 1;
  const offset = offsetCount * (24 / lineCount);
  const span = 24 / lineCount;
  const formLayout: FormProps = {
    labelCol: { span: span },
    wrapperCol: { span: span * 3 },
  };
  const renderSchemas = schemas.map((schema) => {
    return {
      ...schema,
      ref: createRef(),
    };
  });
  const [form] = Form.useForm();
  const preGetFieldsValue = () => {
    const formValues = renderSchemas.reduce((acc, schema) => {
      const { name, ref } = schema;
      if (!name) {
        console.warn("Schema is missing 'name' property:", schema);
        return acc;
      }
      const value = ref.current?.getValue();
      return {
        ...acc,
        [name]: value,
      };
    }, {});
    form.setFieldsValue(formValues);
  };
  const submitForm = async () => {
    preGetFieldsValue();
    // You can handle form submission here, e.g., send data to an API or process
    form
      .validateFields()
      .then((values) => {
        console.log("Form values:", values);
      })
      .catch((errorInfo) => {
        console.error("Validation failed:", errorInfo);
      });
  };
  useEffect(() => {
    const values = schemas.reduce((acc, schema) => {
      const { name, componentProps } = schema;
      if (!name) {
        console.warn("Schema is missing 'name' property:", schema);
        return acc;
      }
      const defaultValue = componentProps?.defaultValue;
      return {
        ...acc,
        [name]: defaultValue,
      };
    }, {});
    form.setFieldsValue(values);
  }, [schemas, form]);
  useImperativeHandle(formRef, () => ({
    getFieldsValue: () => {
      preGetFieldsValue();
      return form.getFieldsValue();
    },
    setFieldsValue: (values) => {
      form.setFieldsValue(values);
    },
  }));
  return (
    <Form form={form} {...formLayout}>
      <Row>
        {renderSchemas.map((schema, index) => {
          return (
            <Col key={index} span={6}>
              <FormItem label={schema.label} name={schema.name}>
                <div>
                  <FormItemContent {...schema} ref={schema.ref} />
                </div>
              </FormItem>
            </Col>
          );
        })}
        <Col span={6} offset={offset}>
          <Button type="primary" onClick={submitForm}>
            提交
          </Button>
        </Col>
      </Row>
    </Form>
  );
});

export default CustomForm;
