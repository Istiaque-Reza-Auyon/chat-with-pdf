import Image from "next/image";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      name: "Store your PDF douments",
      description: "Keep your PDF documents organized and accessible.",
      icon: GlobeIcon
    },
    {
      name: "Search your PDF documents",
      description: "Quickly find information within your PDF documents.",
      icon: EyeIcon
    },
    {
      name: "Analyze your PDF documents",
      description: "Gain insights from your PDF documents with advanced analysis.",
      icon: BrainCogIcon
    },
    {
      name: "Responsive across devices",
      description: "Access your PDF documents seamlessly on any device.",
      icon: MonitorSmartphoneIcon
    },
    {
      name: "Secure your PDF documents",
      description: "Keep your PDF documents safe and secure.",
      icon: ServerCogIcon
    },
    {
      name: "Blazing fast responses",
      description: "Experience lightning-fast responses for your queries.",
      icon: ZapIcon
    }
  ]

  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Your Interactive PDF Companion
            </h2>

            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs into Interactive Conversations
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDF.</span>
              <br />
              <br />
              Upload your document, and our chatbot will answer questions, summarize content, and answer all your Qs. Ideal for everyone,
              <span className="text-indigo-600">
                {" "}Chat with PDF
              </span>{" "}
              turns static documents into{" "}
              <span className="font-bold">dynamic conversations</span>, enhancing productivity 10x fold effortlessly.
            </p>

            <Button asChild className="mt-10">
              <Link href="/dashboard">Get Started</Link>
            </Button>

            <div className="relative overflow-hidden pt-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Image
                  src="https://res.cloudinary.com/dbhfbh86g/image/upload/v1748074686/ChatGPT_Image_May_24_2025_02_05_02_PM_kwvj9t.png"
                  alt="Hero Image"
                  width={2432}
                  height={1442}
                  className="mb-0 rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                />

                <div aria-hidden="true" className="relative">
                  <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
                </div>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
              <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"> 
                {features.map((feature, i) => (
                  <div className="relative pl-9" key={i}>
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon 
                      aria-hidden= "true"
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      />
                    </dt>

                    <dd>
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
