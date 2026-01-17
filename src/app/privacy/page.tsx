import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SignalizeAI",
  description: "Privacy Policy for the SignalizeAI Chrome Extension",
};

export default function PrivacyPage() {
  return (
    <main className="bg-dark selection:bg-accent selection:text-dark min-h-screen font-sans text-gray-300">
      <div className="bg-primary pointer-events-none fixed top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <header className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="bg-primary/30 border-primary text-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-accent relative inline-flex h-2 w-2 rounded-full"></span>
            </span>
            Last updated: December 31, 2025
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed">
            SignalizeAI (“we”, “our”, or “the extension”) is a Chrome extension
            designed to help users analyze publicly available business websites
            and generate sales-related insights.
          </p>
        </header>

        <div className="via-primary mb-12 h-px w-full bg-gradient-to-r from-transparent to-transparent" />

        <div className="space-y-12">
          <section>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="text-accent">1.</span> Information We Collect
            </h2>

            <div className="border-primary/50 space-y-6 border-l pl-0 sm:pl-10">
              <div>
                <h3 className="mb-2 text-lg font-medium text-white">
                  1.1 Website Content
                </h3>
                <p className="mb-3 leading-7">
                  SignalizeAI processes publicly available content from the
                  active browser tab, including page titles, meta descriptions,
                  headings, and visible text. This data is used only to generate
                  on-screen analysis for the user.
                </p>
                <div>
                  <span className="mb-2 block text-sm font-semibold text-white">
                    We do NOT collect:
                  </span>
                  <ul className="grid gap-3 text-sm">
                    {[
                      "Private/Password-protected pages",
                      "User form inputs",
                      "Cookies or session data",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-red-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium text-white">
                  1.2 User Account Information
                </h3>
                <p className="leading-7">
                  If a user chooses to sign in using Google, we receive their
                  email address and name via secure authentication handled by
                  Supabase.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium text-white">
                  1.3 Saved Analyses (Optional)
                </h3>
                <p className="leading-7">
                  If enabled by the user, saved analyses may include the domain
                  name, generated insights, and a timestamp. This data is
                  private and accessible only to the authenticated user.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="text-accent">2.</span> How We Use Data
            </h2>
            <div className="pl-0 sm:pl-10">
              <p className="mb-4">Collected data is used strictly to:</p>
              <ul className="mb-6 space-y-3">
                {[
                  "Generate AI-based business insights",
                  "Display results within the extension",
                  "Save user-requested analyses",
                  "Improving extension functionality and user experience",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="text-accent h-5 w-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 italic">
                We do not sell, share, or use data for advertising or tracking.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="text-accent">3.</span> AI Processing
            </h2>
            <div className="pl-0 sm:pl-10">
              <p className="mb-4">
                SignalizeAI uses a third-party AI API to generate insights.
              </p>
              <ul className="space-y-3">
                {[
                  "Only extracted website text is sent for analysis",
                  "No personal user data is sent to the AI service",
                  "API requests are rate-limited and secured server-side",
                  "AI responses are generated on-demand and are not used to train models",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="text-accent h-5 w-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="text-accent">4.</span> Data Storage & Security
            </h2>
            <div className="pl-0 sm:pl-10">
              <ul className="space-y-3">
                {[
                  "Authentication and saved data are stored using Supabase.",
                  "API keys are never exposed in the extension (client-side).",
                  "All backend requests are protected via origin checks and rate limiting.",
                  "Industry-standard security practices are followed for data encryption.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="text-accent h-5 w-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="text-accent">5.</span> Permissions Explanation
            </h2>
            <div className="pl-0 sm:pl-10">
              <p className="mb-4">
                SignalizeAI requests the following permissions only for core
                functionality:
              </p>
              <ul className="space-y-3">
                {[
                  { title: "Tabs", desc: "Read active tab content" },
                  { title: "Side Panel", desc: "Display analysis UI" },
                  { title: "Storage", desc: "Save user preferences" },
                ].map((perm) => (
                  <li key={perm.title} className="flex items-start gap-3">
                    <svg
                      className="text-accent h-5 w-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      <strong className="text-accent">{perm.title}:</strong>{" "}
                      {perm.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="text-accent">6.</span> Data Retention & Deletion
            </h2>
            <div className="pl-0 sm:pl-10">
              <ul className="space-y-3">
                {[
                  "Users may delete specific saved analyses at any time via the extension interface.",
                  "Users may sign out to remove extension access to their account.",
                  "Upon full account deletion request, all user data is permanently removed from our systems.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="text-accent h-5 w-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="text-accent">7.</span> Third-Party Services
            </h2>
            <div className="pl-0 sm:pl-10">
              <p className="mb-4">
                SignalizeAI integrates with the following services:
              </p>
              <ul className="mb-4 space-y-2">
                <li>
                  <strong className="text-white">Google OAuth:</strong> For
                  secure authentication.
                </li>
                <li>
                  <strong className="text-white">Supabase:</strong> For database
                  storage and authentication management.
                </li>
                <li>
                  <strong className="text-white">AI API Provider:</strong> For
                  processing text and generating insights.
                </li>
              </ul>
              <p className="text-sm text-gray-400 italic">
                Each service operates under its own privacy policy, which
                governs their respective data handling practices.
              </p>
            </div>
          </section>

          {/* Sections 8 & 9 */}
          <section className="border-primary/30 border-t pt-8">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="text-accent">8.</span> Childrens Privacy
            </h2>
            <p className="mb-8">
              SignalizeAI is not intended for users under the age of 13. We do
              not knowingly collect data from children.
            </p>

            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="text-accent">9.</span> Changes to This Policy
            </h2>
            <p>
              This Privacy Policy may be updated from time to time. Any changes
              will be reflected on this page with an updated date.
            </p>
          </section>

            <section>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="text-accent">10.</span> Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions or concerns regarding privacy, please
              reach out to us directly at{" "}
              <a
              href="mailto:privacy@signalizeai.org"
              className="text-accent hover:underline"
              >
              privacy@signalizeai.org
              </a>
              .
            </p>
            </section>
        </div>

        <footer className="border-primary/30 mt-20 border-t pt-8 text-center text-sm text-gray-500">
          <p>© 2026 SignalizeAI. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
