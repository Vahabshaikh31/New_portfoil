import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import SparklesText from "../ui/sparkles-text";
import CvButton from "@/static/CvButton";
import DownloadBtn from "@/static/Download";

export async function BoxRevealDemo() {
  return (
    <div className="size-full max-w-2xl items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <SparklesText text=" My Skill Stack" />
      </BoxReveal>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-white text-[2rem]">
          Full Stack Development,{" "}
          <span className=" text-white">Java Developer</span>
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6 text-[1.3rem]">
          <p className="text-white w-full">
            <span className="font-semibold text-[#7ad3c2]"> Languages: </span>{" "}
            Java (Java 8, Collection Framework), JavaScript (ES6+)
            <span className="font-semibold text-[#7ad3c2]">
              {" "}
              Frontend:{" "}
            </span>{" "}
            HTML5, CSS3, SASS, Tailwind CSS, Bootstrap, React.js, Redux Toolkit,
            Framer Motion
            <br />{" "}
            <span className="font-semibold text-[#7ad3c2]"> Backend </span> :
            Node.js, MongoDB, RESTful APIs, Next.js <br />
            <span className="font-semibold text-[#7ad3c2]"> Platforms </span> :
            AWS (S3, VPC, EC2), GitHub, Git Operating <br />
            <span className="font-semibold text-[#7ad3c2]"> Systems </span> :
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
