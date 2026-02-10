import Image from "next/image";

export default function Home() {
  const pillars = [
    {
      title: "Education",
      detail:
        "Introductory and advanced blockchain education, smart contracts, DApp creation, and guest speakers.",
    },
    {
      title: "Building & Technical Learning",
      detail:
        "Architecture, decentralized ledgers, consensus mechanisms, and tamper-resistant systems.",
    },
    {
      title: "Research & Investment",
      detail:
        "Crypto investment fund research, pitch development, and transparent portfolio discussion.",
    },
    {
      title: "Industry & Ecosystem Exposure",
      detail:
        "Conference attendance, industry events, and networking with blockchain builders.",
    },
  ];

  const projects = [
    {
      name: "Crypto Investment Fund",
      description:
        "Member-led research group focused on thesis building, debate, and transparent portfolio management.",
      image: "/carousel/mbc.jpg",
    },
    {
      name: "Education Track",
      description:
        "Guided learning from blockchain fundamentals to smart contracts and DApp engineering.",
      image: "/carousel/unlock the block.png",
    },
    {
      name: "Research Studio",
      description:
        "Collaborative research on cryptography, security, and decentralized systems.",
      image: "/carousel/mbc group.jpg",
    },
  ];

  const events = [
    {
      title: "Interest Meeting",
      type: "Community",
      date: "Feb 10, 2026 · 6:00 PM · Van Munching Hall",
      status: "upcoming",
    },
    {
      title: "ETHDenver 2026",
      type: "Conference",
      date: "Feb 17-21, 2026",
      status: "upcoming",
    },
    {
      title: "Penn Blockchain Conference 2026",
      type: "Conference",
      date: "Mar 27-28, 2026",
      status: "upcoming",
    },
    {
      title: "Consensus Miami",
      type: "Conference",
      date: "May 5-7, 2026",
      status: "upcoming",
    },
  ];

  const team = [
    {
      name: "Dilan Taneja",
      role: "Co-President",
      focus: "Leadership",
      image: "/leadership/Dilan.jpg",
    },
    {
      name: "Vitthal Agarwal",
      role: "Co-President",
      focus: "Leadership",
      image: "/leadership/Vitthal.jpg",
    },
    {
      name: "Arjun Kartik Iyer",
      role: "Vice President",
      focus: "Operations",
      image: "/leadership/Arjun.PNG",
    },
    {
      name: "Samuel Cook",
      role: "Treasurer",
      focus: "Finance",
      image: "/leadership/Samuel Cook.png",
    },
    {
      name: "Sueun Cho",
      role: "Head of Research",
      focus: "Research",
      image: "/leadership/Sueun Cho.png",
    },
  ];

  const heroSlides = [
    {
      image: "/carousel/mbc.jpg",
      alt: "Blockchain at Maryland workshop",
    },
    {
      image: "/carousel/mbc group.jpg",
      alt: "Blockchain at Maryland group session",
    },
    {
      image: "/carousel/solana accelerate.jpg",
      alt: "Solana accelerate event",
    },
    {
      image: "/carousel/stand with crypto.jpg",
      alt: "Stand with crypto event",
    },
    {
      image: "/carousel/unlock the block.png",
      alt: "Unlock the block event",
    },
  ];

  const ecosystemLogos = [
    { name: "Stand With Crypto", file: "/partners/stand with crypto.png" },
    { name: "Polymarket", file: "/partners/polymarket.png" },
    { name: "Ledger", file: "/partners/ledger.png" },
    { name: "Internet Computer", file: "/partners/ICP.png" },
    { name: "Ethereum", file: "/partners/ethereum.png" },
    { name: "Bitcoin", file: "/partners/bitcoin.png" },
    { name: "College.xyz", file: "/partners/college xyz.png" },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(20,20,20,1),_rgba(8,8,8,1))] text-stone-100">
      <header className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute right-[-120px] top-[-120px] h-[420px] w-[420px] geom-ring rounded-full" />
        <nav className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-xl bg-ember opacity-80" />
              <div className="absolute inset-[4px] rounded-lg bg-[#0e0e0e]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/club logo.jpg"
                  alt="Blockchain at Maryland logo"
                  width={28}
                  height={28}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-stone-500">
                Blockchain at Maryland
              </p>
              <p className="text-xs text-stone-400">
                University of Maryland
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm text-stone-400 md:flex">
            <a className="hover:text-stone-200" href="#pillars">
              What We Do
            </a>
            <a className="hover:text-stone-200" href="#projects">
              Projects
            </a>
            <a className="hover:text-stone-200" href="#applications">
              Applications
            </a>
            <a className="hover:text-stone-200" href="#events">
              Events
            </a>
            <a className="hover:text-stone-200" href="#team">
              Team
            </a>
            <a className="hover:text-stone-200" href="#ecosystem">
              Ecosystem
            </a>
            <a className="hover:text-stone-200" href="#join">
              Join
            </a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-8 lg:flex-row lg:items-center lg:gap-14">
          <div className="flex-1">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-stone-500">
              Builder + Research Collective
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-stone-100 md:text-5xl">
              Where UMD Builds the Future of Blockchain
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-300">
              Blockchain at Maryland is the first student-led initiative and
              club focused on advancing blockchain research, development, and
              real-world opportunities at the University of Maryland, College
              Park.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                href="#join"
              >
                Join the Club
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-white/40"
                href="#events"
              >
                View Events
              </a>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="gradient-border">
              <div className="gradient-inner p-6">
                <div
                  className="hero-carousel"
                  role="region"
                  aria-roledescription="carousel"
                  aria-label="Blockchain at Maryland visuals"
                >
                  <div className="hero-carousel-track">
                    {[...heroSlides, ...heroSlides].map((slide, index) => (
                      <div
                        key={`${slide.image}-${index}`}
                        className="hero-carousel-slide"
                      >
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          width={1200}
                          height={800}
                          className="hero-carousel-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-ember opacity-10 blur-3xl" />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24">
        <section id="pillars" className="border-b border-white/5 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
                What We Do
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-100">
                Four Pillars of the Collective
              </h2>
            </div>
            <div className="hidden h-[2px] w-40 bg-ember md:block" />
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group flex items-start gap-6 border-b border-white/5 pb-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#121212] transition group-hover:border-amber-400/40">
                  <svg
                    viewBox="0 0 32 32"
                    className="h-6 w-6 text-stone-400 transition group-hover:text-amber-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path d="M6 12.5 16 6l10 6.5v7L16 26l-10-6.5z" />
                    <path d="M16 6v20" />
                    <path d="M6 12.5 16 18l10-5.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-100">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-400">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="border-b border-white/5 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
                Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-100">
                Core Workstreams
              </h2>
            </div>
            <div className="hidden h-[2px] w-40 bg-ember md:block" />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="hover-ember relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-6"
              >
                <Image
                  src={project.image}
                  alt={`${project.name} background`}
                  width={800}
                  height={600}
                  className="absolute inset-0 h-full w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e]/60" />
                <div className="relative z-10">
                <h3 className="text-xl font-semibold text-stone-100">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-stone-400">
                  {project.description}
                </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="applications" className="border-b border-white/5 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
                Applications
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-100">
                Blockchain Systems We Explore
              </h2>
            </div>
            <div className="hidden h-[2px] w-40 bg-ember md:block" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-300">
            {[
              "Cryptocurrencies",
              "DeFi (lending, trading, yield)",
              "NFTs & Gaming",
              "DePIN",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-[#111111] px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="events" className="border-b border-white/5 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
                Events
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-100">
                Events & Community Timeline
              </h2>
            </div>
            <div className="hidden h-[2px] w-40 bg-ember md:block" />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[120px_1fr]">
            <div className="hidden h-full w-[2px] timeline-line lg:block" />
            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.title}
                  className={`rounded-2xl border border-white/10 p-5 ${
                    event.status === "upcoming"
                      ? "bg-[#131313]"
                      : "bg-[#0f0f0f] opacity-70"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                        {event.type}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-stone-100">
                        {event.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-300">
                      {event.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="border-b border-white/5 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
                Team
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-100">
                Leadership & Technical Steering
              </h2>
            </div>
            <div className="hidden h-[2px] w-40 bg-ember md:block" />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-white/10 bg-[#111111] p-5 text-center"
              >
                <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border border-amber-300/30 bg-[#161616]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-stone-100">
                  {member.name}
                </h3>
                <p className="text-sm text-stone-400">{member.role}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-stone-500">
                  {member.focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="ecosystem" className="border-b border-white/5 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
                Ecosystem
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-100">
                Engaged With the Broader Web3 Community
              </h2>
            </div>
            <div className="hidden h-[2px] w-40 bg-ember md:block" />
          </div>
          <p className="mt-6 max-w-3xl text-sm text-stone-400">
            The club engages with builders, protocols, and industry initiatives
            through conferences, educational programming, and community
            collaborations.
          </p>
          <div className="logo-marquee mt-8">
            <div className="logo-track">
              {[...ecosystemLogos, ...ecosystemLogos].map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="logo-item">
                  <div
                    className={`logo-frame ${
                      logo.name === "College.xyz"
                        ? "logo-frame-light logo-frame-rect"
                        : ""
                    }`}
                  >
                    <Image
                      src={logo.file}
                      alt={`${logo.name} logo`}
                      width={140}
                      height={48}
                      className="logo-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="py-16">
          <div className="rounded-3xl border border-white/10 bg-[#111111] p-10">
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
              Join
            </p>
            <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-stone-100">
                  Builders, Researchers, and Newcomers Welcome
                </h2>
                <p className="mt-3 max-w-xl text-sm text-stone-400">
                  No prior blockchain experience required. We welcome students
                  who want to learn, build, and research real systems across
                  Web3, DeFi, and decentralized infrastructure with a technical,
                  professional, and builder-first mindset.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                  href="https://groupme.com/join_group/110034791/X3k7lCew"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join GroupMe
                </a>
                <a
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-white/40"
                  href="https://discord.gg/X45xXcRsZb"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discord
                </a>
                <a
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-white/40"
                  href="https://t.me/+12IQLv7cw4s1ZWFh"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
                <a
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-white/40"
                  href="https://www.instagram.com/blockchain.umd"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-white/40"
                  href="https://x.com/blockchainatumd?s=11"
                  target="_blank"
                  rel="noreferrer"
                >
                  X
                </a>
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                "Education, hands-on technical exposure, and research experience.",
                "Conference access and industry networking opportunities.",
                "A community of builders and learners across campus.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-4 text-sm text-stone-400"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-stone-500 md:flex-row">
          <p>Blockchain at Maryland. Engineering-focused Web3 organization.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="hover:text-stone-300"
              href="https://www.instagram.com/blockchain.umd"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="hover:text-stone-300"
              href="https://x.com/blockchainatumd?s=11"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
            <a
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-300"
              href="https://www.linkedin.com/in/robert-hopkins-a5860224b/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/melvin.jpg"
                alt="Secret Melvin"
                width={24}
                height={24}
                className="h-4 w-4 rounded-sm object-cover opacity-80"
              />
              <span>Secret Melvin</span>
            </a>
            <span>College Park, Maryland</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
