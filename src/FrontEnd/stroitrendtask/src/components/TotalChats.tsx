import { Base } from "./Base";
import { BaseUrl } from "../utils/ApiUrl";
import { Request } from "../models/Request";
import axios from "axios";
import "./Table.css";
import { useState } from "react";
import { RequestTable } from "./RequestTable";

interface Record {
  [date: string]: { total: number };
}

interface TotalChatsReport {
  name?: string;
  request?: Request;
  total?: number;
  records?: Record;
}

const Table = ({ records }: TotalChatsReport) => {
  return (
    <div className="table-root">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {records &&
            Object.entries(records).map(([date, { total }], key) => {
              return (
                <tr key={key}>
                  <td>{date && new Date(date).toLocaleString()}</td>
                  <td>{total}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};


export const TotalChats = () => {
  const [chatsReport, setChatsReport] = useState<TotalChatsReport>();

  const handleClick = async () => {
    const { data } = await axios.get<TotalChatsReport>(`${BaseUrl}/totalchats`);

    setChatsReport(data);
  };
  return (
    <Base>
      <h1>Total Chats Page</h1>
      <button onClick={handleClick}>Get Total Chats</button>
      <div>
        <h2>Name: {chatsReport?.name}</h2>
        <h2>Total: {chatsReport?.total}</h2>
        <h5>
          Filter Group Values:{" "}
          {chatsReport?.request?.filters?.groups.values.join(", ")}
        </h5>
      </div>
      <div className="tables">
        {chatsReport?.request && (
          <RequestTable request={chatsReport?.request} />
        )}
        {chatsReport?.records && <Table records={chatsReport?.records} />}
      </div>
    </Base>
  );
};
