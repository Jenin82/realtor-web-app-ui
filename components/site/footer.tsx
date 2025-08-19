"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer aria-label="Footer" className="mt-20 max-w-[1440px] mx-auto">
      <div className="w-full">
        <div className="bg-card text-card-foreground">
          {/* Top cover image */}
          <div className="relative">
            <Image
              src="/footer/footer-image.jpg"
              alt="City skyline"
              width={1440}
              height={500}
              className="object-cover rounded-t-4xl w-[400px] lg:w-[1420px] max-w-[1420px] lg:h-[600px] h-[400px] mx-auto"
            />
            {/* Bottom fade: transparent -> white */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-transparent to-white" />
          </div>

          {/* Intro + CTA */}
          <div className="px-6 pb-6 pt-4 sm:px-10 md:px-12 max-w-[1140px] mx-auto">
            <div className="flex flex-col gap-6 border-b pb-8 md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl font-semibold sm:text-4xl md:text-[2.7rem] leading-13">
                550+ People Managed Homes <br />
                in <span className="text-primary">Goa</span> with Us
              </h2>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <MessageCircle className="size-4" aria-hidden />
                Talk to Us
              </Link>
            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Discover
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground/90">
                  <li>
                    <Link className="hover:text-foreground" href="#">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-foreground" href="#">
                      Properties
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-foreground" href="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-foreground" href="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-foreground" href="#">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Properties
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground/90">
                  <li>
                    <Link className="hover:text-foreground" href="#">
                      New Projects
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-foreground" href="#">
                      Co-Working Space
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-foreground" href="#">
                      Apartments
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-foreground" href="#">
                      Holiday Homes
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Services
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground/90">
                  <li>
                    <Link className="hover:text-foreground" href="#">
                      Sell Your Property
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-foreground" href="#">
                      Rent Your Property
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-foreground" href="#">
                      Housing Loans
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Address
                </h3>
                <address className="not-italic text-sm text-muted-foreground/90">
                  2nd Floor, Innerspace Business Centre
                  <br /> Chittethukara, Kakkanad 682030
                  <br />
                  <span className="mt-2 block">Phone: +91 95 62 49 25 75</span>
                  <span className="block">
                    Email:{" "}
                    <a
                      className="underline-offset-4 hover:underline"
                      href="mailto:me@realtorhadi.com"
                    >
                      me@realtorhadi.com
                    </a>
                  </span>
                </address>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col items-start justify-between gap-4 border-t py-6 text-sm text-muted-foreground md:flex-row">
              <p className="text-muted-foreground font-semibold">
                REALTOR.COM © {new Date().getFullYear()} ALL RIGHTS RESERVED
              </p>
              <div className="flex items-center gap-6">
                <Link href="#" className="hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
