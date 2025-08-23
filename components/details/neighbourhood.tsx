import { Navigation, ShoppingBag, Train, TreePine, Utensils } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const Neighbourhood = () => {
  return (
    <Tabs defaultValue="metro" className="w-full">
      <TabsList className="w-full overflow-x-auto">
        <TabsTrigger value="nearest" className="px-3">
          <Navigation size={14} /> Nearest
        </TabsTrigger>
        <TabsTrigger value="metro" className="px-3">
          <Train size={14} /> Metro
        </TabsTrigger>
        <TabsTrigger value="shopping" className="px-3">
          <ShoppingBag size={14} /> Shopping
        </TabsTrigger>
        <TabsTrigger value="parks" className="px-3">
          <TreePine size={14} /> Parks
        </TabsTrigger>
        <TabsTrigger value="food" className="px-3">
          <Utensils size={14} /> Food
        </TabsTrigger>
      </TabsList>
      <div className="mt-4 rounded-xl bg-background">
        <TabsContent value="nearest" className="p-2 sm:p-4">
          <ul className="divide-y">
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                  <Navigation size={16} />
                </div>
                <div className="text-sm">Nearest Landmark</div>
              </div>
              <div className="text-xs text-muted-foreground">
                10 mins (2.1 kms)
              </div>
            </li>
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                  <Navigation size={16} />
                </div>
                <div className="text-sm">City Center</div>
              </div>
              <div className="text-xs text-muted-foreground">
                18 mins (6.4 kms)
              </div>
            </li>
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                  <Navigation size={16} />
                </div>
                <div className="text-sm">Airport Road</div>
              </div>
              <div className="text-xs text-muted-foreground">
                25 mins (12.3 kms)
              </div>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="metro" className="p-2 sm:p-4">
          <ul className="divide-y">
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                  <Train size={16} />
                </div>
                <div className="text-sm">Yelachenahalli Metro Station</div>
              </div>
              <div className="text-xs text-muted-foreground">
                14 mins (13.2 kms)
              </div>
            </li>
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                  <Train size={16} />
                </div>
                <div className="text-sm">Jaya Prakash Nagar Metro Station</div>
              </div>
              <div className="text-xs text-muted-foreground">
                23 mins (16.4 kms)
              </div>
            </li>
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                  <Train size={16} />
                </div>
                <div className="text-sm">Bommasandra Metro Station</div>
              </div>
              <div className="text-xs text-muted-foreground">
                08 mins (3.2 kms)
              </div>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="shopping" className="p-2 sm:p-4">
          <ul className="divide-y">
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                  <ShoppingBag size={16} />
                </div>
                <div className="text-sm">Orion Mall</div>
              </div>
              <div className="text-xs text-muted-foreground">
                20 mins (8.1 kms)
              </div>
            </li>
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                  <ShoppingBag size={16} />
                </div>
                <div className="text-sm">Phoenix Marketcity</div>
              </div>
              <div className="text-xs text-muted-foreground">
                32 mins (14.5 kms)
              </div>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="parks" className="p-2 sm:p-4">
          <ul className="divide-y">
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                  <TreePine size={16} />
                </div>
                <div className="text-sm">Central Park</div>
              </div>
              <div className="text-xs text-muted-foreground">
                12 mins (4.6 kms)
              </div>
            </li>
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                  <TreePine size={16} />
                </div>
                <div className="text-sm">Lakeside Garden</div>
              </div>
              <div className="text-xs text-muted-foreground">
                18 mins (7.3 kms)
              </div>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="food" className="p-2 sm:p-4">
          <ul className="divide-y">
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                  <Utensils size={16} />
                </div>
                <div className="text-sm">The Food Lounge</div>
              </div>
              <div className="text-xs text-muted-foreground">
                09 mins (2.8 kms)
              </div>
            </li>
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                  <Utensils size={16} />
                </div>
                <div className="text-sm">City Bites</div>
              </div>
              <div className="text-xs text-muted-foreground">
                15 mins (5.1 kms)
              </div>
            </li>
          </ul>
        </TabsContent>
      </div>
    </Tabs>
  );
}

export default Neighbourhood