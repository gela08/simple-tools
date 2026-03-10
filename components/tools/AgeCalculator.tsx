"use client";
import { useState } from "react";

export default function AgeCalculator() {
  const [birthdate, setBirthdate] = useState("");

  const today = new Date();
  const birth = birthdate ? new Date(birthdate) : null;

  let years = 0, months = 0, days = 0, nextBirthday = 0;
  if (birth && !isNaN(birth.getTime())) {
    years = today.getFullYear() - birth.getFullYear();
    months = today.getMonth() - birth.getMonth();
    days = today.getDate() - birth.getDate();
    if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }

    const thisYearBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (thisYearBirthday <= today) thisYearBirthday.setFullYear(today.getFullYear() + 1);
    nextBirthday = Math.round((thisYearBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  }

  const totalDays = birth ? Math.round((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24)) : 0;

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Your date of birth</label>
        <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)}
          max={today.toISOString().split("T")[0]}
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
      </div>

      {birth && !isNaN(birth.getTime()) && (
        <div className="space-y-3">
          <div className="rounded-2xl border-2 border-brand/20 bg-brand/5 p-6 text-center">
            <p className="text-sm text-ink-muted mb-1">You are</p>
            <p className="text-5xl font-extrabold font-display text-ink">{years}</p>
            <p className="text-lg text-ink-muted">years old</p>
            <p className="mt-2 text-sm text-ink-muted">{years} years, {months} months, {days} days</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border bg-surface-muted p-4 text-center">
              <p className="text-2xl font-bold font-display text-ink">{totalDays.toLocaleString()}</p>
              <p className="text-xs text-ink-subtle mt-1">days lived</p>
            </div>
            <div className="rounded-xl border border-border bg-surface-muted p-4 text-center">
              <p className="text-2xl font-bold font-display text-ink">{nextBirthday}</p>
              <p className="text-xs text-ink-subtle mt-1">days to next birthday</p>
            </div>
          </div>
          {nextBirthday === 0 && <p className="text-center text-green-600 font-semibold">🎂 Happy Birthday!</p>}
        </div>
      )}
    </div>
  );
}
