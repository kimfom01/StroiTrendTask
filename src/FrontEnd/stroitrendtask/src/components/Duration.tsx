import { useState } from "react";
import { Base } from "./Base";
import { BaseUrl } from "../utils/ApiUrl";
import axios from "axios";
import "./Table.css";
import "./Duration.css";
import { Request } from "../models/Request";

interface DurationData {
  agents_chatting_duration: number;
  count: number;
  duration: number;
}

interface Record {
  [date: string]: DurationData;
}

interface Duration {
  name?: string;
  request?: Request;
  total?: number;
  records?: Record;
}

const Table = ({ records }: Duration) => {
  return (
    <div className="table-root">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Agents Chatting Duration</th>
            <th>Count</th>
            <th>Duration Data</th>
          </tr>
        </thead>
        <tbody>
          {records &&
            Object.entries(records).map(
              ([date, { agents_chatting_duration, count, duration }], key) => {
                return (
                  <tr key={key}>
                    <td>{date && new Date(date).toLocaleString()}</td>
                    <td>{agents_chatting_duration}</td>
                    <td>{count}</td>
                    <td>{duration}</td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </div>
  );
};

const RequestTable = ({ request }: Duration) => {
  return (
    <div className="table-root">
      <table>
        <thead>
          <tr>
            <th>Distribution</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {request &&
            Object.entries(request).map(([distribution, { from, to }], key) => {
              return (
                <tr key={key}>
                  <td>{distribution}</td>
                  <td>{from && new Date(from).toLocaleString()}</td>
                  <td>{to && new Date(to).toLocaleString()}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export const Duration = () => {
  const [duration, setDuration] = useState<Duration>();

  const handleClick = async () => {
    const { data } = await axios.get<Duration>(`${BaseUrl}/duration`);

    setDuration(data);
  };

  return (
    <Base>
      <h1>Duration Page</h1>
      <button onClick={handleClick}>Get Duration</button>

      <div>
        <h2>Name: {duration?.name}</h2>
        <h2>Total: {duration?.total}</h2>
        <h5>
          Filter Group Values:{" "}
          {duration?.request?.filters?.groups.values.join(", ")}
        </h5>
      </div>
      <div className="tables">
        {duration?.request && <RequestTable request={duration?.request} />}
        {duration?.records && <Table records={duration?.records} />}
      </div>
    </Base>
  );
};
