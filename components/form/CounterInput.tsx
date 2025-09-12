"use client";

import { useState } from "react";
import { Card, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

function CounterInput({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue?: number;
}) {
  const [count, setCount] = useState(defaultValue || 0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <Card className="mb-4">
      <Input type="hidden" name={name} value={count} />
      <CardHeader className="flex flex-col gapy-5">
        <div className="flex flex-col">
          <h2 className="font-medium capitalize">{label}</h2>
          <p className="text-muted-foreground text-sm">
            Select the {label} for your club.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={decrement}
          >
            <Minus className="w-5 h-5 text-primary" />
          </Button>

          <span className="text-xl font-bold w-5 text-center">{count}</span>
          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={increment}
          >
            <Plus className="w-5 h-5 text-primary" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}

export default CounterInput;
