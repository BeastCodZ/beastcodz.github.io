interface ProjectStatusCardProps {
  title: string;
  status: string;
  description: string;
}

export default function ProjectStatusCard({
  title,
  status,
  description,
}: ProjectStatusCardProps) {
  return (
    <div className="flex-1">
      <div className="flex flex-col">
        <h4
          className="
            font-semibold
            text-(--text-primary)
          "
        >
          {title}
        </h4>

        <span
          className="
            text-[10px]
            text-(--accent-soft)
          "
        >
          {status}
        </span>
      </div>

      <p
        className="
          mt-1
          text-xs
          leading-5
          text-(--text-secondary)
        "
      >
        {description}
      </p>
    </div>
  );
}
