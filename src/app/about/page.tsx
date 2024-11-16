export default function AboutPage() {
  return (
    <main className="col-span-8 row-span-10 flex h-full flex-col rounded-lg bg-grid-item-background p-10">
      <h1 className="font-mono text-6xl font-black text-text-primary">
        $ whoami
      </h1>
      <div className="flex flex-col py-5 text-xl text-text-secondary">
        <span className="text-text-primary">I&apos;m a...</span>
        <ul className="flex flex-col gap-y-3 py-5 pl-2">
          <li className="motion-preset-slide-right-sm motion-delay-0/translate">
            Freelance web developer
          </li>
          <li className="motion-preset-slide-right-sm motion-delay-100/translate">
            Fulltime nerd
          </li>
          <li className="motion-preset-slide-right-sm motion-delay-150/translate">
            Part-time bug bounty hunter
          </li>
          <li className="motion-preset-slide-right-sm motion-delay-200/translate">
            Kylteri (ew)
          </li>
        </ul>
      </div>
    </main>
  );
}
