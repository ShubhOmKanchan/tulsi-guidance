"use client";

import { useState } from "react";

import {
  User,
  Phone,
  Clock3,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function CallbackFormMobile() {
    const [name, setName] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [phone, setPhone] = useState("");
    const [preferredTime, setPreferredTime] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    async function handleSubmit() {
        if (!name.trim() || !phone.trim()) {
            alert("Please enter your name and phone number.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch("/api/callback", {
            method: "POST",
            body: JSON.stringify({
                name,
                countryCode,
                phone,
                preferredTime,
                message,
            }),
            });

            const result = await response.json();

            if (result.success) {
            setSuccess(true);

            setName("");
            setCountryCode("+91");
            setPhone("");
            setPreferredTime("");
            setMessage("");
            } else {
            alert("Something went wrong.");
            }
        } catch (err) {
            console.error(err);
            alert("Unable to submit.");
        } finally {
            setLoading(false);
        }
        }
  if (success) {
  return (
    <div
      className="
        h-[500px]
        flex
        flex-col
        items-center
        justify-center
        text-center
      "
    >
      <div
        className="
          flex
          items-center
          justify-center

          w-48
          h-48

          rounded-full
          border-[3px]
          border-[#4F8F5C]
        "
      >
        <svg
          width="158"
          height="158"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4F8F5C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17L4 12" />
        </svg>
      </div>
      <div className="h-10"></div>

      <h2 className="mt-8 font-serif text-4xl lg:text-[70px] text-[#2F2A27]">
        Request Received
      </h2>

      <p className="mt-4 text-[16px] leading-8 text-[#6B6B6B]">
        Thank you for reaching out.
        <br />
        Our team will contact you within 24 hours.
      </p>
    </div>
  );
}

    return (
    <div className="w-full px-4 pt-16 pb-8">

      {/* Heading */}

      <h2
        className="
          uppercase
          tracking-[0.32em]
          text-[25px]
          font-medium
          text-[#4F8F5C]
          relative w-full
        "
        style={{ paddingLeft: "9px" }}
      >
        Let's Connect
      </h2>

      <p
        className="
          mt-6
          max-w-[92%]
          pl-[72px]

          text-[16px]
          leading-8
          relative w-full

          text-[#5D5D5D]
        "
        style={{ paddingLeft: "9px" }}
      >
        Share your details below and we'll reach out to understand your
        journey and recommend the most suitable offering.
      </p>

      <div className="h-[5px]" />

      {/* Form */}

      <div className="mt-8 space-y-4">

        {/* Name */}

        <div className="relative px-2 lg:px-0 lg:ml-5">

          <User
            size={20}
            className="
              absolute
              left-6
              top-1/2
              -translate-y-1/2

              text-[#4F8F5C]
            "
          />

          <input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
                w-full
                lg:w-160

                h-12

              rounded-full

              border
              border-[#D7B46A]/40

              bg-white/65

              pr-6

              outline-none
              text-[#D7B46A]

              backdrop-blur-lg

              focus:border-[#4F8F5C]
            "
            style={{ paddingLeft: "22px"}}
          />

        </div>

        <div className="h-[5px]" />

        {/* Phone */}

        <div
            className="
                flex
                flex-col
                gap-3

                px-2

                lg:flex-row
                lg:gap-4
                lg:px-0
                lg:ml-5
            "
            >

          <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
            className="
              w-24
              shrink-0
              h-14

              rounded-full

              border
              border-[#D7B46A]/40

              bg-white/65

              text-center
              appearance-none
              font-medium
              text-[#4F8F5C]

              outline-none
            "
          >
            <option>+91</option>
            <option>+1</option>
            <option>+44</option>
            <option>+61</option>
            <option>Other</option>
          </select>

          <div className="relative flex-1">

            <Phone
              size={20}
              className="
                absolute
                left-6
                top-1/2
                -translate-y-1/2

                text-[#4C8CBF]
              "
            />

            <input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="
                w-full
                lg:w-130
                h-14

                rounded-full

                border
                border-[#D7B46A]/40
                text-left

                bg-white/65

                pl-[64px]
                pr-6

                text-[#4C8CBF]

                outline-none
              "
              style={{ paddingLeft: "52px" }}
            />

          </div>

        </div>

        <div className="h-[5px]" />

        {/* Preferred Time */}

        <div className="relative px-2 lg:px-0 lg:ml-5">

          <Clock3
            size={20}
            className="
              absolute
              left-6
              top-1/2
              -translate-y-1/2

              text-[#D7B46A]
            "
          />

          <input
            autoComplete="new-password"
            placeholder="Preferred Time (Optional)"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="
              w-full
              lg:w-160
              h-14

              rounded-full

              border
              border-[#D7B46A]/40

              bg-white/65

              pl-24
              pr-6

              outline-none
            "
            style={{ paddingLeft: "48px" }}
          />

        </div>

        <div className="h-[5px]" />

        {/* Message */}

        <div className="relative px-2 lg:px-0 lg:ml-5">

          <MessageSquare
            size={20}
            className="
              absolute
              left-6
              top-1/9

              text-[#4F8F5C]
            "
          />

          <textarea
            rows={2}
            placeholder="Anything you'd like us to know? (Optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="
              w-full
              lg:w-160

              rounded-3xl

              border
              border-[#D7B46A]/40

              bg-white/65

              pt-6
              pb-6
              pl-[72px]
              pr-6

              resize-none

              outline-none
            "
            style={{ paddingLeft: "48px" }}
          />

        </div>

      </div>

      <div className="h-[7px]" />

      {/* Information */}

      <div
        className="
            mt-8
            w-full
            lg:w-160
          item-center

          rounded-[26px]

          border
          border-[#4F8F5C]/12

          bg-[#4F8F5C]/[0.05]

          p-5
        "
      >

        <div className="flex items-center gap-3"style={{paddingLeft:"10px"}}>

          <Image
            src="/images/logos/m.png"
            alt="Tulsi Guidance"
            width={34}
            height={34}
            className="object-contain"
            />

          <h3
            className="
              font-semibold
              text-[20px]
              text-[#2F2A27]
            "
            style={{ paddingLeft: "2px" }}
          >
            Who will call you?
          </h3>

        </div>

        <p
          className="
            mt-4

            leading-7
            text-[15px]
            pl-[72px]

            text-[#5F5F5F]
          "
          style={{ paddingLeft: "18px" }}
        >
          Our team personally reviews every request.
          You can usually expect a callback within
          <strong> 24 hours</strong>.
          Every conversation remains completely confidential.
        </p>

      </div>

      <div className="h-[15px]" />

      {/* Button */}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="
          mt-8

          w-full
            lg:w-110
          h-16

          rounded-full

          bg-gradient-to-r
          from-[#4F8F5C]
          via-[#4C8CBF]
          to-[#D7B46A]

          text-white

          text-[21px]
          font-semibold

          shadow-lg

          transition-all
          duration-300

          hover:scale-[1.02]
          hover:shadow-xl
        "
      >
        {loading ? "Submitting..." : "Request Callback"}
      </button>

    </div>
  );
}