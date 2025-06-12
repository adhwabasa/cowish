import React from "react";
import contact1 from "../assets/contact-1.jpg";
import contact2 from "../assets/contact-2.jpg";
import InputText from "../components/InputText";
import TextArea from "../components/TextArea";
import * as yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { Element } from "react-scroll";

const Contact = () => {
  const sendMsg = () => {
    Swal.fire({
     icon: "success",
     title: "Your massage has been sent.",
     animation: true,
     text: "Note: This is just a concept. The message was not actually sent.",
     confirmButtonColor: "#156f44",
     customClass: "swal"
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: sendMsg,
    validationSchema: yup.object().shape({
      name: yup.string().min(3).required(),
      email: yup.string().email().optional(),
      message: yup.string().min(8).required(),
    }),
  });

  return (
    <Element className="container mb-[86px]" name="contact">
      <h3 className="font-semibold font-heading text-center mb-8">
        Have a Question? <span className="text-primary">Reach Out</span>!
      </h3>
      <div>
        <div className="grid grid-cols-12 lg:grid-rows-2 gap-4 lg:max-h-[550px]">
          <div className="lg:col-span-5 hidden lg:block">
            <img
              src={contact1}
              alt=""
              className="rounded-3xl h-full w-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 lg:row-start-2 hidden lg:block">
            <img
              src={contact2}
              alt=""
              className="rounded-3xl h-full w-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 lg:row-span-2 lg:col-start-6 col-span-12 col-start-1 row-start-2 border rounded-3xl p-4 overflow-scroll">
            <form
              className="flex flex-col gap-4 mb-4"
              onSubmit={formik.handleSubmit}
            >
              <InputText
                placeholder="e.x Ageng Setiadi"
                label="Name"
                formik={formik}
                err={formik.errors.name}
              />
              <InputText
                placeholder="e.x agengsetiabangetorgnya@gmail.com"
                label="Email"
                type="email"
                formik={formik}
                err={formik.errors.email}
              />

              <TextArea
                placeholder="type your message here!"
                label="Message"
                formik={formik}
                err={formik.errors.message}
              />
              <input
                type="submit"
                value="Send It Over"
                className="text-white bg-primary hover:shadow-lg  px-3 py-1 rounded-2xl transition-all duration-150 text-base font-heading"
              />
            </form>
            <p>
              Whether you're curious about our farm concept, want to collaborate
              on a design project, or just want to say hi — we’d love to hear
              from you. Drop us a message and we’ll get back as soon as we can.
            </p>
            <ul>
              <li>
                📍 Jl. Lestari No.12, Desa Hijau, Kabupaten Ternak, Jawa Barat
                40123
              </li>
              <li>📞 (021) 555-0199</li>
              <li>📧 hello@cowishfarm.id</li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
