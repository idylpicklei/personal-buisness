type SectionLabelProps = {
  children: React.ReactNode;
  accent?: "indigo" | "emerald";
};

export function SectionLabel({
  children,
  accent = "indigo",
}: SectionLabelProps) {
  const accentClass =
    accent === "emerald" ? "text-emerald-300" : "text-indigo-300";

  return (
    <div className="flex items-center gap-4">
      <span
        className={`h-px w-10 bg-gradient-to-r from-transparent ${accent === "emerald" ? "via-emerald-400/60" : "via-indigo-400/60"} to-transparent`}
      />
      <p
        className={`text-xs font-semibold uppercase tracking-[0.35em] ${accentClass}`}
      >
        {children}
      </p>
    </div>
  );
}
