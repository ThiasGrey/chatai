import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <Card className="w-[500px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 text-gray-700 text-sm">
            <Avatar>
              <AvatarFallback>AI BM</AvatarFallback>
              <AvatarImage src="https://github.com/ThiasGrey.png" />
            </Avatar>

            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">Human</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              sapiente nemo nisi nulla, sed error porro incidunt officia.
              Voluptatem, nihil numquam. Earum at totam minima repellat suscipit
              officia tempora beatae.
            </p>
          </div>

          <div className="flex gap-2 text-gray-700 text-sm">
            <Avatar>
              <AvatarFallback>Boot</AvatarFallback>
              <AvatarImage src="https://github.com/sucess.png" />
            </Avatar>

            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">Human</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              sapiente nemo nisi nulla, sed error porro incidunt officia.
              Voluptatem, nihil numquam. Earum at totam minima repellat suscipit
              officia tempora beatae.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
