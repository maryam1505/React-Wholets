import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation Schema with Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

function ContactForm() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div className="bg-blue-950 bg-opacity-5 shadow-lg rounded-lg p-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-950 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Have a question about our products? Need help with your order or
            payment? Want to share feedback about your shopping experience? Feel
            free to reach out!
          </p>
          <Formik
            initialValues={{ email: '', subject: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                      errors.email && touched.email
                        ? 'border-red-600 dark:border-red-400'
                        : 'border-gray-300'
                    } focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    placeholder="name@flowbite.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 dark:text-red-400 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <Field
                    type="text"
                    id="subject"
                    name="subject"
                    className={`block p-3 w-full text-sm bg-gray-50 rounded-lg border shadow-sm ${
                      errors.subject && touched.subject
                        ? 'border-red-600 dark:border-red-400'
                        : 'border-gray-300'
                    } focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    placeholder="Let us know how we can help you"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-600 dark:text-red-400 text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="6"
                    className={`block p-2.5 w-full text-sm bg-gray-50 rounded-lg border shadow-sm ${
                      errors.message && touched.message
                        ? 'border-red-600 dark:border-red-400'
                        : 'border-gray-300'
                    } focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    placeholder="Leave a comment..."
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-600 dark:text-red-400 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-950 text-white py-2 px-7 rounded hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
