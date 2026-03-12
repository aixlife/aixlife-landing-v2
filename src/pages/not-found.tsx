import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="glass-panel max-w-md w-full p-8 rounded-3xl relative z-10 text-center border-white/10">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center border border-destructive/20 shadow-[0_0_30px_rgba(255,0,0,0.2)]">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-3">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          페이지를 찾을 수 없습니다
        </p>
        
        <Link href="/" className="inline-flex px-8 py-3 rounded-xl font-bold text-primary-foreground bg-primary hover:bg-primary/90 hover:-translate-y-1 transition-all duration-200">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
