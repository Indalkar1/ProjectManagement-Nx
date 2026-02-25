import React from 'react';
import LoginImg from '../assets/Loginimg.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
function SignIn() {
  const Navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    isNotRobot: '',
  };
  const ValidationSchema = Yup.object({
    email: Yup.string()
      .email('Enter valid Email')
      .required('Email is required field'),
    password: Yup.string().required('password is required field'),
    isNotRobot: Yup.boolean()
      .oneOf([true], 'Please confirm you are not a robot')
      .required('Please confirm you are not a robot'),
  });

  const handleSubmit = (Values) => {
    console.log('Values', Values);
    Navigate('/dummy1');
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="w-full md:w-3/5">
          <img className={'h-[100vh]'} src={LoginImg} alt="Img" />
        </div>
        <div className="w-full md:w-2/5">
          <div className="flex justify-center items-center flex-col mt-30">
            <div className="mt-[20px]">
              <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form>
                    <div className="text-2xl font-bold text-black-600">
                      Sign In
                    </div>
                    <div className="text-gray-500">
                      Please enter your login details to access your account.
                    </div>
                    <div className="mt-5 flex flex-col gap-2">
                      <label name="email" className="">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border border-black-300 px-3 py-2 focus:ring-1 outline-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="mt-3 flex flex-col gap-2">
                      <label name="password">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="password"
                        type="password"
                        placeholder="enter password"
                        className="border border-black-300 px-3 py-2 focus:ring-1 outline-none"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="auth-recaptcha-wrapper">
                      <div className="auth-recaptcha-content">
                        <div className="auth-recaptcha-left">
                          <Field
                            name="isNotRobot"
                            type="checkbox"
                            id="isNotRobot"
                          />
                          <label
                            htmlFor="isNotRobot"
                            className="auth-recaptcha-label"
                          >
                            I'm not a Robot
                          </label>
                        </div>
                      </div>
                      <ErrorMessage
                        name="isNotRobot"
                        component="div"
                        className="text-red-500 mb-3"
                      />
                    </div>
                    <div className="mt-5 flex justify-center text-center">
                      <button
                        className="bg-[#256Eb5] text-white w-100 p-3 "
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
