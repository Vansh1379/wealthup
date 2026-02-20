import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const scoreBreakdownData = [
  {
    label: "Emergency Funds",
    current: 0,
    max: 20,
    widthClass: "w-3",
    gradient:
      "bg-[linear-gradient(90deg,rgba(255,105,105,1)_0%,rgba(255,105,105,1)_13%)]",
  },
  {
    label: "Liquidity",
    current: 11,
    max: 20,
    widthClass: "w-[148px]",
    gradient:
      "bg-[linear-gradient(90deg,rgba(255,105,105,1)_0%,rgba(255,105,105,1)_42%,rgba(255,188,112,1)_54%,rgba(255,188,112,1)_60%)]",
  },
  {
    label: "Investments",
    current: 20,
    max: 20,
    widthClass: "w-full",
    gradient:
      "bg-[linear-gradient(90deg,rgba(255,105,105,1)_0%,rgba(255,105,105,1)_13%,rgba(255,188,112,1)_25%,rgba(255,188,112,1)_54%,rgba(126,255,126,1)_65%,rgba(126,255,126,1)_94%)]",
  },
  {
    label: "Health Insurance",
    current: 20,
    max: 20,
    widthClass: "w-full",
    gradient:
      "bg-[linear-gradient(90deg,rgba(255,105,105,1)_0%,rgba(255,105,105,1)_13%,rgba(255,188,112,1)_25%,rgba(255,188,112,1)_54%,rgba(126,255,126,1)_65%,rgba(126,255,126,1)_94%)]",
  },
  {
    label: "Life Insurance",
    current: 7,
    max: 20,
    widthClass: "w-[86px]",
    gradient:
      "bg-[linear-gradient(90deg,rgba(255,105,105,1)_0%,rgba(255,105,105,1)_60%,rgba(255,188,112,1)_97%)]",
  },
  {
    label: "Savings",
    current: 16,
    max: 20,
    widthClass: "w-[182px]",
    gradient:
      "bg-[linear-gradient(90deg,rgba(255,105,105,1)_0%,rgba(255,105,105,1)_22%,rgba(255,188,112,1)_33%,rgba(255,188,112,1)_62%,rgba(126,255,126,1)_89%)]",
  },
];

