import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ConvertDate } from "./convertDate";

type PostHeader = {
  title: string;
  subTitle: string;
  publish: string | "";
};

export const PostHeader = ({ title, subTitle, publish = "" }: PostHeader) => {
  return (
    <div>
      <p>{subTitle}</p>
      <h1>{title}</h1>
      {publish && (
        <div>
          <FontAwesomeIcon
            icon={faClock}
            size="lg"
            className="text-emerald-500"
          />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  );
};
