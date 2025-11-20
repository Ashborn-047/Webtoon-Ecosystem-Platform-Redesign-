import { Button } from "../../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";

export function DesignSystem() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Design System</h2>
        <p className="text-muted-foreground mt-2">Core components and styles for the Webtoon redesign.</p>
      </div>

      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
        </TabsList>
        
        <TabsContent value="colors" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-primary shadow-sm"></div>
              <p className="font-medium">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-secondary shadow-sm"></div>
              <p className="font-medium">Secondary</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-accent shadow-sm"></div>
              <p className="font-medium">Accent</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-muted shadow-sm"></div>
              <p className="font-medium">Muted</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="typography" className="space-y-8">
          <div className="space-y-4 border p-6 rounded-lg bg-card">
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <h2 className="text-3xl font-bold">Heading 2</h2>
            <h3 className="text-2xl font-bold">Heading 3</h3>
            <h4 className="text-xl font-bold">Heading 4</h4>
            <p className="leading-7">
              The quick brown fox jumps over the lazy dog. Regular paragraph text for reading.
            </p>
            <p className="text-sm text-muted-foreground">
              Small text for captions and secondary information.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="components" className="space-y-8">
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
