import React from "react";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import img_bnb from "../assets/bnb.png";
import img_bottom1 from "../assets/48711064.png";
import img_bottom2 from "../assets/image.png";

export default function MainFlex() {
  return (
    <>
      <div className="container">
        <Header  />
        <Grid container style={{ marginTop: "100px"  }} justifyContent="center">
          <Grid item xs={12} md={6}>
            <div className="home_f_money">
              <a
                href="https://medium.com/@BNBStakerClub/10-000-giveaway-2e551c054bcb"
                target="new"
                className="home_f_money_btn"
              >
                10000$ GIVEAWAY 🎉
              </a>
              <h1>
                Stake{" "}
                <span style={{ color: "#FFFF00" }} className="cashtag">
                  $BNB
                </span>
              </h1>
              <h1>Earn up to 8.7% daily</h1>
            </div>
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign: "right" }}>
            <img src={img_bnb} className="home_img_bnb" alt="bnb" />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: "-30px" }}>
          <Grid item xs={12} md={4}>
            <div className="home_s_grp">
              <div className="glass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--cryptocurrency"
                  width="50"
                  height="50"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                  data-icon="cryptocurrency:bnb"
                  data-width="50"
                  data-height="50"
                  style={{ color: "yellow" }}
                >
                  <path
                    fill="currentColor"
                    d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16zm-3.884-17.596L16 10.52l3.886 3.886l2.26-2.26L16 6l-6.144 6.144l2.26 2.26zM6 16l2.26 2.26L10.52 16l-2.26-2.26L6 16zm6.116 1.596l-2.263 2.257l.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48l-3.884-3.884zM21.48 16l2.26 2.26L26 16l-2.26-2.26L21.48 16zm-3.188-.002h.001L16 13.706L14.305 15.4l-.195.195l-.401.402l-.004.003l.004.003l2.29 2.291l2.294-2.293l.001-.001l-.002-.001z"
                  ></path>
                </svg>
              </div>
              <div className="home_s_grp_text1">
                <h3>Total Staked</h3>
              </div>
              <h2>
                <span id="totalStaked">2667.5</span>{" "}
                <span className="unit">BNB</span>
              </h2>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="home_s_grp">
              <div className="glass">
                <div className="icon">💰</div>
              </div>
              <div className="home_s_grp_text1">
                <h3>Contract Balance</h3>
              </div>
              <h2>
                <span id="totalStaked">441.5</span>{" "}
                <span className="unit">BNB</span>
              </h2>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="home_s_grp">
              <div className="glass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--cryptocurrency"
                  width="50"
                  height="50"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                  data-icon="cryptocurrency:bnb"
                  data-width="50"
                  data-height="50"
                  style={{ color: "yellow" }}
                >
                  <path
                    fill="currentColor"
                    d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16zm-3.884-17.596L16 10.52l3.886 3.886l2.26-2.26L16 6l-6.144 6.144l2.26 2.26zM6 16l2.26 2.26L10.52 16l-2.26-2.26L6 16zm6.116 1.596l-2.263 2.257l.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48l-3.884-3.884zM21.48 16l2.26 2.26L26 16l-2.26-2.26L21.48 16zm-3.188-.002h.001L16 13.706L14.305 15.4l-.195.195l-.401.402l-.004.003l.004.003l2.29 2.291l2.294-2.293l.001-.001l-.002-.001z"
                  ></path>
                </svg>
              </div>
              <div className="home_s_grp_text1">
                <h3>BNB Price</h3>
              </div>
              <h2>
                <span id="totalStaked">$435.5</span>
              </h2>
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: "150px" }}>
          <Grid item xs={12} md={4}>
            <div className="home_t_grp">
              <div className="filler-header">
                <h2>Plan 1</h2>
                <div className="days">
                  <h3>low risk</h3>
                </div>
              </div>
              <div className="filler-body">
                <div className="value">
                  <h3>Investment Term</h3>
                  <div className="lockup">
                    <h1>14 days</h1>
                  </div>
                </div>
                <div className="value">
                  <h3>Investment Strategy</h3>
                  <div className="horizontal-group">
                    <h2>daily return</h2>
                    <h2>7%</h2>
                  </div>
                  <div className="horizontal-group">
                    <h2>auto-reinvested</h2>
                    <h2>14 times</h2>
                  </div>
                  <div className="horizontal-group">
                    <h2>total return</h2>
                    <h2>157.9%</h2>
                  </div>
                  <h3> </h3>
                  <div className="horizontal-group-alt">
                    <h3>
                      Withdrawal Tax <br />
                      <span style={{ fontSize: "smaller" }}>
                        Goes back directly into the contract
                      </span>
                    </h3>
                    <h3>-15%</h3>
                  </div>
                </div>
                <div className="value">
                  <div className="roi-group">
                    <div className="value">
                      <h3>Deposit</h3>
                      <h2>
                        <span id="deposit_left_0">1</span>{" "}
                        <span className="unit">BNB</span>
                      </h2>
                    </div>
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ArrowRightAltIcon"
                    >
                      <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
                    </svg>
                    <div className="value">
                      <h3>Receive</h3>
                      <h2>
                        <span id="deposit_right_0">3.43</span>{" "}
                        <span className="unit">BNB</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="deposit">
                  <h3>Deposit Amount</h3>
                  <div className="deposit-group">
                    <div className="input-group">
                      <input
                        id="deposit_value_0"
                        type="number"
                        step="0.1"
                        min="0.1"
                        max="100000"
                        placeholder="0.1"
                        required=""
                        defaultValue={""}
                      />
                      <h3>BNB</h3>
                    </div>
                    <button id="deposit_0" disabled="">
                      <h4>Deposit</h4>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="home_t_grp">
              <div className="filler-header">
                <h2>Plan 2</h2>
                <div className="days">
                  <h3>MODERATE RISK</h3>
                </div>
              </div>
              <div className="filler-body">
                <div className="value">
                  <h3>Investment Term</h3>
                  <div className="lockup">
                    <h1>21 days</h1>
                  </div>
                </div>
                <div className="value">
                  <h3>Investment Strategy</h3>
                  <div className="horizontal-group">
                    <h2>daily return</h2>
                    <h2>7%</h2>
                  </div>
                  <div className="horizontal-group">
                    <h2>auto-reinvested</h2>
                    <h2>14 times</h2>
                  </div>
                  <div className="horizontal-group">
                    <h2>total return</h2>
                    <h2>157.9%</h2>
                  </div>
                  <h3> </h3>
                  <div className="horizontal-group-alt">
                    <h3>
                      Withdrawal Tax <br />
                      <span style={{ fontSize: "smaller" }}>
                        Goes back directly into the contract
                      </span>
                    </h3>
                    <h3>-15%</h3>
                  </div>
                </div>
                <div className="value">
                  <div className="roi-group">
                    <div className="value">
                      <h3>Deposit</h3>
                      <h2>
                        <span id="deposit_left_0">1</span>{" "}
                        <span className="unit">BNB</span>
                      </h2>
                    </div>
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ArrowRightAltIcon"
                    >
                      <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
                    </svg>
                    <div className="value">
                      <h3>Receive</h3>
                      <h2>
                        <span id="deposit_right_0">3.43</span>{" "}
                        <span className="unit">BNB</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="deposit">
                  <h3>Deposit Amount</h3>
                  <div className="deposit-group">
                    <div className="input-group">
                      <input
                        id="deposit_value_0"
                        type="number"
                        step="0.1"
                        min="0.1"
                        max="100000"
                        placeholder="0.1"
                        required=""
                        defaultValue={""}
                      />
                      <h3>BNB</h3>
                    </div>
                    <button id="deposit_0" disabled="">
                      <h4>Deposit</h4>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="home_t_grp">
              <div className="filler-header">
                <h2>Plan 3</h2>
                <div className="days">
                  <h3>HIGH RISK</h3>
                </div>
              </div>
              <div className="filler-body">
                <div className="value">
                  <h3>Investment Term</h3>
                  <div className="lockup">
                    <h1>28 days</h1>
                  </div>
                </div>
                <div className="value">
                  <h3>Investment Strategy</h3>
                  <div className="horizontal-group">
                    <h2>daily return</h2>
                    <h2>7%</h2>
                  </div>
                  <div className="horizontal-group">
                    <h2>auto-reinvested</h2>
                    <h2>14 times</h2>
                  </div>
                  <div className="horizontal-group">
                    <h2>total return</h2>
                    <h2>157.9%</h2>
                  </div>
                  <h3> </h3>
                  <div className="horizontal-group-alt">
                    <h3>
                      Withdrawal Tax <br />
                      <span style={{ fontSize: "smaller" }}>
                        Goes back directly into the contract
                      </span>
                    </h3>
                    <h3>-15%</h3>
                  </div>
                </div>
                <div className="value">
                  <div className="roi-group">
                    <div className="value">
                      <h3>Deposit</h3>
                      <h2>
                        <span id="deposit_left_0">1</span>{" "}
                        <span className="unit">BNB</span>
                      </h2>
                    </div>
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ArrowRightAltIcon"
                    >
                      <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
                    </svg>
                    <div className="value">
                      <h3>Receive</h3>
                      <h2>
                        <span id="deposit_right_0">3.43</span>{" "}
                        <span className="unit">BNB</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="deposit">
                  <h3>Deposit Amount</h3>
                  <div className="deposit-group">
                    <div className="input-group">
                      <input
                        id="deposit_value_0"
                        type="number"
                        step="0.1"
                        min="0.1"
                        max="100000"
                        placeholder="0.1"
                        required=""
                        defaultValue={""}
                      />
                      <h3>BNB</h3>
                    </div>
                    <button id="deposit_0" disabled="">
                      <h4>Deposit</h4>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        <div className="bottom_imgae_grp">
          <div style={{ width: "190px" }}>
            <img src={img_bottom1} className="bottom_image" alt="bottom" />
          </div>
          <div style={{ width: "190px" }}>
            <img src={img_bottom2} className="bottom_image" alt="bottom" />
          </div>
        </div>
      </div>
    </>
  );
}
