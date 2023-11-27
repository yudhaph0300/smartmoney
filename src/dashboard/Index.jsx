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
        backgroundColor: "#1CB78D",
        borderColor: "#1CB78D",
      },
      {
        label: "Expenditure",
        data: [200, 190, 150, 280, 100, 290, 200, 150, 275, 175, 150, 150],
        backgroundColor: "#EECA32",
        borderColor: "#EECA32",
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
              <div className="card card-info-1">
                <div className="card-body m-2">
                  <p className="raleway-700 sum-title mb-2">Total Balance</p>
                  <h3 style={{ color: "#1D1D29" }}>$ 1500</h3>
                  <p className="mb-0 sum-desc">Current balance</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-info-1">
                <div className="card-body m-2">
                  <p className="raleway-700 sum-title mb-2">Income</p>
                  <h3 style={{ color: "#1CB78D" }}>$ 2275</h3>
                  <p className="mb-0 sum-desc">Income is taken this month</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-info-1">
                <div className="card-body m-2">
                  <p className="raleway-700 sum-title mb-2">Expenditure</p>
                  <h3 style={{ color: "#EECA32" }}>$ 1225</h3>
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
                <div className="card-body m-2">
                  <p className="raleway-700 sum-title">Monthly report</p>
                  <Bar data={data} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">
                <div className="card-body m-2">
                  <p className="raleway-700 sum-title">Need to pay</p>

                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Bills</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Electricity Bills</td>
                        <td>11 Sept 2024</td>
                      </tr>
                      <tr>
                        <td>Electricity Bills</td>
                        <td>11 Sept 2024</td>
                      </tr>
                      <tr>
                        <td>Electricity Bills</td>
                        <td>11 Sept 2024</td>
                      </tr>
                      <tr>
                        <td>Electricity Bills</td>
                        <td>11 Sept 2024</td>
                      </tr>
                      <tr>
                        <td>Electricity Bills</td>
                        <td>11 Sept 2024</td>
                      </tr>
                    </tbody>
                  </table>

                  <button className="btn button-primary w-100 mt-2">
                    View All
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row summary">
            <div className="col-md-8">
              <div className="card ">
                <div className="card-body m-2">
                  <p className="raleway-700 sum-title">Recent activities</p>

                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Total</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>Transfer</td>
                        <td>$ 235</td>
                        <td>27 Des 2023</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>John Doe</td>
                        <td>Transfer</td>
                        <td>$ 235</td>
                        <td>27 Des 2023</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>John Doe</td>
                        <td>Transfer</td>
                        <td>$ 235</td>
                        <td>27 Des 2023</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>John Doe</td>
                        <td>Transfer</td>
                        <td>$ 235</td>
                        <td>27 Des 2023</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>John Doe</td>
                        <td>Transfer</td>
                        <td>$ 235</td>
                        <td>27 Des 2023</td>
                      </tr>
                    </tbody>
                  </table>

                  <button className="btn button-primary w-100 mt-2">
                    View All
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">
                <div className="card-body m-2">
                  <p className="raleway-700 sum-title">Currency conversion</p>
                  <div>
                    <div className="form-group">
                      <input
                        name="amount"
                        id="amount"
                        type="number"
                        className="form-control"
                        placeholder="Enter your amount"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <select
                        id="fromCurrency"
                        name="fromCurrency"
                        className="form-control"
                      >
                        <option>Rupiah Indonesia</option>
                        <option>Dolar America</option>
                        <option>Dolar Singapura</option>
                      </select>
                    </div>
                  </div>
                  <p className="text-center my-3">To</p>
                  <div>
                    <div className="form-group">
                      <input
                        name="amount"
                        id="amount"
                        type="number"
                        className="form-control"
                        placeholder="Enter your amount"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <select
                        id="fromCurrency"
                        name="fromCurrency"
                        className="form-control"
                      >
                        <option>Rupiah Indonesia</option>
                        <option>Dolar America</option>
                        <option>Dolar Singapura</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
