
"use client";

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";

function ContactSection() {
  return (
    <div
      id="contact"
      className="my-12 lg:my-16 relative mt-24"
    >
      {/* Contact Section Heading */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#2F2F2F] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#2F2F2F]"></span>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 py-12">

        <h2 className="text-3xl font-bold text-[#008080]">
          Get In Touch
        </h2>

        <p className="text-lg text-center text-gray-700">
          Connect with me through LinkedIn or GitHub.
        </p>

        {/* Address */}
        <div className="flex items-center gap-4">
          <CiLocationOn
            size={45}
            className="bg-[#BF211E] p-2 rounded-full text-white"
          />

          <span className="text-[#046a38] text-xl font-bold">
            United States
          </span>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-8 mt-6">

          {/* GitHub */}
          {personalData.github && (
            <Link
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <IoLogoGithub
                size={55}
                className="bg-[#171515] p-3 rounded-full text-white hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300"
              />
            </Link>
          )}

          {/* LinkedIn */}
          {personalData.linkedIn && (
            <Link
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <BiLogoLinkedin
                size={55}
                className="bg-[#0A66C2] p-3 rounded-full text-white hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300"
              />
            </Link>
          )}

        </div>
      </div>
    </div>
  );
}

export default ContactSection;
