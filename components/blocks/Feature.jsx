import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import body from "@/styles/body.module.css";

export default function Feature({ block }) {
  const SectionAccordion = dynamic(() =>
    import("@/components/partials/collapsibles/SectionAccordion")
  );
  const {
    description,
    link,
    position,
    title,
    video_link,
    image,
    button_label,
    bg_color,
  } = block.main;
  let videoUrl;

  if (video_link) {
    let videoId = video_link.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition != -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    videoUrl = `https://www.youtube.com/embed/${videoId}`;
  }
  return (
    <SectionAccordion title={title} childrenClassname="pb-0">
      <section
        className={`flex flex-wrap ${
          process.env.NEXT_PUBLIC_TEMPLATE == 1 ? "md:mb-[5px]" : ""
        } ${position == "right_content" ? "flex-row-reverse" : ""}`}
      >
        <div
          className={`w-full flex items-center justify-center md:max-w-[50%] bg-secondary1`}
        >
          {video_link || image ? (
            <>
              {!video_link && image && (
                <Image
                  src={image}
                  height={500}
                  width={900}
                  className={`w-full h-full object-cover min-h-[450px] md:min-h-[550px] ${
                    process.env.NEXT_PUBLIC_MICROSITE_ID == 6
                      ? "max-h-[760px]"
                      : " "
                  }`}
                  alt={title}
                  title={title}
                />
              )}
              {video_link && !image && (
                <div className="relative h-full w-full pb-[75%]">
                  <iframe
                    src={videoUrl}
                    width={900}
                    height={500}
                    loading="lazy"
                    className="w-full absolute h-full top-0 left-0 object-cover"
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-primary1 text-[25px] p-[15px]">
              No data to show.
            </div>
          )}
        </div>
        <div
          style={{
            backgroundColor: bg_color,
          }}
          className={`${
            process.env.NEXT_PUBLIC_MICROSITE_ID == 5
              ? "bg-[#202020]"
              : "bg-primary"
          } py-[20px] lg:py-[30px] flex flex-col justify-center px-[20px] md:px-[30px] lg:px-[60px] w-full md:max-w-[50%]`}
        >
          <h2
            className={`text-[20px] mb-[10px] ${
              process.env.NEXT_PUBLIC_TEMPLATE == 1
                ? "text-[#c5baa6]"
                : "text-white"
            }`}
          >
            {title}
          </h2>

          <div
            className={`${
              process.env.NEXT_PUBLIC_TEMPLATE == 1
                ? "bg-secondary1"
                : "bg-white"
            } w-[75px] mt-[5px] h-[2px]  mb-[20px]`}
          />
          <div
            className={`${
              process.env.NEXT_PUBLIC_TEMPLATE == 1
                ? "text-[#d4bebe]"
                : "text-white"
            } ${
              process.env.NEXT_PUBLIC_MICROSITE_ID == 7 ? body.kipkin : ""
            } text-[14px] mb-[15px] leading-[21px]`}
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {link && (
            <div>
              <Link
                className={`text-[14px] uppercase inline-block text-center  min-w-[200px] border py-[15px] px-[30px] transition hover:text-primary  ${
                  process.env.NEXT_PUBLIC_TEMPLATE == 1
                    ? "hover:bg-[#d4bebe] text-[#d4bebe] border-[#d4bebe]"
                    : "hover:bg-white text-white border-white"
                }`}
                href={link}
                target={link?.includes("http") ? "_blank" : "_self"}
              >
                {button_label ? button_label : "Discover More"}
              </Link>
            </div>
          )}
        </div>
      </section>
    </SectionAccordion>
  );
}
