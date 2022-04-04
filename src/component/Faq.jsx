import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { faqData } from "../common/Helper";
import { UpArrowIcon, DownArrowIcon } from "../common/Icons";

const Faq = () => {
  const [view, setView] = React.useState(null);
  const activeHandler = (value) => {
    if (value === view) {
      setView(null);
    } else {
      setView(value);
    }
  };
  return (
    <>
      <div>
        <section
          className="py-4 pb-sm-5 position-relative open_overlay_sections_none bg-black text-white "
          id="faq"
        >
          <div className="container modified-container py-lg-5 ">
            <h4
              className=" text-center mb-md-5 pb-lg-4 mb-2 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span className="fs-xl ff-audiowide pb-sm-3 pb-1 px-3 underline">
                FAQ
              </span>
            </h4>
            <div className="row justify-content-center">
              <div
                className="col-12 z-index-1111  "
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                {faqData.map((item, index) => (
                  <div className={`${index === view ? " custom-shadow" : ""}`}>
                    <div
                      className={`light-green-bg mb-1  mt-4 ${
                        index === view ? " active-faq-item-main " : ""
                      }`}
                    >
                      <div
                        key={index}
                        className={`faq-wrapper  py-lg-4 py-3 px-3 px-sm-4 px-lg-5 overflow-hidden cursor_pointer ${
                          index === view ? " active-faq-item " : ""
                        }`}
                      >
                        <div
                          onClick={() => activeHandler(index)}
                          className={`faq-question fs-md fw-semibold ff-montserrat cursor-pointer d-flex align-items-center  justify-content-between`}
                        >
                          {item.question}
                          <span
                            className={`fs-sm fw-normal  ${
                              index === view ? "rotate-icon" : ""
                            } arrow-icon-faq`}
                          >
                            {index === view ? (
                              <UpArrowIcon />
                            ) : (
                              <DownArrowIcon />
                            )}
                          </span>
                        </div>
                        <AnimatePresence>
                          {index === view && (
                            <motion.div
                              transition={{
                                default: { duration: 0.2 },
                              }}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              <div className="faq-answer pe-5 me-sm-4">
                                <p
                                  className={`mb-0 pt-2 pb-1  ${
                                    index === view ? " " : ""
                                  }`}
                                >
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Faq;
