import React from "react";
import ServiceCard from "../../components/services";

export default function Fullstackservices() {
  const servicesData = [
    {
      id: 1,
      title: "Back-end Excellence",
      description:
        "We combine front-end creativity with back-end precision to deliver solutions that meet modern needs. From responsive designs to efficient processing, our developers make your digital presence strong inside and out",
      icon: "/backend.png",
    },
    {
      id: 2,
      title: "API Creations & Integrations",
      description:
        "We combine front-end creativity with back-end precision to deliver solutions that meet modern needs. From responsive designs to efficient processing, our developers make your digital presence strong inside and out",
      icon: "/api.png",
    },
    {
      id: 3,
      title: "Front-end Development",
      description:
        "We combine front-end creativity with back-end precision to deliver solutions that meet modern needs. From responsive designs to efficient processing, our developers make your digital presence strong inside and out",
      icon: "/frontend.png",
    },
    {
      id: 4,
      title: "Database Mastery",
      description:
        "We combine front-end creativity with back-end precision to deliver solutions that meet modern needs. From responsive designs to efficient processing, our developers make your digital presence strong inside and out",
      icon: "/database.png",
    },
    {
      id: 5,
      title: "Scalable SaaS Solutions",
      description:
        "We combine front-end creativity with back-end precision to deliver solutions that meet modern needs. From responsive designs to efficient processing, our developers make your digital presence strong inside and out",
      icon: "/devops.png",
    },
    {
      id: 6,
      title: "Security & Compliance",
      description:
        "We combine front-end creativity with back-end precision to deliver solutions that meet modern needs. From responsive designs to efficient processing, our developers make your digital presence strong inside and out",
      icon: "/Security.png",
    },
  ];

  return (
    <section className="bg-[#D8D8D8] py-[100px]">
      <div className="w-full max-w-[1570px] mx-auto">
        
        <h2 className="font-semibold text-[32px] leading-normal text-[#131316] mx-auto text-center w-[100%] max-w-[333px] mb-[50px]">
          Our Full Stack Development Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {servicesData.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>

            <div className="icons_bar">
                
            </div>

      </div>
    </section>
  );
}
