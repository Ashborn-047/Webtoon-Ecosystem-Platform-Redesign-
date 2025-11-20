import { Button } from "@/components/ui/global/button";

export function Experimental() {
  return (
    <div className="space-y-8">
       <div>
        <h2 className="text-3xl font-bold tracking-tight">Experimental Playground</h2>
        <p className="text-muted-foreground">Prototyping area for new interactions.</p>
      </div>

      <div className="p-8 border-2 border-dashed rounded-xl flex flex-col items-center justify-center min-h-[400px] bg-muted/10">
         <div className="space-y-4 text-center">
            <p className="text-lg font-medium">Interaction Tests</p>
            <div className="flex gap-4">
               <Button>Test Animation A</Button>
               <Button variant="secondary">Test Animation B</Button>
            </div>
         </div>
      </div>
    </div>
  );
}
