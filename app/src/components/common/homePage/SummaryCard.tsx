

interface SummaryCardProps {
  title: string;
  value: string;
  description: string;
  chart?: React.ReactNode;
  icon?: React.ReactNode;
  valueColor?: string;
}

const SummaryCard = ({
  title,
  value,
  description,
  chart,
  icon,
  valueColor = "text-primary",
}: SummaryCardProps) => {
  return (
    <div className="bg-background border-2 border-primary/20 rounded-xl shadow-lg p-6 w-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg text-foreground">{title}</span>
          {icon}
        </div>
        <div className={`text-3xl font-bold ${valueColor} mt-2`}>{value}</div>
        <div className="text-sm text-muted-foreground mt-1">{description}</div>
      </div>
      {chart && <div className="flex justify-end">{chart}</div>}
    </div>
  );
};


export default SummaryCard;
