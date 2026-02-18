"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AircraftData({
  aircrafts,
}: {
  aircrafts:
    | {
        aircraft_code: string;
        model: { [key: string]: string };
        range: number;
      }[]
    | null;
}) {
  const [modelLanguage, setModelLanguage] = useState("en");
  return (
    <>
      <Select defaultValue={modelLanguage} onValueChange={setModelLanguage}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue placeholder="Model Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Model Language</SelectLabel>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="ru">Russian</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Table className="mb-6 max-w-md">
        <TableHeader>
          <TableRow>
            <TableHead>Model</TableHead>
            <TableHead>Code</TableHead>
            <TableHead>Range</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {aircrafts?.map((aircraft) => (
            <TableRow key={aircraft.aircraft_code}>
              <TableCell className="font-medium">
                {aircraft.model[modelLanguage]}
              </TableCell>
              <TableCell className="font-mono">
                {aircraft.aircraft_code}
              </TableCell>
              <TableCell className="font-mono">{aircraft.range}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
