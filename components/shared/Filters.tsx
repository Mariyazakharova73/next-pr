import { cn } from "@/lib/utils";
import { FC } from "react";
import { Input } from "../ui";
import { CheckboxFilterGroup } from "./CheckboxFilterGroup";
import { FilterCheckbox } from "./FilterCheckbox";
import { RangeSlider } from "./RangeSlider";
import { Title } from "./Title";

interface FiltersProps {
  className?: string;
}

export const Filters: FC<FiltersProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title
        text="Фильтрация"
        size="sm"
        className="mb-5 font-bold"
      />
      <div className="flex flex-col gap-4">
        <FilterCheckbox
          text="Можно собирать"
          value="13"
        />
        <FilterCheckbox
          text="Новинки"
          value="12"
        />
      </div>

      {/* Фильтр цены */}
      <div className="mt-t border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="10000"
            min={100}
            max={10000}
          />
        </div>
        <RangeSlider
          min={0}
          max={5000}
          step={10}
          value={[0, 5000]}
        />
      </div>

      {/* Фильтр цены */}
      <CheckboxFilterGroup
        className="mt-5"
        title="Ингредиенты"
        limit={3}
        defaultItems={[
          { text: "Хлопок", value: "1" },
          { text: "Полиэстер", value: "2" },
          { text: "Шелк", value: "3" },
        ]}
        items={[
          { text: "Хлопок", value: "1" },
          { text: "Полиэстер", value: "2" },
          { text: "Шелк", value: "3" },
          { text: "Вискоза", value: "4" },
          { text: "Лен", value: "5" },
        ]}
      />
    </div>
  );
};
