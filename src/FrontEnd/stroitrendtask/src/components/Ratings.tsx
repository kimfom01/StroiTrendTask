import { Base } from "./Base";
import { BaseUrl } from "../utils/ApiUrl";
import { Request } from "../models/Request";
import axios from "axios";
import "./Table.css";
import { useState } from "react";
import { RequestTable } from "./RequestTable";

interface RatingData {
  bad: number;
  chats: number;
  good: number;
}

interface Record {
  [date: string]: RatingData;
}

export interface RatingsReport {
  name?: string;
  request?: Request;
  total?: number;
  records?: Record;
}

const Table = ({ records }: RatingsReport) => {
  return (
    <div className="table-root">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Bad</th>
            <th>Chats</th>
            <th>Good</th>
          </tr>
        </thead>
        <tbody>
          {records &&
            Object.entries(records).map(([date, { bad, chats, good }], key) => {
              return (
                <tr key={key}>
                  <td>{date && new Date(date).toLocaleString()}</td>
                  <td>{bad}</td>
                  <td>{chats}</td>
                  <td>{good}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export const Ratings = () => {
  const [ratingsReport, setRatingsReport] = useState<RatingsReport>();

  const handleClick = async () => {
    const { data } = await axios.get<RatingsReport>(`${BaseUrl}/ratings`);

    setRatingsReport(data);
  };
  return (
    <Base>
      <h1>Ratings Page</h1>
      <button onClick={handleClick}>Get Ratings</button>
      <div>
        <h2>Name: {ratingsReport?.name}</h2>
        <h2>Total: {ratingsReport?.total}</h2>
        <h5>
          Filter Group Values:{" "}
          {ratingsReport?.request?.filters?.groups.values.join(", ")}
        </h5>
      </div>
      <div className="tables">
        {ratingsReport?.request && (
          <RequestTable request={ratingsReport?.request} />
        )}
        {ratingsReport?.records && <Table records={ratingsReport?.records} />}
      </div>
    </Base>
  );
};
