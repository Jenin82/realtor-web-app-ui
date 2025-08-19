"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CITIES, PROPERTY_TYPES } from "@/lib/data";
import { Search } from "lucide-react";

export type SearchValues = {
  city?: string;
  q?: string;
  type?: string;
};

export function SearchBar({ onSearch }: { onSearch?: (v: SearchValues) => void }) {
  const [values, setValues] = React.useState<SearchValues>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch?.(values);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-3 rounded-full border bg-background/90 p-2 backdrop-blur sm:grid-cols-[160px_1fr_160px_auto]"
      aria-label="Search properties"
    >
      <NativeSelect
        aria-label="City"
        defaultValue={CITIES[0]}
        onChange={(e) => setValues((s) => ({ ...s, city: e.target.value }))}
        className="rounded-full"
      >
        {CITIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </NativeSelect>
      <Input
        aria-label="Search"
        placeholder="Search by location or project"
        onChange={(e) => setValues((s) => ({ ...s, q: e.target.value }))}
        className="rounded-full"
      />
      <NativeSelect
        aria-label="Type"
        defaultValue={PROPERTY_TYPES[0]}
        onChange={(e) => setValues((s) => ({ ...s, type: e.target.value }))}
        className="rounded-full"
      >
        {PROPERTY_TYPES.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </NativeSelect>
      <Button type="submit" className="rounded-full">
        <Search className="mr-2 size-4" /> Search
      </Button>
    </form>
  );
}
