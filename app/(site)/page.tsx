import Image from "next/image";
import { SearchBar } from "@/components/buyer/search-bar";
import { PropertyCard } from "@/components/buyer/property-card";
import { POPULAR_BY_CITY } from "@/lib/data";

export default function HomePage() {
  const kochi = POPULAR_BY_CITY.Kochi;
  const pune = POPULAR_BY_CITY.Pune;

  return (
    <div>
      {/* Hero with background */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop"
            alt="City skyline"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/20" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
          <div className="flex items-center justify-between text-sm text-white/80">
            <div className="hidden sm:flex items-center gap-4">
              <span>Explore</span>
              <span>Residences</span>
              <span>Workspaces</span>
            </div>
            <div className="ml-auto">Open 24/7 • Support</div>
          </div>

          <div className="mt-6 sm:mt-10">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Popular sections */}
      <section className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8">
        <h2 className="mb-4 text-xl font-semibold">Popular Properties in Kochi</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {kochi.map((p) => (
            <PropertyCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8">
        <h2 className="mb-4 text-xl font-semibold">Popular Properties in Pune</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pune.map((p) => (
            <PropertyCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
