import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import Lottie from "lottie-react";
// import contactGif from "../../../assets/contact-me-green-version.json";
import Swal from "sweetalert2";
import { FaMobileAlt, FaEnvelope, FaHome,FaTelegramPlane } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t5ipnkj",
        "template_afp3xaj",
        form.current,
        "FurbyZB_5Su17qBvB"
      )
      .then(
        (result) => {
          //   console.log(result.text);
          form.current.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact-me">
    <SectionTitle
        sectionHeader={"Contact Me"}
        
      ></SectionTitle>
    <div className="md:flex gap-12 my-14 max-w-screen-xl mx-auto">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-6">
        {/* <Lottie className="w-1/2 md:w-9/12 mx-auto" animationData={contactGif} loop={true} /> */}
        <h1 className="text-3xl text-center font-semibold my-4">Get In Touch</h1>
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <FaMobileAlt className="text-2xl"></FaMobileAlt>
            <p> +8801772074982</p>
          </div>
          <div className="flex gap-4 items-center">
              <FaEnvelope className="text-2xl"></FaEnvelope>{" "}
            <p>
              shuvrodevmondal337@gmail.com
            </p>
          </div>
          <div className="flex gap-4 items-center">
              <FaHome className="text-2xl"></FaHome> Dhaka, Bangladesh
            <p>
            </p>
          </div>
        </div>
      </div>

      <div className="card  w-full md:w-1/2  shadow-2xl bg-base-100 ">
        {/* <h1 className="text-3xl text-center font-semibold my-4">Contact Me</h1> */}
        <form ref={form} onSubmit={sendEmail} className="card-body">
          <div className="form-control">
            <input
              type="text"
              className="input  input-bordered "
              placeholder="Your Name"
              name="user_name"
              />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Your Email"
              className="input  input-bordered "
              name="user_email"
              />
          </div>
          <div className="form-control">
            <textarea
              className="textarea textarea-bordered "
              placeholder="Write Your Message"
              name="message"
              ></textarea>
          </div>

          <div className="form-control mt-6 w-1/2 mx-auto">
            {/* <input type="submit" className="btn btn-neutral" value="Send Message" /> */}
            <button type="submit" className="btn btn-outline btn-info btn-sm sm:btn-sm md:btn-md">Send Message <FaTelegramPlane className="text-xl"></FaTelegramPlane> </button>
          </div>
        </form>
      </div>
    </div>
</div>
  );
};

export default ContactMe;

{
  /* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */
}
