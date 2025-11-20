import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/global/card";

export function DataViz() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Data Visualizations</h2>
        <p className="text-muted-foreground">Insights into reading habits and trends.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Genre Wheel</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center bg-muted/20">
             <div className="text-muted-foreground text-sm">Genre distribution chart placeholder</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reading Heatmap</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center bg-muted/20">
            <div className="text-muted-foreground text-sm">Calendar heatmap placeholder</div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Completion Timeline</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px] flex items-center justify-center bg-muted/20">
            <div className="text-muted-foreground text-sm">Timeline chart placeholder</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
