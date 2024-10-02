interface SectionHeaderProps {
  title: string;
  description: string;
  className: string;
}

export default function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={`w-max mb-9 md:my-16 ${className}`}>
      <h5 className="font-swift text-3xl md:text-4xl mb-1">{title}</h5>
      <p className="w-max mx-auto text-sm md:text-lg font-light font-robotoItalic italic uppercase">
        {description}
      </p>
    </div>
  );
}
