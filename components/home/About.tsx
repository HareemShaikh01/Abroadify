export default function About() {
  return (
    <section className="w-full py-20 bg-zinc-50 dark:bg-zinc-900 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">Why Choose Abroadify?</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            We provide comprehensive guidance and support for students looking to study abroad. From university selection to visa applications, we are with you every step of the way.
          </p>
          <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Expert Counselors
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Visa Assistance
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> University Shortlisting
            </li>
          </ul>
        </div>
        <div className="flex-1 w-full aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-500 dark:text-zinc-400">
          [Illustration Placeholder]
        </div>
      </div>
    </section>
  );
}
