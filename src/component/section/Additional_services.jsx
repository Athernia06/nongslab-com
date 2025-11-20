import React from "react";
import ConsultantImg from "../../assets/digitalization_consultant.svg";
import DataEntryImg from "../../assets/data_entry.svg";
import DataCleaning from "../../assets/data_cleaning.svg";
import DataReport from "../../assets/data_reporting.svg";
import DataSupport from "../../assets/data_support.svg";
import IconHardware from "../../assets/it_hardware.svg";
import SeoStrategy from "../../assets/seo.svg";
import CopyWriter from "../../assets/copywriter.svg";


const AdditionalServices = () => {
  return (
    <section className="w-full mt-8 md:mt-40">

      {/* Header Top */}
      <div className="bg-[#EF7A2D] text-white text-center pt-7 pb-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h2 className="text-h5 md:text-h3 font-semibold">
            Looking for more than just web solutions?
          </h2>
        </div>
      </div>

      {/* Peach Background - FULL WIDTH */}
      <div className="relative -mt-8 z-[2]">
        <div className="bg-[#FFF6F0] rounded-t-[40px] overflow-hidden shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">

          {/* INNER CONTENT */}
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 pt-8 md:pt-12 lg:pt-16 pb-24">

            {/* SECTION TITLE */}
            <h3 className="text-h5 md:text-h4 font-semibold max-w-[520px] mb-16">
              Our additional services are designed to support every step of your digital transformation
            </h3>

            <div className="flex flex-col gap-10 md:gap-20"> 
              {/* === ROW 1 === */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-40 items-center">

                {/* LEFT IMAGE — top on mobile, left on desktop */}
                <div className="flex justify-center md:justify-start order-1 md:order-1">
                  <img
                    src={ConsultantImg}
                    alt="Digitalization Consultant"
                    className="w-[300px] sm:w-[340px] md:w-[420px]"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="order-2 md:order-2 text-left">
                  <h4 className="text-[#E9742A] text-h5 md:text-h4 font-semibold mb-2">
                    Digitalization Consultant
                  </h4>

                  <p className="text-gray-600 mb-6 max-w-[460px]">
                    We help your business go digital with the right IT solutions —
                    from hardware setup to system optimization
                  </p>

                  <div className="flex flex-wrap gap-x-12 gap-y-8">

                    {/* IT Hardware Setup */}
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-[#FFEFE4] rounded-2xl border border-[#E9742A] flex items-center justify-center">
                        <img src={IconHardware} alt="it hardware solution" className="w-7 h-7 object-contain" />
                      </div>
                      <span className="text-neutral-950 text-base font-medium">IT Hardware Setup</span>
                    </div>

                    {/* SEO */}
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-[#FFEFE4] rounded-2xl border border-[#E9742A] flex items-center justify-center">
                        <img src={SeoStrategy} alt="strategy seo" className="w-7 h-7 object-contain" />
                      </div>
                      <span className="text-neutral-950 text-base font-medium">
                        SEO Strategy & Optimization
                      </span>
                    </div>

                    {/* Copywriter */}
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-[#FFEFE4] rounded-2xl border border-[#E9742A] flex items-center justify-center">
                        <img src={CopyWriter} alt="icon copywriter" className="w-7 h-7 object-contain" />
                      </div>
                      <span className="text-neutral-950 text-base font-medium">Copywriter</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* === ROW 2 === */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center">

                {/* LEFT IMAGE — but right on desktop */}
                <div className="flex justify-center md:justify-end order-2 md:order-2">
                  <img
                    src={DataEntryImg}
                    alt="Data Entry and Management"
                    className="w-[300px] sm:w-[340px] md:w-[420px]"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="order-2 md:order-1 text-left">
                  <h4 className="text-[#E9742A] text-h5 md:text-h4 font-semibold mb-2">
                    Data Entry & Management
                  </h4>

                  <p className="text-gray-600 mb-6 max-w-[460px]">
                    We organize and manage your data to improve efficiency and support better business decisions
                  </p>

                  <div className="flex flex-wrap gap-x-12 gap-y-8">

                    {/* Data Organiztion & Cleaning */}
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-[#FFEFE4] rounded-2xl border border-[#E9742A] flex items-center justify-center">
                        <img src={DataCleaning} alt="data cleaning" className="w-7 h-7 object-contain" />
                      </div>
                      <span className="text-neutral-950 text-base font-medium">Data Organization & Cleaning</span>
                    </div>

                    {/* Data Entry Support */}
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-[#FFEFE4] rounded-2xl border border-[#E9742A] flex items-center justify-center">
                        <img src={DataSupport} alt="data entry support" className="w-7 h-7 object-contain" />
                      </div>
                      <span className="text-neutral-950 text-base font-medium">
                        Data Entry Support
                      </span>
                    </div>

                    {/* Data Reporting & Insight */}
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-[#FFEFE4] rounded-2xl border border-[#E9742A] flex items-center justify-center">
                        <img src={DataReport} alt="data report" className="w-7 h-7 object-contain" />
                      </div>
                      <span className="text-neutral-950 text-base font-medium">Data Reporting & Insights</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
