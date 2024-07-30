import { TestimonialBubble } from "./bubble";
import { Testimonial } from "./interfaces";

interface TestimonialItemProps extends Testimonial {
  index: number;
  isActive: boolean;
  onItemClick: (index: number) => void;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ name, description, url, index, isActive, onItemClick }) => {
  return (
    <div className="flex flex-col items-center text-center" onClick={() => onItemClick(index)}>
      <div className="w-20 h-20 border-2 border-text/25 rounded-full overflow-hidden">
        <img src={url} alt={name} className="w-full h-full object-cover" />
      </div>
      <TestimonialBubble description={description} isActive={isActive} />
    </div>
  );
};

export default TestimonialItem;
