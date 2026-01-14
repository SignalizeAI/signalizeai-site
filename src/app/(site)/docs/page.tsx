import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | SignalizeAI",
  description: "SignalizeAI API Documentation and Guides",
};

const DocsPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Documentation" />

      <section className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
                Getting Started
              </h2>
              <p className="text-body-color dark:text-body-color-dark text-base">
                Welcome to SignalizeAI documentation. Here you&apos;ll find
                comprehensive guides and documentation to help you start working
                with SignalizeAI as quickly as possible.
              </p>
            </div>

            {/* Support */}
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-slate-900">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Need Help?
              </h3>
              <p className="text-body-color dark:text-body-color-dark mb-4 text-base">
                Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://discord.gg/signalizeai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition"
                >
                  Join Discord Community
                </a>
                <a
                  href="https://github.com/SignalizeAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-black transition dark:border-gray-700 dark:text-white"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DocsPage;
