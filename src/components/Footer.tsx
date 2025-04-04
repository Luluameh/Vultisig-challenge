import { motion } from "framer-motion";
import {
  Twitter,
  Github,
  MessageCircle,
  Shield,
  Lock,
  Zap,
} from "lucide-react";
import Logos from "../Assets/Logomark - no bg.png";


const Footer = () => {
  const linkGroups = [
    {
      title: "Product",
      links: [
        { name: "How It Works", href: "#" },
        { name: "Features", href: "#" },
        { name: "Security", href: "#" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Audit Reports", href: "#" },
        { name: "API Status", href: "#" },
        { name: "GitHub", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#", name: "Twitter" },
    { icon: <Github size={20} />, href: "#", name: "GitHub" },
    { icon: <MessageCircle size={20} />, href: "#", name: "Discord" },
  ];

  const securityBadges = [
    { icon: <Shield size={16} />, text: "Open Source" },
    { icon: <Lock size={16} />, text: "Audited" },
    { icon: <Zap size={16} />, text: "Multi-Chain" },
  ];

  return (
    <footer className="bg-[#02122B] border-t border-[#11284A] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#33E6BF] mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#2155DF] mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {linkGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="bg-gradient-to-r from-[#33E6BF] to-[#0439C7] bg-clip-text text-transparent">
                  {group.title}
                </span>
              </h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#33E6BF] transition-colors flex items-start"
                    >
                      <span className="mr-2 text-[#33E6BF]">↗</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-[#11284A] pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Logo and tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <div >
                {/* <Shield size={20} className="text-white" /> */}
                <img src={Logos} alt="Vultisig" className="h-20" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Vultisig</h2>
                <p className="text-gray-400 text-sm">
                  The future of crypto security
                </p>
              </div>
            </motion.div>

            {/* Security badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {securityBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#11284A] border border-[#33E6BF]/20 rounded-full px-4 py-2 flex items-center"
                >
                  <span className="text-[#33E6BF] mr-2">{badge.icon}</span>
                  <span className="text-white text-sm">{badge.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-[#11284A] hover:bg-[#33E6BF]/10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#33E6BF] transition-all border border-[#11284A] hover:border-[#33E6BF]/30"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Copyright and bottom links */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-[#11284A]">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              © {new Date().getFullYear()} Vultisig. All rights reserved.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4">
              {["Terms", "Privacy", "Cookies", "GDPR"].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-500 hover:text-[#33E6BF] text-sm transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