export const FinancialIndependenceOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-7 p-6 relative w-full bg-slate-50 rounded-[20px] overflow-hidden shadow-[0px_0px_15px_#4a90e280,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]">
      <div className="absolute top-[-319px] left-[468px] w-[1440px] h-[1440px] rounded-[720px] rotate-[27.41deg] blur-[50px] [background:conic-gradient(from_180deg_at_50%_50%,rgba(207,230,247,0.05)_0%,rgba(74,144,226,0.25)_50%,rgba(207,230,247,0.05)_100%)] opacity-10" />

      <div className="absolute top-[191px] -left-24 w-[1419px] h-[399px] bg-[#ffffff] rotate-[6.26deg] blur-[22px] opacity-80" />

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative w-full">
        <div className="relative w-full lg:w-[414px] h-[313px] flex-shrink-0">


          <div className="absolute top-[17px] left-[7px] w-[400px] h-[294px]">
            <div className="absolute top-[35px] left-0 w-[398px] h-[221px] flex">
              <div className="w-[402px] h-[221px] relative">
                <svg
                  className="absolute -top-7 -left-7 w-[454px] h-[277px]"
                  width="454"
                  height="277"
                  viewBox="0 0 454 277"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_4291_2048)">
                    <path
                      d="M226.92 28.0024C109.169 27.9146 22.5004 119.217 28.2722 234.755C28.678 242.879 35.5853 249 43.7194 249H410.217C418.31 249 425.197 242.939 425.655 234.859C432.221 118.802 344.438 27.4554 226.92 28.0024Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_4291_2048"
                      x="0"
                      y="0"
                      width="454"
                      height="277"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="14" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.818269 0 0 0 0 0.901471 0 0 0 0 1 0 0 0 0.6 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4291_2048"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4291_2048"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>

                <svg
                  className="absolute top-[17px] left-[22px] w-[352px] h-[181px]"
                  width="352"
                  height="181"
                  viewBox="0 0 352 181"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8" filter="url(#filter0_i_4291_2049)">
                    <path d="M324.888 167.5C324.888 90.5741 258.892 27.0002 175.944 27C92.9968 27 27 90.574 27 167.5C27 174.956 20.9558 181 13.5 181C6.04416 181 0 174.956 0 167.5C0 74.3223 79.4613 0 175.944 0C272.427 0.000219466 351.888 74.3225 351.888 167.5C351.888 174.956 345.844 181 338.388 181C330.932 181 324.888 174.956 324.888 167.5Z" fill="#F7F7F7" />
                  </g>
                  <defs>
                    <filter id="filter0_i_4291_2049" x="0" y="0" width="351.887" height="181" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4291_2049" />
                    </filter>
                  </defs>
                </svg>

                <svg
                  className="absolute top-14 left-[22px] w-[82px] h-[142px]"
                  width="82"
                  height="143"
                  viewBox="0 0 82 143"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5 128.809C13.5 82.9173 34.6745 41.7137 68.2668 13.5002" stroke="url(#paint0_linear_4291_2050)" strokeWidth="27" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="paint0_linear_4291_2050" x1="13.5" y1="71.1549" x2="322.415" y2="-161.661" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6969" />
                      <stop offset="0.125785" stopColor="#FF6969" />
                      <stop offset="0.254808" stopColor="#FFBC70" />
                      <stop offset="0.539709" stopColor="#FFBC70" />
                      <stop offset="0.65" stopColor="#7EFF7E" />
                      <stop offset="0.942308" stopColor="#7EFF7E" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  className="absolute top-[38px] left-[271px] w-[27px] h-8" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.91636 25.789L0.00142225 28.0001L4.149 31.9914L5.63474 26.4803L4.91636 25.789ZM22.4424 6.20236L27.3573 3.99123L23.2097 -5.91485e-05L21.724 5.51105L22.4424 6.20236ZM4.97625 26.4958L5.33544 26.8414L7.26947 24.5081L6.91027 24.1624L6.55108 23.8168L4.61706 26.1501L4.97625 26.4958ZM8.8443 21.8291L9.20349 22.1747L11.1375 19.8414L10.7783 19.4957L10.4191 19.1501L8.48511 21.4834L8.8443 21.8291ZM12.7123 17.1624L13.0715 17.508L15.0056 15.1747L14.6464 14.829L14.2872 14.4834L12.3532 16.8167L12.7123 17.1624ZM16.5804 12.4957L16.9396 12.8413L18.8736 10.508L18.5144 10.1623L18.1552 9.81665L16.2212 12.15L16.5804 12.4957ZM20.4484 7.82896L20.8076 8.17461L22.7417 5.84126L22.3825 5.49561L22.0233 5.14995L20.0893 7.4833L20.4484 7.82896Z" fill="#7A7A7A" />
                </svg>


                <div className="absolute top-[62px] left-[140px] [font-family:'Inter',Helvetica] font-bold text-[#ff6a6a] text-[80px] tracking-[0] leading-[normal]">
                  43
                </div>

                <div className="absolute top-[162px] left-[85px] [font-family:'Urbanist',Helvetica] font-semibold text-[#294f7c] text-[19px] text-center tracking-[0.95px] leading-[normal]">
                  Current WealthUp Score
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-center absolute top-0 left-[189px] drop-shadow-[0px_8px_16px_rgba(27,33,44,0.12)]">
              <Card className="bg-white rounded-lg border-0 shadow-none">
                <CardContent className="px-3 py-2">
                  <p className="w-[168px] [font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-[14px]">
                    <span className="text-[#4b4b4b] leading-5">You need </span>
                    <span className="font-bold text-[#4b4b4b] leading-5">
                      +27
                    </span>
                    <span className="text-[#4b4b4b] leading-5"> points </span>
                    <span className="text-[#4b4b4b] leading-5">to reach a</span>
                    <span className="font-bold text-[#00ba00] leading-5">
                      {" "}
                      good
                    </span>
                    <span className="text-[#4b4b4b] leading-5"> score of </span>
                    <span className="font-bold text-[#4b4b4b] leading-5">
                      70
                    </span>
                  </p>
                </CardContent>
              </Card>
              <svg
                className="relative flex-[0_0_auto]" width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0H0L9.87454 11.8297C10.7588 12.8891 12.425 12.7558 13.1296 11.5693L20 0Z" fill="white" />
              </svg>

              {/* <img
                className="relative flex-[0_0_auto]"
                alt="Div"
                src="/div.svg"
              /> */}
            </div>

            <p className="absolute top-[276px] left-[114px] [font-family:'Urbanist',Helvetica] font-normal text-base tracking-[0] leading-[normal] whitespace-nowrap">
              <span className="italic text-[#47678d]">Better than</span>
              <span className="font-light italic text-[#47678d]"> </span>
              <span className="font-bold italic text-[#47678d]">46%</span>
              <span className="italic text-[#47678d]"> of peers</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[746px] items-start justify-center gap-8 relative">
          <div className="inline-flex flex-col items-start gap-3 relative">
            <h2 className="[font-family:'Urbanist',Helvetica] font-normal text-[#294f7c] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Financial independence age
            </h2>

            <div className="flex w-full max-w-[484px] items-center relative">
              <Card className="flex flex-col w-[210px] h-[131px] items-center justify-center gap-2.5 px-2 py-3 bg-[#f8f8f8] rounded-[8px_0px_0px_8px] border-t border-b border-l border-[#ffffff] shadow-[0px_0px_24px_#4a90e240]">
                <CardContent className="flex flex-col items-center justify-center gap-2.5 p-0">
                  <p className="w-[150px] [font-family:'Urbanist',Helvetica] font-semibold text-[#828282] text-sm text-center tracking-[0.70px] leading-[normal]">
                    Current Trajectory
                  </p>

                  <p className="text-[#606060] [font-family:'Urbanist',Helvetica] font-bold text-3xl text-center tracking-[1.50px] leading-[normal] whitespace-nowrap">
                    65
                  </p>

                  <p className="w-[150px] [font-family:'Urbanist',Helvetica] font-normal text-[#7c7c7c] text-xs text-center tracking-[0.60px] leading-[normal]">
                    Based on current savings you have
                  </p>
                </CardContent>
              </Card>

              <Card className="flex flex-col w-[210px] items-center justify-center gap-2.5 px-2 py-3 bg-[#eaf4fb] rounded-[0px_8px_8px_0px] border border-[#ffffff] shadow-[0px_0px_24px_#4a90e240]">
                <CardContent className="flex flex-col items-center justify-center gap-2.5 p-0">
                  <p className="w-[150px] [font-family:'Urbanist',Helvetica] font-semibold text-[#307ed9] text-sm text-center tracking-[0.70px] leading-[normal]">
                    Your Potential
                  </p>

                  <p className="text-[#294f7c] [font-family:'Urbanist',Helvetica] font-bold text-3xl text-center tracking-[1.50px] leading-[normal] whitespace-nowrap">
                    38
                  </p>

                  <p className="w-[163px] [font-family:'Urbanist',Helvetica] font-normal text-[#294f7c] text-xs text-center tracking-[0.60px] leading-[normal]">
                    By following our personalized roadmap
                  </p>
                </CardContent>
              </Card>



              <div className="inline-flex items-center absolute top-[47px] left-[148px]">
                <div className="relative z-[1] h-[24px] flex items-center shadow-[-3.87px_5.24px_10.49px_-1.31px_#1b212c12] bg-[#00ba00] rounded-[5.24px_0.2px_0.2px_5.24px] px-[7.87px]">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[10px] tracking-[0] leading-[13.1px] whitespace-nowrap">
                    <span className="font-bold text-[#ffffff]">✨ 27</span>
                    <span className="font-semibold text-[#ffffff]">
                      {" "}
                      years sooner !
                    </span>
                  </span>
                </div>
                <div
                  className="relative z-0 bg-[#00ba00] w-[14px] h-[24px] -ml-[0.5px]"
                  style={{
                    clipPath: "path('M 0 0 L 0 24 L 12.794 13.9478 C 13.427 13.4501 13.466 12.5043 12.876 11.9561 L 0 0 Z')",
                    filter: "drop-shadow(-7.87px 2.62px 2.62px rgba(0,0,0,0.16))",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 relative w-full">
            <h2 className="[font-family:'Urbanist',Helvetica] font-normal text-[#294f7c] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Your score breakdown
            </h2>

            <div className="flex flex-col items-start gap-5 relative w-full">
              <div className="flex flex-wrap items-center gap-[20px] pl-2 pr-0 py-0 relative w-full">
                {scoreBreakdownData.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-3 relative flex-1 min-w-[180px]"
                  >
                    <div className="flex items-center justify-between relative w-full">
                      <h3 className="[font-family:'Urbanist',Helvetica] font-bold text-[#294f7c] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                        {item.label}
                      </h3>

                      <p className="[font-family:'Urbanist',Helvetica] font-light text-[#294f7c] text-sm tracking-[0] leading-[normal]">
                        {item.current} / {item.max}
                      </p>
                    </div>

                    <div className="relative w-full h-4">
                      {item.current < item.max && (
                        <div className="absolute top-0 left-0 w-full h-4 bg-[#f7f7f7] rounded-[30px] shadow-[inset_0px_0px_4px_#00000014] opacity-80" />
                      )}
                      <div
                        className={`relative ${item.widthClass} h-4 rounded-[30px] ${item.gradient}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-[20px] pl-2 pr-0 py-0 relative w-full">
                {scoreBreakdownData.slice(3, 6).map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-3 relative flex-1 min-w-[180px]"
                  >
                    <div className="flex items-center justify-between relative w-full">
                      <h3 className="[font-family:'Urbanist',Helvetica] font-bold text-[#294f7c] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                        {item.label}
                      </h3>

                      <p className="[font-family:'Urbanist',Helvetica] font-light text-[#294f7c] text-sm tracking-[0] leading-[normal]">
                        {item.current} / {item.max}
                      </p>
                    </div>

                    <div className="relative w-full h-4">
                      {item.current < item.max && (
                        <div className="absolute top-0 left-0 w-full h-4 bg-[#f7f7f7] rounded-[30px] shadow-[inset_0px_0px_4px_#00000014] opacity-80" />
                      )}
                      <div
                        className={`relative ${item.widthClass} h-4 rounded-[30px] ${item.gradient}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
