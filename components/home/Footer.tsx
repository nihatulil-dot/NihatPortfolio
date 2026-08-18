"use client";

import React from "react";
import {
  Mail,
  Phone,
} from "lucide-react";

import {
  FooterBackgroundGradient,
  TextHoverEffect,
} from "@/components/ui/hoover";

function Footer() {
  const footerLinks = [
    {
      title: "About Me",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/",
        },
        {
          label: "GitHub",
          href: "https://github.com/",
        },
        {
          label: "Telegram",
          href: "https://t.me/",
        },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: (
        <span className="text-[#3ca2fa] text-sm font-bold">
          IG
        </span>
      ),
      text: "@nhat.uiel",
      href: "https://instagram.com/nhat.uiel",
    },
    {
      icon: (
        <Mail
          size={18}
          className="text-[#3ca2fa]"
        />
      ),
      text: "nihatulil@gmail.com",
      href: "mailto:nihatulil@gmail.com",
    },
    {
      icon: (
        <Phone
          size={18}
          className="text-[#3ca2fa]"
        />
      ),
      text: "+62 813 3748 8085",
      href: "https://wa.me/6281337488085",
    },
  ];

  return (
    <footer
      id="contact"
      className="
        relative
        m-8
        h-fit
        overflow-hidden
        rounded-3xl
        bg-[#0F0F11]/10
      "
    >
      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-40 mx-auto max-w-7xl p-14">

        <div
          className="
            grid
            grid-cols-1
            gap-12
            pb-12
            md:grid-cols-2
            md:gap-8
            lg:grid-cols-3
            lg:gap-16
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="flex flex-col space-y-4">

            <div className="flex items-center space-x-2">

              <span className="text-[#3ca2fa] text-3xl font-extrabold">
                ✦
              </span>

              <span className="text-3xl font-bold text-white">
                Nihat
              </span>

            </div>

            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Data Science student exploring data,
              quantitative trading, programming, and
              modern technology.
            </p>

          </div>


          {/* =================================================
              ABOUT ME
          ================================================= */}

          {footerLinks.map((section) => (
            <div key={section.title}>

              <h4 className="mb-6 text-lg font-semibold text-white">
                {section.title}
              </h4>

              <ul className="space-y-3">

                {section.links.map((link) => (
                  <li key={link.label}>

                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-sm
                        text-zinc-400
                        transition-colors
                        hover:text-[#3ca2fa]
                      "
                    >
                      {link.label}
                    </a>

                  </li>
                ))}

              </ul>

            </div>
          ))}


          {/* =================================================
              CONTACT ME
          ================================================= */}

          <div>

            <h4 className="mb-6 text-lg font-semibold text-white">
              Contact Me
            </h4>

            <ul className="space-y-4">

              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3"
                >

                  {item.icon}

                  <a
                    href={item.href}
                    target={
                      item.href.startsWith("mailto:")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      item.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="
                      text-sm
                      text-zinc-400
                      transition-colors
                      hover:text-[#3ca2fa]
                    "
                  >
                    {item.text}
                  </a>

                </li>
              ))}

            </ul>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <hr className="my-8 border-t border-gray-700" />


        {/* =====================================================
            FOOTER BOTTOM
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            space-y-4
            text-sm
            md:flex-row
            md:space-y-0
          "
        >

          <div className="flex items-center gap-6 text-zinc-500">

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#3ca2fa]"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#3ca2fa]"
            >
              GitHub
            </a>

            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#3ca2fa]"
            >
              Telegram
            </a>

          </div>


          <p className="text-center text-zinc-500 md:text-left">
            © {new Date().getFullYear()} Muhammad Nihat Ulil Amri.
            All rights reserved.
          </p>

        </div>

      </div>


      {/* =====================================================
          TEXT HOVER EFFECT
      ===================================================== */}

      <div className="relative z-40 hidden h-[30rem] -mb-36 -mt-52 lg:flex">

        <TextHoverEffect
          text="Nihat"
          className="z-50"
        />

      </div>


      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <FooterBackgroundGradient />

    </footer>
  );
}

export default Footer;