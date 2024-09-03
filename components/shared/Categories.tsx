import { cn } from "@/lib/utils";
import { FC } from "react";

interface CategoriesProps {
  className?: string;
}

const categories = ["Все", "Короткие", "Сарафаны", "Платье-пиджак", "Платье-рубашка", "Вечерние"];
const activeIndex = 0;

export const Categories: FC<CategoriesProps> = ({ className }) => {
  return (
    <ul className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl flex-wrap justify-center ", className)}>
      {categories.map((category, index) => {
        return (
          <li
            key={index}
            className={cn(
              "flex items-center font-bold h-11 rounded-2xl px-5 ",
              activeIndex === index && "bg-white shadow-md shadow-gray-200 text-primary",
            )}
          >
            <a>
              <button>{category}</button>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
