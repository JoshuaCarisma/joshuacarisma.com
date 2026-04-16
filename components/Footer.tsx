export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-3xl px-4 py-6 flex items-center justify-between text-sm text-gray-500">
        <span>© {new Date().getFullYear()} Joshua Carisma</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/joshuacarisma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
