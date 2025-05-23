import Link from "next/link";
import body from "@/styles/body.module.css";
export default function Introduction({ block }) {
  const { description, title, button_label, button_link } = block.main;
  return (
    <>
      <section
        className={`w-full flex justify-center bg-primary ${
          process.env.NEXT_PUBLIC_MICROSITE_ID == 6 ? "pt-[80px]" : "pt-[40px]"
        } ${
          process.env.NEXT_PUBLIC_MICROSITE_ID == 8 ? "pt-[80px]" : "pt-[40px]"
        } pb-[80px] px-[15px]`}
      >
        <div className="w-full max-w-[957px] ">
          {title && (
            <div className="flex flex-col items-center w-full">
              <div
                className={`${
                  process.env.NEXT_PUBLIC_TEMPLATE == 1 ? "font-tenor" : " "
                } ${
                  process.env.NEXT_PUBLIC_MICROSITE_ID == 7 ? "font-effra" : " "
                } ${
                  process.env.NEXT_PUBLIC_TEMPLATE == 1
                    ? "text-[#c5baa6] border-[#c5baa6]"
                    : "text-white border-white"
                } flex w-full border-b leading-[30px] tracking-[2px] mb-[30px] justify-center  text-[20px] pb-[30px] text-center`}
              >
                {title}
              </div>
            </div>
          )}

          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className={`${
              process.env.NEXT_PUBLIC_TEMPLATE == 1
                ? "text-[#d4bebe]"
                : "text-white"
            } ${
              process.env.NEXT_PUBLIC_MICROSITE_ID == 7 ? body.kipkin : ""
            } text-[14px] leading-[25px] max-w-[957px]`}
          />
          {button_link && button_label && (
            <div className="flex justify-center pt-[30px]">
              <Link
                href={button_link || "#"}
                target={button_link?.includes("http") ? "_blank" : "_self"}
                className={`uppercase inline-block w-full sm:w-auto h-full border ${
                  process.env.NEXT_PUBLIC_TEMPLATE == 1
                    ? "hover:bg-[#d4bebe] text-[#d4bebe] hover:text-primary border-[#d4bebe]"
                    : "hover:bg-white text-white hover:text-primary border-white"
                } ${
                  process.env.NEXT_PUBLIC_MICROSITE_ID == 7
                    ? "hover:!bg-[#d51a69] hover:border-[#d51a69] hover:text-white"
                    : ""
                } text-[14px] text-center px-[30px] py-[15px] min-w-[130px] transition`}
              >
                {button_label}
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
