import { Cisco, Linkedin } from "@thesvg/react";
import { AlertCircle, GraduationCap } from "lucide-react";
import { SiEdx } from "react-icons/si";

type Cert = {
  title: string;
  issuer: string;
  link: string;
};

const certs: Cert[] = [
  {
    title: "Google Cybersecurity",
    issuer: "Google via Coursera",
    link: "https://www.coursera.org/specializations/google-cybersecurity",
  },
  {
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University via edX",
    link: "https://www.edx.org/course/cs50x-introduction-to-computer-science",
  },
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/courses/computer-hardware-basics.html",
  },
  {
    title: "Introduction to IoT",
    issuer: "Cisco",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/courses/introduction-to-iot.html",
  },
  {
    title: "Operating Systems Basics",
    issuer: "Cisco",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/courses/operating-systems-basics.html",
  },

  {
    title: "Cybersecurity",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/cybersecurity",
  },
  {
    title: "System Administration",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/system-administration",
  },
  {
    title: "Software Development",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/software-development",
  },
  {
    title: "Docker Foundations",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/docker-foundations",
  },
  {
    title: "GitHub",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/github",
  },
];

const LogoWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-6 w-6 items-center justify-center shrink-0">
    {children}
  </div>
);

const issuerIcons: Record<string, React.ReactNode> = {
  "Google via Coursera": (
    <LogoWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
</LogoWrapper>
  ),

  "Harvard University via edX": (
    <LogoWrapper>
      <SiEdx className="h-5 w-5 text-white" />
    </LogoWrapper>
  ),

  Cisco: (
    <LogoWrapper>
      <Cisco className="h-6 w-6 text-[#049FD9]" />
    </LogoWrapper>
  ),

  "LinkedIn Learning": (
    <LogoWrapper>
      <Linkedin className="h-5 w-5 text-[#0072B1]" />
    </LogoWrapper>
  ),
};

const grouped = certs.reduce<Record<string, Cert[]>>((acc, cert) => {
  if (!acc[cert.issuer]) {
    acc[cert.issuer] = [];
  }

  acc[cert.issuer].push(cert);

  return acc;
}, {});

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="
        mt-8
        rounded-3xl
        border border-[var(--border)]
        bg-[var(--surface)]
        backdrop-blur-xl
        p-4 md:p-6
      "
    >
      <div className="mb-6 flex items-center gap-3">
        <GraduationCap size={22} className="text-[var(--accent)]" />

        <div>
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            Certifications
          </h2>

          <p className="text-xs text-[var(--text-muted)]">
            Structured learning backed by hands-on experimentation.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(grouped).map(([issuer, issuerCerts]) => (
          <div
            key={issuer}
            className="
                rounded-2xl
                border border-[var(--border)]
                p-4
              "
          >
            <div className="mb-3 flex items-center gap-2">
              {issuerIcons[issuer]}

              <h3
                className="
                    text-sm
                    font-semibold
                    text-[var(--text-primary)]
                  "
              >
                {issuer}
              </h3>
            </div>

            <ul className="space-y-2">
              {issuerCerts.map((cert) => (
                <li
                  key={cert.title}
                  className="
                      text-xs
                      text-[var(--text-secondary)]
                      flex flex-row justify-between
                    "
                >
                  • {cert.title}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline"
                  >
                    View
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="
          mt-6
          border-t border-[var(--border)]
          pt-4
          flex items-center gap-2
          text-xs
          text-[var(--text-muted)]
        "
      >
        <AlertCircle size={14} />

        <span>
          Certificates validate knowledge. Projects validate execution.
        </span>
      </div>
    </section>
  );
}
