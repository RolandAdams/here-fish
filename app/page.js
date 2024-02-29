import Header from "./header";
import Footer from "./footer";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="py-16 lg:py-32 text-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-0">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              The Ultimate Tool <br className="md:hidden" />
              <span className="text-green-600">Observe.</span>{" "}
              <span className="text-yellow-600">Understand.</span>{" "}
              <span className="text-blue-600">Catch More.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Get real-time conditions and weather patterns where you want to
              fish. Observe the patterns of target species and use our tips to
              become more successful on the water!
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-semibold tracking-wider uppercase transition duration-300 hover:bg-blue-700 hover:text-white"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-0">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Real-Time Reports
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Access real-time reports from fellow anglers. See what's biting
              and where, so you can plan your next fishing trip with confidence.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-0">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Weather & Sea Conditions
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Stay ahead of the game by checking real-time weather and sea
              conditions. Know when it's the perfect time to cast your line.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-0">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Reef Locations
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Explore our comprehensive database of reef locations. Find the
              perfect spot to reel in your next big catch.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-0">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              About Us
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Learn more about the team behind Fishcast and our mission to help
              anglers of all skill levels improve their fishing experience.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
