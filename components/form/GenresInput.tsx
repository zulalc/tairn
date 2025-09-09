"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Genre, genres } from "@/utils/genres";

function GenresInput({ defaultValue }: { defaultValue?: Genre[] }) {
  const genresWithIcons = defaultValue?.map(({ name, selected }) => ({
    name,
    selected,
    icon: genres.find((genre) => genre.name === name)!.icon,
  }));

  const [selectedGenres, SetSelectedgenres] = useState<Genre[]>(
    genresWithIcons || genres
  );

  const handleChange = (genre: Genre) => {
    SetSelectedgenres((prev) => {
      return prev.map((a) => {
        if (a.name === genre.name) {
          return { ...a, selected: !a.selected };
        }
        return a;
      });
    });
  };

  return (
    <section>
      <Input
        type="hidden"
        name="genres"
        value={JSON.stringify(selectedGenres)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {selectedGenres.map((genre) => (
          <div key={genre.name} className="flex items-center space-x-2">
            <Checkbox
              id={genre.name}
              checked={genre.selected}
              onCheckedChange={() => handleChange(genre)}
              className="cursor-pointer"
            />

            <Label
              htmlFor={genre.name}
              className="flex items-center text-md font-medium leading-none capitalize gap-x-2 "
            >
              {genre.name}
              <genre.icon className="w-4 h-4" />
            </Label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GenresInput;
