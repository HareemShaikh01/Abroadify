interface SectionHeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-2 mb-10 ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
      <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">{title}</h2>
      {description && (
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">{description}</p>
      )}
    </div>
  );
}
