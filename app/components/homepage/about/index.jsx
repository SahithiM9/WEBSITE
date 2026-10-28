
import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <section
      id="about"
      className="my-12 lg:my-16 relative"
    >
      {/* ABOUT ME side label */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#2F2F2F] text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#2F2F2F]" />
      </div>

      {/* About Me content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="font-bold mb-6 text-[#008080] text-2xl uppercase">
          Who am I?
        </h2>

        <p className="text-black text-lg leading-relaxed mb-6">
          {personalData.description}
        </p>

        <p className="text-black text-lg leading-relaxed">
          {personalData.description2}
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
