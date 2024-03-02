import { Base } from "./Base";
import { BaseUrl } from "../utils/ApiUrl";
import { Request } from "../models/Request";
import axios from "axios";
import "./Table.css";
import { useState } from "react";
import { RequestTable } from "./RequestTable";

interface ResponseTimeData {
  count: number;
  response_time: number;
}

interface Record {
  [date: string]: ResponseTimeData;
}

interface ResponseTimeReport {
  name?: string;
  request?: Request;
  total?: number;
  records?: Record;
}

const Table = ({ records }: ResponseTimeReport) => {
  return (
    <div className="table-root">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Count</th>
            <th>Response Time</th>
          </tr>
        </thead>
        <tbody>
          {records &&
            Object.entries(records).map(
              ([date, { count, response_time }], key) => {
                return (
                  <tr key={key}>
                    <td>{date && new Date(date).toLocaleString()}</td>
                    <td>{count}</td>
                    <td>{response_time}</td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </div>
  );
};

export const ResponseTime = () => {
  const [responseTimeReport, setResponseTimeReport] =
    useState<ResponseTimeReport>();

  const handleClick = async () => {
    const { data } = await axios.get<ResponseTimeReport>(
      `${BaseUrl}/responsetime`
    );

    setResponseTimeReport(data);
  };
  return (
    <Base>
      <h1>Response Time Page</h1>
      <button onClick={handleClick}>Get Response Time</button>
      <div>
        <h2>Name: {responseTimeReport?.name}</h2>
        <h2>Total: {responseTimeReport?.total}</h2>
        <h5>
          Filter Group Values:{" "}
          {responseTimeReport?.request?.filters?.groups.values.join(", ")}
        </h5>
      </div>
      <div className="tables">
        {responseTimeReport?.request && (
          <RequestTable request={responseTimeReport?.request} />
        )}
        {responseTimeReport?.records && (
          <Table records={responseTimeReport?.records} />
        )}
      </div>
    </Base>
  );
};
