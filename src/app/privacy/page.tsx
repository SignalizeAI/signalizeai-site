import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | SignalizeAI",
  description: "Privacy Policy for the SignalizeAI Chrome Extension",
};

export default function PrivacyPage() {
  return (
    <main className={styles.container}>
      <h1>Privacy Policy for SignalizeAI</h1>
      <p>
        <strong>Last updated:</strong> 31 December 2025
      </p>

      <p>
        SignalizeAI (“we”, “our”, or “the extension”) is a Chrome extension
        designed to help users analyze publicly available business websites and
        generate sales-related insights.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Website Content</h3>
      <p>
        SignalizeAI processes publicly available content from the active browser
        tab, including page titles, meta descriptions, headings, and visible
        text.
      </p>
      <p>This data is used only to generate on-screen analysis for the user.</p>

      <p>We do not collect:</p>
      <ul>
        <li>Private or password-protected pages</li>
        <li>User form inputs</li>
        <li>Cookies or session data</li>
      </ul>

      <h3>1.2 User Account Information</h3>
      <p>
        If a user chooses to sign in using Google, we receive their email address
        and name via secure authentication handled by Supabase.
      </p>

      <h3>1.3 Saved Analyses (Optional)</h3>
      <p>
        If enabled by the user, saved analyses may include the domain name,
        generated insights, and a timestamp. This data is private and accessible
        only to the authenticated user.
      </p>

      <h2>2. How We Use Data</h2>
      <p>Collected data is used strictly to:</p>
      <ul>
        <li>Generate AI-based business insights</li>
        <li>Display results within the extension</li>
        <li>Save user-requested analyses</li>
        <li>Improving extension functionality and user experience</li>
      </ul>

      <p>We do not sell, share, or use data for advertising or tracking.</p>

      <h2>3. AI Processing</h2>
      <p>SignalizeAI uses a third-party AI API to generate insights.</p>
      <ul>
        <li>Only extracted website text is sent for analysis</li>
        <li>No personal user data is sent to the AI service</li>
        <li>API requests are rate-limited and secured server-side</li>
        <li>
          AI responses are generated on-demand and are not used to train models
          or retained for unrelated purposes
        </li>
      </ul>

      <h2>4. Data Storage & Security</h2>
      <ul>
        <li>Authentication and saved data are stored using <b>Supabase</b></li>
        <li>API keys are never exposed in the extension</li>
        <li>
          All backend requests are protected via origin checks and rate limiting
        </li>
        <li>Industry-standard security practices are followed</li>
      </ul>

      <h2>5. Permissions Explanation</h2>
      <p>SignalizeAI requests the following permissions:</p>
      <ul>
        <li>
          <strong>Tabs</strong>: Read active tab content
        </li>
        <li>
          <strong>Side Panel</strong>: Display analysis
        </li>
        <li>
          <strong>Storage</strong>: Save preferences
        </li>
        <li>
          <strong>Identity</strong>: Support Google sign-in
        </li>
      </ul>
      <p>
        <b>These permissions are used only for core functionality.</b>
      </p>

      <h2>6. Data Retention & Deletion</h2>
      <ul>
        <li>Users may delete saved analyses at any time</li>
        <li>Users may sign out to remove access</li>
        <li>Upon account deletion, all user data is removed from our systems</li>
      </ul>

      <h2>7. Third-Party Services</h2>
      <p>SignalizeAI integrates with:</p>
      <ul>
        <li>Google OAuth (authentication)</li>
        <li>Supabase (authentication & storage)</li>
        <li>AI API provider (text analysis)</li>
      </ul>
      <p>
        Each service operates under its own privacy policy, which governs their
        respective data handling practices.
      </p>

      <h2>8. Children’s Privacy</h2>
      <p>
        SignalizeAI is not intended for users under the age of 13. We do not
        knowingly collect data from children.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        This Privacy Policy may be updated from time to time. Any changes will be
        reflected on this page with an updated date.
      </p>

      <h2>10. Contact</h2>
      <p>
        If you have any questions or concerns regarding privacy, you may contact
        us at:
      </p>
      <p>
        <a href="mailto:privacy@signalizeai.org">
          <strong>privacy@signalizeai.org</strong>
        </a>
      </p>

      <footer>© 2026 SignalizeAI</footer>
    </main>
  );
}
