import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <Chat />
      <span className="text-sm text-slate-400 mt-3">
        Developed by Bruno Mathias using the GPT-3 API and Vercel SDK.💖
      </span>
    </div>
  );
}
