export default function SectionHeading({ title, highlight }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
        <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        <div className="h-px w-24 bg-gradient-to-r from-primary via-accent to-accent-pink" />
        <div className="h-1.5 w-1.5 rounded-full bg-accent-pink animate-pulse" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-pink" />
      </div>
    </div>
  );
}
