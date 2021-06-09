import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignIn = () => {
  //const { user } = this.state;

  const history = useHistory();

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(values.username);
    console.log(values.password);
    fetch("http://127.0.0.1:8000/api-token-auth/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("token", response.token);
        history.replace("/clientdrawer");
      })
      .catch((error) => {
        console.log("error from submitting: " + error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Form
          style={{ width: "50%" }}
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

// <Formwrap>
//     <Icon to="/">consulting service system</Icon>
//     <FormContent>
//         <Form  onSubmit={(values)=>{

//             console.log("here");

//             fetch("http://127.0.0.1:8000/api/token/", {
//                  method: "POST",
//                  headers: {
//                      // "Content-type": "application/json"
//                  },
//                  body: JSON.stringify({
//                      "username": values.username,
//                      "password": values.password,
//                      })
//                  }).then(response=> response.json()).then(response => {
//                      console.log(response);
//                  });

//             /*if (user === null) {
//                 return <SignIn/>;
//             }
//             if (user.role === 'client') {
//                 return <clientdrawer user={user}/>;
//             }
//             return <consultantdrawer user={user}/>;*/

//             }

//             }>
//             <FormH1>Sign in to your Account</FormH1>
//             <FormLabel htmlFor='for'>Username</FormLabel>
//             <FormInput type='text' required></FormInput>
//             <FormLabel htmlFor='for'>Password</FormLabel>
//             <FormInput type='password' required></FormInput>
//             <FormButton type='submit' value="values"

//             >Log in</FormButton>
//             <Text>Forgot password</Text>

//         </Form>
//     </FormContent>
// </Formwrap>
export default SignIn;
