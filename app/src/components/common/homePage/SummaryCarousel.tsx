import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SummaryCard from "./SummaryCard";
import { Wallet, TrendingDown, TrendingUp } from "lucide-react";

const SummaryCarousel = () => {
  const cards = [
    {
      title: "Balance overview",
      value: "$12,000",
      description: "Current balance",
      chart: null,
      icon: <Wallet className="w-6 h-6 text-orange-500" />,
      valueColor: "text-orange-500",
    },
    {
      title: "Spends overview",
      value: "- $2,100",
      description: "Spent this month",
      chart: null,
      icon: <TrendingDown className="w-6 h-6 text-red-500" />,
      valueColor: "text-red-500",
    },
    {
      title: "Income overview",
      value: "+ $3,400",
      description: "Earned this month",
      chart: null,
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      valueColor: "text-green-500",
    },
  ];

  return (
    <div className="absolute left-0 right-0 bottom-[-60px] flex flex-col items-center">
      <Carousel className="w-full">
        <CarouselContent className="mx-3">
          {cards.map((card, idx) => (
            <CarouselItem key={idx} className="pl-4 basis-4/5">
              <SummaryCard
                title={card.title}
                value={card.value}
                description={card.description}
                chart={card.chart}
                icon={card.icon}
                valueColor={card.valueColor}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </div>
  );
};

export default SummaryCarousel;
