import { differenceInMonths, differenceInYears } from "date-fns";

import { pluralize } from "./pluralize";

const firstEmploymentDate = "2022-06-01";

const getExperience = (startDate: string) => {
  const start = new Date(startDate);
  const now = new Date();

  const years = differenceInYears(now, start);
  const months = differenceInMonths(now, start) % 12;

  return { years, months };
};

const yearPluralize = { one: "год", few: "года", many: "лет" } as const;
const monthPluralize = {
  one: "месяц",
  few: "месяца",
  many: "месяцев",
} as const;

const formatExperience = ({
  years,
  months,
}: {
  years: number;
  months: number;
}) => {
  if (months === 0) return `${years} ${pluralize(years, yearPluralize)}`;
  return `${years} ${pluralize(years, yearPluralize)} и ${months} ${pluralize(months, monthPluralize)}`;
};

export const workExperience = formatExperience(
  getExperience(firstEmploymentDate),
);
