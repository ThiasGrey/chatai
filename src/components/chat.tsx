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

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  });

  return (
    <Card className="w-[500px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.map((message) => {
          return (
            <div key={message.id} className="flex gap-2 text-gray-700 text-sm">
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>AI BM</AvatarFallback>
                  <AvatarImage src="https://github.com/ThiasGrey.png" />
                </Avatar>
              )}
              {message.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>AI BM</AvatarFallback>
                  <AvatarImage src="https://github.com/RocketSeat.png" />
                </Avatar>
              )}


              <p className="leading-relaxed">
                <span className="block font-bold text-slate-800">
                  {message.role === "user" ? "User" : "AI"}
                </span>
                {message.content}
              </p>
            </div>
          );
        })}
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
