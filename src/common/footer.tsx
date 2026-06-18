import { Phone, Mail, GraduationCap } from "lucide-react";
import Image from "next/image";

const quickLinks = ["Admission Process", "Fee Details", "Specializations", "Contact Us"];
const legalLinks = ["Privacy Policy", "Terms of Use", "Disclaimer"];

export default function Footer() {
    return (
        <footer className="bg-navy-900 px-6 py-14">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1.4fr_1fr_1fr]">
                    {/* Brand + description */}
                    <div>
                        <Image
                            src='/logo/logo-white.svg'
                            alt="footer logo"
                            width={100}
                            height={100}
                            className="w-1/2 h-auto object-cover"
                        />
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
                            EduCollege is an independent education counselling platform. We
                            are not affiliated with, endorsed by, or sponsored by VIT
                            (Vellore Institute of Technology) or any of its constituent
                            institutions. Our services are limited to admission guidance
                            and program information. All final admission decisions rest
                            solely with VIT. Counselling fees charged by EduCollege are
                            separate from VIT&apos;s official university fees. For direct
                            applications, visit the official VIT portal at vit.ac.in.
                        </p>

                        <p className="mt-8 text-xs font-bold uppercase tracking-wider text-gold-500">
                            Office Location
                        </p>
                        <p className="mt-2 max-w-sm text-sm text-white/70">
                            NX-One, Tech, Greater Noida West Rd, Zone IV, Bisrakh Jalalpur,
                            Noida, Uttar Pradesh 201306
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-gold-500">
                            Quick Links
                        </p>
                        <ul className="mt-4 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-white/80 hover:text-white"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-gold-500">
                            Contact Support
                        </p>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-center gap-2 text-sm font-medium text-white/80">
                                <Phone className="h-4 w-4 text-gold-500" />
                                +91 63942 58442
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium text-white/80">
                                <Mail className="h-4 w-4 text-gold-500" />
                                info@educollege.in
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6">
                    <p className="text-xs leading-relaxed text-white/40">
                        Disclaimer: EduCollege is an independent counselling platform and
                        is not the official website of VIT. We provide professional
                        counselling services to help students navigate the admission
                        process for VIT Online MCA programs. All final admission
                        decisions and degree certifications are handled exclusively by
                        Vellore Institute of Technology (VIT). For direct applications,
                        please visit the official university portal.
                    </p>
                </div>

                <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} VIT Online MCA. Powered by EduCollege. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {legalLinks.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-xs font-medium text-white/50 hover:text-white"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}