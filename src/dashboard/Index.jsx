import { Bar } from "react-chartjs-2";
import SidebarComponent from "../components/SidebarComponent";
import "../style/Dashboard.css";

export default function Index() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Juli",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "Income",
        data: [230, 290, 180, 290, 110, 300, 210, 180, 295, 195, 190, 190],
        backgroundColor: "#347B2A",
        borderColor: "#347B2A",
      },
      {
        label: "Expenditure",
        data: [200, 190, 150, 280, 100, 290, 200, 150, 275, 175, 150, 150],
        backgroundColor: "#A8454A",
        borderColor: "#A8454A",
      },
    ],
  };
  return (
    <>
      <div className="flex-container">
        <SidebarComponent />
        <div className="main-content">
          <h3 className="raleway-700">Dashboard</h3>

          <div className="row summary">
            <div className="col-md-4">
              <div className="card ">
                <div className="card-body">
                  <p className="raleway-700 sum-title mb-2">Total Balance</p>
                  <h3 style={{ color: "#1D1D29" }}>$ 1500</h3>
                  <p className="mb-0 sum-desc">Current balance</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">
                <div className="card-body">
                  <p className="raleway-700 sum-title mb-2">Income</p>
                  <h3 style={{ color: "#347B2A" }}>$ 2275</h3>
                  <p className="mb-0 sum-desc">Income is taken this month</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">
                <div className="card-body">
                  <p className="raleway-700 sum-title mb-2">Expenditure</p>
                  <h3 style={{ color: "#A8454A" }}>$ 1225</h3>
                  <p className="mb-0 sum-desc">
                    Expenditure is taken this month
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row summary">
            <div className="col-md-8">
              <div className="card ">
                <div className="card-body">
                  <p className="raleway-700 sum-title">Monthly report</p>
                  <Bar data={data} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">
                <div className="card-body">
                  <p className="raleway-700 sum-title">Need to pay</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row summary">
            <div className="col-md-8">
              <div className="card ">
                <div className="card-body">
                  <p className="raleway-700 sum-title">Recent activities</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">
                <div className="card-body">
                  <p className="raleway-700 sum-title">Currency conversion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
