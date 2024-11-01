import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import SparklesText from "../ui/sparkles-text";
import CvButton from "@/static/CvButton";
import DownloadBtn from "@/static/Download";

export async function BoxRevealDemo() {
  return (
    <div className="size-full max-w-2xl items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <SparklesText className=" text-5xl" text=" my skill stAck" />
      </BoxReveal>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2
          className="mt-[.5rem] text-white text-[1rem] "
          style={{ fontFamily: "MajorMonoDisplay" }}
        >
          FuLL STACK & Java dEvELOper,{" "}
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6 text-[1.3rem]">
          <p className="text-white w-full">
            <span className="font-semibold text-[#E84A4A]"> Languages: </span>{" "}
            Java (Java 8, Collection Framework), JavaScript (ES6+)
            <br />
            <span className="font-semibold text-[#E84A4A]">
              {" "}
              Frontend:
            </span>{" "}
            HTML5, CSS3, SASS, Tailwind CSS, Bootstrap, React.js, Redux Toolkit,
            Framer Motion
            <br />{" "}
            <span className="font-semibold text-[#E84A4A]"> Backend </span> :
            Node.js, MongoDB, RESTful APIs, Next.js <br />
            <span className="font-semibold text-[#E84A4A]"> Platforms </span> :
            AWS (S3, VPC, EC2), GitHub, Git Operating <br />
            <span className="font-semibold text-[#E84A4A]"> Systems </span> :
            Linux (Ubuntu, Kali) , windows
            <br />
          </p>
        </div>
      </BoxReveal>
      <div className="mt-3">
        <DownloadBtn />
      </div>{" "}
    </div>
  );
}
