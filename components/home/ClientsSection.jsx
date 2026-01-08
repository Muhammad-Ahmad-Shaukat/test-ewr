import Image from "next/image";
import Link from "next/link";
const clientData = [
  {
    title: "Data Delivery Platform for a Leading Investment Fund",
    description:
      "Best EWR Limo Service for Business Travelers and Luxury Airport Transportation",
    imageUrl: "/ExecutiveLimoService.avif",
    titlewidth: "420",
  },
  {
    title: "Premium Limo Service for Luxury Airport Transportation",
    description: "Best EWR Limo Service for Business Travelers and Luxury Airport Transportation",
    imageUrl: "/ExecutiveLimoService.avif",
    titlewidth: "300",
  },
  {
    title: "Luxury Airport Transportation Services",
    description: "Best EWR Limo Service for Business Travelers and Luxury Airport Transportation",
    imageUrl: "/ExecutiveLimoService.avif",
    titlewidth: "356",
  },
];

const ClientsSection = () => {
  return (
    <section className=" w-full max-w-full max-auto px-5 lg:pt-[108px] md:pt-[70px] pt-[60px]">
      <h2 className="lg:text-[42px] md:text-[38px] text-[32px] font-semibold leading-[114%] text-[#131316] mt-[17px] text-center mb-5">
        From the EWR Limo Blog
      </h2>
      <p className="text-[18px] font-normal leading-normal w-full max-w-[716px] mx-auto text-[#131316] mb-10 text-center">
        Stay updated with the latest tips, insights, and news from the world of airport transportation. Our top blog posts cover everything from travel hacks and airport transfer guides to luxury limo service tips, helping you make every ride smooth and stress-free.
      </p>
      <div className="flex blogs flex-col md:flex-row justify-center w-full max-w-[1459px] mx-auto gap-[19px]">
        {clientData.map((client, index) => (
          <div
            className="lg:mb-0 mb-5"
            key={index}
            style={{ width: index === 0 ? 610 : 384 }}
          >
            <Image
              width={380}
              height={240}
              src={client.imageUrl}
              alt={client.title}
              className="h-auto object-cover w-full"
            />
            <h3
              className={`lg:text-[25px] md:text-[22px] text-[20px] font-medium leading-8 text-[#131316] lg:mt-[39px] mt-[30px] mb-2.5 w-full max-w-[${client.titlewidth}px]`}
            >
              {client.title}
            </h3>
            <p className="md:text-[17px] text-[16px] leading-[23px] font-normal text-[#131316] w-full max-w-[80%]">
              {client.description}
            </p>
          </div>
        ))}
      </div>
      <div className="block text-center mt-[30px]">
        <Link
          href="#"
          className="inline-flex items-center text-[17px] leading-[25px] text-[#131316] font-semibold mx-auto"
        >
          View more{" "}
          <span className="ml-2">
            <Image src="/arrow.png" alt="Arrow right" width={43} height={43} />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ClientsSection;
