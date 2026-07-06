export default function BambooCluster() {
  return (
    <div
      className="
        absolute
        left-0
        bottom-0

        h-[55%]
        w-[140px]

        pointer-events-none
        opacity-18
        z-0

        sm:h-[70%]
        sm:w-[180px]
        sm:opacity-70

        md:h-[85%]
        md:w-[220px]
        md:opacity-25

        lg:h-full
        lg:w-[260px]
        lg:opacity-30
        "
    >
      {/* Stalk 1 */}

      <div
        className="
          absolute
          left-[98px]
          sm:left-180
          bottom-0
          h-[36%]
          w-[16px]
          rounded-full
          bg-gradient-to-b
          from-[#E7F5D8]
          via-[#B7D69A]
          to-[#8EB36E]
        "
      >
        {[18, 34, 50, 66, 82].map((y) => (
          <div
            key={y}
            className="absolute left-[-0px] w-[16px] h-[2px] bg-[#84A963]"
            style={{ bottom: `${y}%` }}
          />
        ))}
      </div>

      {/* Stalk 2 */}

      <div
        className="
          absolute
          left-[80px]
          sm:left-174
          bottom-0
          h-[42%]
          w-[16px]
          rounded-full
          bg-gradient-to-b
          from-[#EAF7DC]
          via-[#B7D69A]
          to-[#87A96A]
        "
      >
        {[20, 40, 60, 80].map((y) => (
          <div
            key={y}
            className="absolute left-[-0px] w-[16px] h-[2px] bg-[#84A963]"
            style={{ bottom: `${y}%` }}
          />
        ))}
      </div>

      {/* Stalk 3 */}

      <div
        className="
          absolute
          left-[96px]
          sm:left-186
          bottom-0
          h-[32%]
          w-[16px]
          rounded-full
          bg-gradient-to-b
          from-[#EDF9E4]
          via-[#BFDDA7]
          to-[#8EB36E]
        "
      >
        {[25, 50, 75].map((y) => (
          <div
            key={y}
            className="absolute left-[-0px] w-[16px] h-[2px] bg-[#84A963]"
            style={{ bottom: `${y}%` }}
          />
        ))}
      </div>
      {/* Stalk 1 */}

      <div
        className="
          absolute
          left-96
          bottom-0
          h-[14%]
          w-[16px]
          rounded-full
          bg-gradient-to-b
          from-[#E7F5D8]
          via-[#B7D69A]
          to-[#8EB36E]
        "
      >
        {[18, 54,  78].map((y) => (
          <div
            key={y}
            className="absolute left-[-0px] w-[16px] h-[2px] bg-[#84A963]"
            style={{ bottom: `${y}%` }}
          />
        ))}
      </div>

      {/* Stalk 2 */}

      <div
        className="
          absolute
          left-84
          bottom-0
          h-[26%]
          w-[16px]
          rounded-full
          bg-gradient-to-b
          from-[#EAF7DC]
          via-[#B7D69A]
          to-[#87A96A]
        "
      >
        {[20, 40, 60, 80].map((y) => (
          <div
            key={y}
            className="absolute left-[-0px] w-[16px] h-[2px] bg-[#84A963]"
            style={{ bottom: `${y}%` }}
          />
        ))}
      </div>

      {/* Stalk 3 */}

      <div
        className="
          absolute
          left-90
          bottom-0
          h-[20%]
          w-[16px]
          rounded-full
          bg-gradient-to-b
          from-[#EDF9E4]
          via-[#BFDDA7]
          to-[#8EB36E]
        "
      >
        {[25, 50, 75].map((y) => (
          <div
            key={y}
            className="absolute left-[-0px] w-[16px] h-[2px] bg-[#84A963]"
            style={{ bottom: `${y}%` }}
          />
        ))}
      </div>

      {/* Stalk 1 */}

      <div
        className="
          absolute
          left-276
          bottom-0
          h-[14%]
          w-[16px]
          rounded-full
          bg-gradient-to-b
          from-[#E7F5D8]
          via-[#B7D69A]
          to-[#8EB36E]
        "
      >
        {[18,  50,  82].map((y) => (
          <div
            key={y}
            className="absolute left-[-0px] w-[16px] h-[2px] bg-[#84A963]"
            style={{ bottom: `${y}%` }}
          />
        ))}
      </div>

      {/* Stalk 2 */}

      <div
        className="
          absolute
          left-264
          bottom-0
          h-[26%]
          w-[16px]
          rounded-full
          bg-gradient-to-b
          from-[#EAF7DC]
          via-[#B7D69A]
          to-[#87A96A]
        "
      >
        {[20, 40, 60, 80].map((y) => (
          <div
            key={y}
            className="absolute left-[-0px] w-[16px] h-[2px] bg-[#84A963]"
            style={{ bottom: `${y}%` }}
          />
        ))}
      </div>

      {/* Stalk 3 */}

      <div
        className="
          absolute
          left-270
          bottom-0
          h-[20%]
          w-[16px]
          rounded-full
          bg-gradient-to-b
          from-[#EDF9E4]
          via-[#BFDDA7]
          to-[#8EB36E]
        "
      >
        {[25, 50, 75].map((y) => (
          <div
            key={y}
            className="absolute left-[-0px] w-[16px] h-[2px] bg-[#84A963]"
            style={{ bottom: `${y}%` }}
          />
        ))}
      </div>
    </div>
  );
}