import { Base } from "./Base";
import { BaseUrl } from "../utils/ApiUrl";
import { Request } from "../models/Request";
import axios from "axios";
import "./Table.css";
import { useState } from "react";
import { RequestTable } from "./RequestTable";

interface Record {
  [date: string]: { [tag: string]: number };
}

interface TagsReport {
  name?: string;
  request?: Request;
  total?: number;
  records?: Record;
}

const Table = ({ records }: TagsReport) => {
  return (
    <div className="table-root">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {records &&
            Object.entries(records).map(([date, tags], key) => {
              return (
                <tr key={key}>
                  <td>{date && new Date(date).toLocaleString()}</td>
                  <table>
                    <thead>
                      <tr>
                        <th>Tag Name</th>
                        <th>Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(tags).map(([tag, count], key) => {
                        return (
                          <tr key={key}>
                            <td>{tag}</td>
                            <td>{count}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export const Tags = () => {
  const [tagsReport, setTagsReport] = useState<TagsReport>();

  const handleClick = async () => {
    const { data } = await axios.get<TagsReport>(`${BaseUrl}/tags`);

    setTagsReport(data);
  };
  return (
    <Base>
      <h1>Tags Page</h1>
      <button onClick={handleClick}>Get Tags</button>
      <div>
        <h2>Name: {tagsReport?.name}</h2>
        <h2>Total: {tagsReport?.total}</h2>
        <h5>
          Filter Group Values:{" "}
          {tagsReport?.request?.filters?.groups.values.join(", ")}
        </h5>
      </div>
      <div className="tables">
        {tagsReport?.request && <RequestTable request={tagsReport?.request} />}
        {tagsReport?.records && <Table records={tagsReport?.records} />}
      </div>
    </Base>
  );
};
