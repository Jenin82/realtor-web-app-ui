import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">Total Views</CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">34.3M</div>
            <div className="text-xs text-emerald-600 mt-1">+2.3%</div>
            <div className="mt-4 h-16 rounded-md bg-muted" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">Total Likes</CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">343K</div>
            <div className="text-xs text-emerald-600 mt-1">+1.2%</div>
            <div className="mt-4 h-16 rounded-md bg-muted" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">Total Leads</CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3.5K</div>
            <div className="text-xs text-emerald-600 mt-1">+2.3%</div>
            <div className="mt-4 h-16 rounded-md bg-muted" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">Engagement</CardHeader>
          <CardContent>
            <Tabs defaultValue="instagram" className="w-full">
              <TabsList>
                <TabsTrigger value="instagram">Instagram</TabsTrigger>
                <TabsTrigger value="youtube">Youtube</TabsTrigger>
              </TabsList>
              <TabsContent value="instagram" className="mt-4">
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-semibold">58.8M</div>
                  <span className="text-xs text-emerald-600">+0.48%</span>
                </div>
                <div className="mt-4 h-48 rounded-md bg-muted" />
              </TabsContent>
              <TabsContent value="youtube" className="mt-4">
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-semibold">12.3M</div>
                  <span className="text-xs text-emerald-600">+0.12%</span>
                </div>
                <div className="mt-4 h-48 rounded-md bg-muted" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">Top Performers</CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500" /> Assetz
                </span>
                <span className="text-muted-foreground">3,500</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-gray-300" /> Assetz
                </span>
                <span className="text-muted-foreground">846</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-300" /> Assetz
                </span>
                <span className="text-muted-foreground">200</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-gray-200" /> Assetz
                </span>
                <span className="text-muted-foreground">24</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">Recent Media</CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-video rounded-lg bg-muted" />
              <div className="aspect-video rounded-lg bg-muted" />
              <div className="aspect-video rounded-lg bg-muted" />
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">Leads Trend</CardHeader>
          <CardContent>
            <div className="h-40 rounded-md bg-muted" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
