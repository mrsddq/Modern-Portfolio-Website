import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function Portfolio() {
  useEffect(() => {
    document.title = "Laraib Siddiqui | DevOps & AI Portfolio";
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Laraib Siddiqui's modern portfolio showcasing projects, skills in DevOps, AI, and software development." />
        <meta name="keywords" content="Laraib Siddiqui, DevOps, AI, React, Portfolio, Full Stack Developer, Cloud, Kubernetes, Terraform, AWS, GCP" />
        <meta name="author" content="Laraib Siddiqui" />
        <title>Laraib Siddiqui | DevOps & AI Portfolio</title>
      </Head>

      <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="p-8 text-center">
          <motion.h1 
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            Laraib Siddiqui
          </motion.h1>
          <motion.p 
            className="text-lg mt-2"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
          >
            DevOps | AI Engineer | Full Stack Developer
          </motion.p>
          <a href="/resume.pdf" download className="inline-block mt-4 text-blue-600 underline">Download Resume</a>
        </header>

        <section className="p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div 
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold text-xl">SaaS for Hospital ETL</h3>
              <p className="mt-2 text-sm text-gray-700">
                Built on GCP with OCR and Flask to digitize medical reports and prescriptions with backup & dashboards.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold text-xl">Expense Tracker App</h3>
              <p className="mt-2 text-sm text-gray-700">
                Next.js frontend with Google Sheets backend and Nodemailer alerts for bill due dates.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <li>Terraform, Docker, Kubernetes</li>
            <li>AWS, Azure, GCP</li>
            <li>React, Next.js, Node.js</li>
            <li>Python, Flask, FastAPI</li>
            <li>CI/CD, GitHub Actions, Azure DevOps</li>
            <li>LLMs, Prompt Engineering, GenAI</li>
          </ul>
        </section>

        <section className="p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <p className="text-sm text-gray-700">Coming soon: insights on DevOps, AI, and career tips.</p>
        </section>

        <section className="p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <form className="grid gap-4">
            <input type="text" placeholder="Name" className="p-2 border rounded" required />
            <input type="email" placeholder="Email" className="p-2 border rounded" required />
            <textarea placeholder="Message" className="p-2 border rounded" rows="4" required></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
          </form>
        </section>

        <footer className="p-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Laraib Siddiqui. Built with 💻 and ☕ | <Link href="/en">EN</Link> / <Link href="/de">DE</Link>
        </footer>
      </div>
    </>
  );
}
