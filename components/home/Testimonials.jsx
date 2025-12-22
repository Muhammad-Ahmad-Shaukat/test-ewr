import TestimonialSlider from "./TestimonialSlider";

export default function testimonials() {
  return (
    <section className="w-full max-w-full">
      <h2 className="lg:text-[42px] md:text-[38px] text-[32px] md:px-0 px-5 font-semibold leading-[114%] text-[#131316] text-center w-full max-w-[465px] mb-[46px] mx-auto">
        What Working With Us Feels Like
      </h2>
      <main className="w-full max-w-[1319px] mx-auto">
        <TestimonialSlider />
      </main>
    </section>
  );
}
