"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cloud, Github, Instagram, Linkedin, Moon, Shield, Sun, Terminal } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500">
        {/* Navbar */}
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
          <h1 className="text-xl font-bold tracking-wide">Asaad FETHALLAH</h1>
          <Button
            variant="outline"
            className="rounded-2xl"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </nav>

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              CyberSecurity & DevSecOps Engineer
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
              CyberSecurity and Digital Trust engineering student, passionate about Linux systems, networks, virtualization, and web development.
Interested in DevSecOps, Cloud Security, and SOCs, with a solid foundation in system administration, network architecture, and infrastructure security.
            </p>
            <div className="flex gap-4">
              <a href="/AsaadFETHALLAH_CV.pdf" download>
                <Button className="rounded-2xl shadow-lg">Download CV</Button>
              </a>
              <a href="mailto:assaad2005.fet@gmail.com">
                <Button variant="outline" className="rounded-2xl">
                  Contact Me
                </Button>
              </a>
            </div>

            <div className="flex gap-4">
              {/* Social Links */}
<div className="flex justify-center gap-6 mt-6">
  <a
    href="https://www.linkedin.com/in/asaad-fethallah-1137b1338/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
  >
    <Linkedin className="w-6 h-6" /> {}
  </a>
  <a
    href="https://www.instagram.com/__af5__"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
  >
    <Instagram className="w-6 h-6" /> {}
  </a>
  <a
    href="https://github.com/AsaadFethallah/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
  >
    <Github className="w-6 h-6" /> {}
  </a>
</div>
            </div>
          </motion.div>

          {/* Image Room */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <span className="text-gray-400 text-center px-4">
                <img src="/Toxedo.jpeg" className="w-full h-full object-cover rounded-2xl" />
              </span>
            
          </motion.div>
        </section>

        {/* Cyber Highlights */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Core Domains
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "SOC & SIEM", desc: "Wazuh deployment, alert prioritization engine using ML." },
              { icon: Cloud, title: "Cloud Security", desc: "AWS architecture deployment and infrastructure hardening." },
              { icon: Terminal, title: "Systems & DevSecOps", desc: "Linux, Docker, CI/CD pipelines and secure deployments." },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="rounded-2xl shadow-xl bg-white dark:bg-gray-900">
                  <CardContent className="p-8 text-center">
                    <item.icon className="mx-auto mb-4 w-10 h-10" />
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Big Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Secure E-Commerce (Spring Boot + React)",
              "AWS SIEM Architecture with Wazuh",
              "SOC Alert Prioritization Engine (ML)",
              "Mobile App (Flutter + Django)",
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="rounded-2xl shadow-lg bg-white dark:bg-gray-900">
                  <CardContent className="p-6 font-medium">
                    {project}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Certificates */}
<section className="max-w-6xl mx-auto py-16 px-4">
  <h2 className="text-3xl font-bold mb-10 text-center">Certificates</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      { title: "Ethical Hacker (Cisco)"},
      { title: "Ethical Hacker Arabic (Is7ee7)"},
      { title: "OSINT Fundamentals (TCM Security)"},
      { title: "Red Hat System Administration I (RH124 - RHA) - Ver. 10 (RedHat)"},
      { title: "AWS Academy Graduate - Cloud Security Foundations - Training Badge"},
      { title: "AWS Academy Graduate - Cloud Foundations - Training Badge"},
      { title: "Introduction to the Threat Landscape 3.0 (Fortinet)"},
      { title: "Technical Introduction to Cybersecurity 3.0 (Fortinet)"},
      { title: "Getting Started in Cybersecurity 3.0 (Fortinet)"},
      { title: "EF SET English Certificate 73/100 (C2 Proficient)"},
      { title: "ISO 27001: Information Security Management Systems Certified (SkillFront)"},
      { title: "Introduction to Cybersecurity (Cisco)"},
      { title: "Linux Unhatched (Cisco)"},
      { title: "Linux Essentials (Cisco)"},
      { title: "CCNA: Introduction to Networks (Cisco)"},
      { title: "Python Essentials (Cisco)"},
      { title: "Python Essentials 2 (Cisco)"},
    ].map((cert, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Card className="rounded-2xl shadow-lg bg-white dark:bg-gray-900">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</section>

        {/* Footer */}
        <footer className="text-center py-10 border-t border-gray-200 dark:border-gray-800">
          <p>Casablanca, Morocco</p>
          <p className="text-gray-500 dark:text-gray-400">
            assaad2005.fet@gmail.com | +212 644175858
          </p>
        </footer>
      </div>
    </div>
  );
}
