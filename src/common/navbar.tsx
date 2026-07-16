
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy-900">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-3">
        <a
          href="#lead-form"
          className="flex-shrink-0 rounded-full bg-gold-500 px-6 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-gold-600"
        >
          Talk to a Counsellor
        </a>
      </div>
    </header>
  );
}