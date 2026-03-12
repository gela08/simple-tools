"use client";
import { useState, useRef } from "react";

const COLORS = ["#FF6B35","#FF8C5A","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#F0A500","#6C5CE7","#00B894"];

function drawWheel(canvas: HTMLCanvasElement, items: string[], rotation: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx || items.length === 0) return;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const r = cx - 10;
  const arc = (2 * Math.PI) / items.length;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  items.forEach((item, i) => {
    const start = rotation + arc * i;
    const end = start + arc;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = COLORS[i % COLORS.length];
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(start + arc / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = `bold ${Math.max(10, Math.min(14, 120 / items.length))}px sans-serif`;
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowBlur = 2;
    const maxW = r - 20;
    const txt = item.length > 15 ? item.slice(0, 14) + "…" : item;
    ctx.fillText(txt, r - 10, 5);
    ctx.restore();
  });

  // Center circle
  ctx.beginPath();
  ctx.arc(cx, cy, 18, 0, 2 * Math.PI);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.strokeStyle = "#eee";
  ctx.lineWidth = 2;
  ctx.stroke();
}

export default function SpinTheWheel() {
  const [inputText, setInputText] = useState("Pizza\nSushi\nBurger\nTacos\nPasta");
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();

  const items = inputText.split("\n").map((s) => s.trim()).filter(Boolean);

  const spin = () => {
    if (spinning || items.length < 2) return;
    setWinner(null);
    setSpinning(true);
    const extraSpins = (5 + Math.random() * 5) * 2 * Math.PI;
    const targetRot = rotation + extraSpins;
    const duration = 3000 + Math.random() * 1000;
    const start = performance.now();
    const startRot = rotation;

    const animate = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const cur = startRot + (targetRot - startRot) * ease;
      setRotation(cur);
      if (canvasRef.current) drawWheel(canvasRef.current, items, cur);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        const arc = (2 * Math.PI) / items.length;
        // Pointer is at top (−π/2), find which slice is there
        const norm = (((-cur - Math.PI / 2) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        const idx = Math.floor(norm / arc) % items.length;
        setWinner(items[idx]);
        setSpinning(false);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
  };

  // Draw on mount and when items change
  const canvasReady = (el: HTMLCanvasElement | null) => {
    (canvasRef as React.MutableRefObject<HTMLCanvasElement | null>).current = el;
    if (el) drawWheel(el, items, rotation);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Options — one per line</label>
          <textarea value={inputText}
            onChange={(e) => { setInputText(e.target.value); setWinner(null); if (canvasRef.current) drawWheel(canvasRef.current, e.target.value.split("\n").map(s=>s.trim()).filter(Boolean), rotation); }}
<<<<<<< HEAD
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
=======
<<<<<<< HEAD
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
=======
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
            rows={8} />
          <p className="mt-1 text-xs text-ink-subtle">{items.length} option{items.length !== 1 ? "s" : ""}</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            {/* Pointer */}
<<<<<<< HEAD
            <div className="absolute left-1/2 -top-3 -translate-x-1/2 z-10 text-brand text-2xl">▼</div>
=======
<<<<<<< HEAD
            <div className="absolute left-1/2 -top-3 -translate-x-1/2 z-10 text-brand text-2xl">▼</div>
=======
            <div className="absolute left-1/2 -top-3 -translate-x-1/2 z-10 text-brand-orange text-2xl">▼</div>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
            <canvas ref={canvasReady} width={240} height={240} className="rounded-full shadow-md" />
          </div>

          <button onClick={spin} disabled={spinning || items.length < 2}
<<<<<<< HEAD
            className="flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95 disabled:opacity-60">
=======
<<<<<<< HEAD
            className="flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95 disabled:opacity-60">
=======
            className="flex items-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-orange-dark active:scale-95 disabled:opacity-60">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
            {spinning ? "Spinning…" : "🎡 Spin!"}
          </button>
        </div>
      </div>

      {winner && !spinning && (
<<<<<<< HEAD
        <div className="rounded-2xl border-2 border-brand/30 bg-brand/5 p-5 text-center">
=======
<<<<<<< HEAD
        <div className="rounded-2xl border-2 border-brand/30 bg-brand/5 p-5 text-center">
=======
        <div className="rounded-2xl border-2 border-brand-orange/30 bg-brand-orange/5 p-5 text-center">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          <p className="text-xs font-medium text-ink-subtle uppercase tracking-wider">🎉 Result</p>
          <p className="mt-1 text-2xl font-extrabold font-display text-ink">{winner}</p>
        </div>
      )}
    </div>
  );
}
