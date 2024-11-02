import Image from "next/image";

export const content = [
  {
    title: "Web Developer",
    Cname: "CodeAlpha, Pune ",
    description: `Completed tasks assigned by the company as part of a structured learning and development program.
    Regularly practiced and enhanced skills in web development technologies.
    Built and submitted multiple projects based on the requirements provided.
    Engaged in a fully virtual internship environment, developing time management and self-discipline.`,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)] flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/dpbxjnttc/image/upload/v1730542038/iyjozho9exsc21dnrdqi.png"
          alt="startup template"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    ),
  },
  {
    title: "Full-satck dev",
    Cname: "Solar Secure Solutions, Uttar Pradesh",

    description: `Completed various tasks assigned by the company during the internship.
    Learned and practiced technologies daily, including Node.js, JavaScript, CSS, and HTML.
    Developed and submitted projects based on the requirements provided by the company.`,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/dpbxjnttc/image/upload/v1730542038/lgj5mhqtkzy5yvzukmkt.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Jobsco",
    Cname: "Project",

    description:
      "While building the Jobsco application, I learned a lot about Next.js, including how routing works, the project structure, and how to handle real-time API calls and database operations.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/dpbxjnttc/image/upload/v1730542038/c0nx2sappzn5jhywbrwf.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Image generator",
    Cname: "Project",

    description:
      "Developed a tool that generates images based on user-inputted prompts and enabled a feature allowing users to share the generated images with a community. Throughout the project, I learned about structuring the application, handling real-time API calls, and managing database operations.",

    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/dpbxjnttc/image/upload/v1730542038/cfslezpwerfrdlgjgiiq.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
