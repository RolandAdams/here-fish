import Header from "../header";
import Footer from "../footer";
import Image from "next/image";
import RoPhoto from "../../public/roland.jpg";

export default function About() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center bg-gray-100 py-12">
        <div className="max-w-4xl px-6 md:px-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
                src={RoPhoto}
                width={300}
                height={300}
                alt="Roland, Founder / Developer"
                className="rounded-full"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Roland</h3>
              <p className="text-lg text-gray-700">
                Hi! I'm Roland, Founder and Developer of this application. I
                grew up fishing in the Gulf and remember planning trips,
                checking sea conditions, and weather patterns using various
                sites and apps that never seemed to have streamlined
                information. With Fishcast, my goal is to create a simple and
                informative chart-style layout that explains when, where, and
                why you should target specific fish. Not going fishing? Use the
                web app to plan a day on the water with your family and go have
                fun with the confidence of knowing exactly what's beyond the
                horizon!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
