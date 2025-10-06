import Image from 'next/image';

const AboutSection = () => {
  return (
    <section
      data-section="features"
      className="bg-black text-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="inline-block mb-4">
            <Image
              alt="less-than"
              width={150}
              height={150}
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4a300a22-c0e5-44fb-8935-05822f2c6a09-gdgvitm-tech/assets/images/next-653967-gdglogo.png?"
            />
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            We are
            <br />
            GDG VIT
          </h2>
        </div>
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          <div className="bg-[#212121] p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              We believe in thinking beyond the conventional. A club's resources shouldn't just be directed toward organizing events, but also towards fostering a culture of continuous learning and collaborative growth. With that in mind, we host flagship events like{' '}
              <span className="text-blue-400">
                Hackbuild, Competitive Programming under Spectrum
              </span>{' '}
              and many insightful workshops.
            </p>
          </div>

          <div className="bg-[#212121] p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Our Story
            </h3>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              Started in 2021 as Google Developer Student Clubs (GDSC), the club transitioned to GDG on Campus in 2024. It's been an incredible 5-year journey of innovation, collaboration, and growth — a community proudly powered by{' '}
              <span className="text-green-400">GoogleForDevs</span>. Over the years, we've empowered countless students to learn.
            </p>
          </div>

          <div className="bg-[#212121] p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Join Us
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              Get involved in our upcoming events and connect with fellow developers.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
              <div className="space-y-3 font-medium text-sm sm:text-base md:text-lg flex-1">
                <div className="bg-[#EA4335] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-3/4">
                  Innovate
                </div>
                <div className="bg-[#FBBC04] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-3/4">
                  Collaborate
                </div>
                <div className="bg-[#0F9D58] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-3/4">
                  Create
                </div>
              </div>
              <div className="flex justify-center sm:justify-end flex-shrink-0">
                <Image
                  alt="Animated Globe"
                  width={160}
                  height={133}
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4a300a22-c0e5-44fb-8935-05822f2c6a09-gdgvitm-tech/assets/images/next-071611-globe.gif?"
                  className="sm:w-48 md:w-56 lg:w-60"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;