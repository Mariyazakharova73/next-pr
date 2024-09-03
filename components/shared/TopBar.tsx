import { cn } from "@/lib/utils";
import { Categories } from "./Categories";
import { Container } from "./Container";
import { SortPopup } from "./SortPopup";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)}>
      <Container className="flex items-center flex-wrap gap-5 md:justify-between justify-center">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
