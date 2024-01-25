import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden p-4 ">
      <div className="absolute inset-0 bg-custom filter brightness-50 flex items-center justify-center w-full h-full" style={{
          
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
         
        }}></div>
      <div className="relative flex flex-col items-center justify-center h-screen ">
        <Chat />
        <span className="text-sm text-slate-100 mt-3">
          Developed by Bruno Mathias using the GPT-3 API and Vercel SDK.💖
        </span>
      </div>
    </div>
  );
}
