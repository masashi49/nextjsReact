import React from "react";
import { format, parseISO } from "date-fns";
import { ja } from "date-fns/locale";

export const ConvertDate = ({ dateISO }: { dateISO: string }) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyy年MM月dd日", {
        locale: ja,
      })}
    </time>
  );
};
