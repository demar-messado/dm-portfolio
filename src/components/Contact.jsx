import { FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com";
import {useRef, useState} from "react"


const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [warnings, setWarnings] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const closeWarning = () => setErrorMessage("");

  const validateForm = () => {
    const validationRules = [
      {
        name: "name",
        rules: [
          [formData.name.trim() === "", "Please enter your name."],
          [
            !/^[A-Za-z\s]+$/.test(formData.name),
            "Name can only contain alphabets.",
          ],
          [
            formData.name.trim().length < 3,
            "Name must be at least 3 characters.",
          ],
        ],
      },
      {
        name: "email",
        rules: [
          [formData.email.trim() === "", "Please enter your email."],
          [
            !/^[\w.-]+@[a-zA-Z\d]+(?:\.[a-zA-Z\d-]+)*\.[a-zA-Z]{2,}$/.test(
              formData.email
            ),
            "Email is not valid.",
          ],
        ],
      },
      {
        name: "message",
        rules: [
          [formData.message.trim() === "", "Please enter a message."],
          [
            formData.message.trim().length < 10,
            "Message must be at least 10 characters.",
          ],
        ],
      },
    ];

    const newWarnings = {};
    validationRules.forEach(({ name, rules }) => {
      newWarnings[name] = rules.find(([condition]) => condition)?.[1] || "";
    });

    setWarnings(newWarnings);
    return !Object.values(newWarnings).some((warning) => warning !== "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setWarnings((prev) => ({ ...prev, [name]: "" }));
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "email" ? value.trim() : value.trim().replace(/\s+/g, " "),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return;
    setIsSubmitting(true);
    setErrorMessage("");

    const originalSendForm = emailjs.sendForm;
console.log(import.meta.env.VITE_EMAIL_SERVICE_KEY);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_KEY,
        import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_API_KEY
      );

      setErrorMessage("Message sent successfully!");
      setTimeout(() => setErrorMessage(""), 10000);

      form.current.reset();
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage(
      `Error! We are having trouble sending your email. Please try again later.`
      );
      setTimeout(() => setErrorMessage(""), 10000);
    } finally {
      setIsSubmitting(false);
      emailjs.sendForm = originalSendForm;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
            Contact me for collaboration
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>
        </div>
        <form ref={form} className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:items-center md:gap-2 md:grid-cols-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                autoComplete="name"
                required
                placeholder="Enter Name"
                className="text-field"
              />
            <small className='warningText'>{warnings.name}</small>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="Type email"
                className="text-field reveal-up"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              <small className='warningText'>{warnings.email}</small>

            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message here"
              required
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            ></textarea>
            <small className='warningText'>{warnings.message}</small>
          </div>
          {errorMessage && (
            <p
              className={`py-3 ${
                errorMessage.includes("Error")
                  ? 'errorMessage'
                  : 'successMessage'
              }`}
            >
              <button onClick={closeWarning}>
                <FaTimes />
              </button>
              {errorMessage}
            </p>
          )}
          <button className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up" onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
