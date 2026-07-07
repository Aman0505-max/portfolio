import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold gradient-text">
              aman.
            </Link>
            <p className="mt-4 text-foreground-secondary max-w-md">
              Software Developer specializing in ASP.NET Core, Angular, and
              enterprise SaaS applications. Building scalable backend systems
              and cloud architectures.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-4 text-sm text-foreground-muted">
              <p>{siteConfig.links.email}</p>
              <p>{siteConfig.links.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-foreground-muted text-sm">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export { Footer };
