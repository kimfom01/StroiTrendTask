import { RatingsReport } from "./Ratings";

export const RequestTable = ({ request }: RatingsReport) => {
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
