"use client";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/types";
import { formatINR } from "@/lib/data";

export function PropertyCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <Card className="overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 100vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute left-3 top-3 flex gap-2">
            {project.badges?.map((b) => (
              <Badge key={b} className="bg-background/80 backdrop-blur">
                {b}
              </Badge>
            ))}
          </div>
        </div>
        <CardContent>
          <h3 className="line-clamp-1 text-sm font-medium">{project.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {project.bedrooms > 0 ? `${project.bedrooms} BHK` : project.type} • {project.location}
          </p>
          <p className="mt-2 text-sm font-semibold text-primary">{formatINR(project.price)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
