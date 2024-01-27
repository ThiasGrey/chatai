"use client";

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
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-full md:w-[500px]">
      <CardHeader>
        <CardTitle>Bruno Mathias GPT Chat AI</CardTitle>
        <CardDescription>
          Ask me anything that comes to your mind.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]  md:max-h-[500px]  w-full space-y-4 px-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-2 text-stone-900 text-sm mt-4"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>AI User Char Qustion</AvatarFallback>
                    <AvatarImage src="https://github.com/OpenUserJS.png" />
                  </Avatar>
                )}
                {message.role === "assistant" && (
                  <Avatar className="ml-5">
                    <AvatarFallback>AI Assistent ChatBot COnfig</AvatarFallback>
                    <AvatarImage src="https://github.com/ThiasGrey.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed ">
                  <span className="block font-bold text-slate-800">
                    {message.role === "user" ? "User" : "Bruno Mathias IA"}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}

        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="gap-2 flex w-full" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
       
      </CardFooter>
    </Card>
    
  );
}
