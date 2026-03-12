"use client";
import { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, Sparkles, Loader2 } from "lucide-react";

const ANSWERS = [
  { val: "YES", icon: CheckCircle2, color: "border-green-200 bg-green-50 text-green-700", sub: "Go for it!" },
  { val: "YES", icon: CheckCircle2, color: "border-green-200 bg-green-50 text-green-700", sub: "Absolutely!" },
  { val: "YES", icon: CheckCircle2, color: "border-green-200 bg-green-50 text-green-700", sub: "Signs point to yes." },
  { val: "NO", icon: XCircle, color: "border-red-200 bg-red-50 text-red-700", sub: "Not this time." },
  { val: "NO", icon: XCircle, color: "border-red-200 bg-red-50 text-red-700", sub: "The answer is no." },
  { val: "NO", icon: XCircle, color: "border-red-200 bg-red-50 text-red-700", sub: "Don't do it." },
  { val: "MAYBE", icon: HelpCircle, color: "border-amber-200 bg-amber-50 text-amber-700", sub: "Ask again later." },
];

export default function YesNoPicker() {
  const [answer, setAnswer] = useState<typeof ANSWERS[0] | null>(null);
  const [question, setQuestion] = useState("");
  const [spinning, setSpinning] = useState(false);

  const pick = () => {
    setSpinning(true);
    // Short delay to simulate "thinking"
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * ANSWERS.length);
      setAnswer(ANSWERS[randomIndex]);
      setSpinning(false);
    }, 600);
  };

  return (
    <div className="max-w-md mx-auto space-y-6 p-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">
          Your question <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <input 
          type="text" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. Should I go for it?"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10" 
        />
      </div>

      <button 
        onClick={pick} 
        disabled={spinning}
        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-orange-600 active:scale-[0.98] disabled:opacity-70"
      >
        {spinning ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
            Ask the Universe
          </>
        )}
      </button>

      {answer && !spinning && (
        <div className={`flex flex-col items-center rounded-2xl border p-10 text-center transition-all animate-in fade-in zoom-in duration-300 ${answer.color}`}>
          <answer.icon className="h-16 w-16 stroke-[1.5px]" />
          <div className="mt-4 text-4xl font-black tracking-tight">{answer.val}</div>
          <div className="mt-1 text-base font-medium opacity-90">{answer.sub}</div>
          
          {question && (
            <div className="mt-6 border-t border-current/10 pt-4 text-sm italic opacity-60">
              "{question}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}