export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between text-sm text-zinc-500 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Abroadify. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
