import React, { useEffect, useState } from "react";
import { useWallet } from "use-wallet";
import { ethers } from "ethers";
import img_bnb from "../assets/bnb.png";
const Header = () => {
  const [headerClass, setHeaderClass] = useState("");
  const [headerClass1, setHeaderClass1] = useState("");
  const viewMenu = () => {
    setHeaderClass("header_responsive");
    setHeaderClass1("");
  };
  const hideMenu = () => {
    setHeaderClass1("header_responsive_hide");
    setHeaderClass("");
  };

  /* ------------ connect wallet --------------*/

  const wallet = useWallet();
  var styledAddress = wallet.account
    ? wallet.account.slice(0, 4) + "..." + wallet.account.slice(-4)
    : "";

  //check connection
  const handleChainChanged = (chainId) => {
    let { ethereum } = window;
    if (ethereum.isConnected() && Number(chainId) === 4002) {
      onConnect();
    }
  };

 

  const checkConnection = async () => {
    let { ethereum } = window;
    if (ethereum !== undefined) {
      const chainId = await ethereum.request({ method: "eth_chainId" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();
      if (accounts.length !== 0 && Number(chainId) === 4002) {
        onConnect();
      }
      ethereum.on("chainChanged", handleChainChanged);
    }
  };
  useEffect(() => {
    checkConnection();
  }, []);
  const onConnect = () => {
    if (wallet.status !== "connected") {
      wallet.connect().catch((err) => {
        alert("please check metamask!");
      });
    }
  };

  const disconnect = () => {
    if (wallet.status === "connected") {
      wallet.reset();
    }
  };
  return (
    <div className="header" style={{  }} >
      <div className="header_logo">
        <img src={img_bnb} className="header_logo_img" alt="logo" />
        <div className="header_logo_text">
          <h3>BNBStaker</h3>
        </div>
      </div>

      <div className={"header_middle " + headerClass + headerClass1}>
        <button onClick={hideMenu} className="close_btn">
          X
        </button>
        <a
          className="header_audit_btn"
          href="https://hazecrypto.net/audit/BNBStaker-xyz"
          target="new"
        >
          <h3>Audit</h3>
        </a>
        <a href="https://t.me/+fyj9hqPxLUFlMDIx" target="new">
          <h3>Telegram</h3>
        </a>
        <a href="https://discord.gg/v6bQP4aqPP" target="new">
          <h3>Discord</h3>
        </a>
        <a
          href="https://medium.com/@BNBStakerClub/bnbstaker-xyz-earn-upto-20-daily-on-your-staked-bnb-token-d2769a1c7cb2"
          target="new"
        >
          <h3>Documentation</h3>
        </a>
        <a
          href="https://medium.com/@BNBStakerClub/bnbstaker-club-faq-6d6e2820d392"
          target="new"
        >
          <h3>FAQ</h3>
        </a>
        <div className="header_audit_btn1">
        {wallet.status === "connected" ? (
          <button
            className="header_connect_btn"
            style={{
              textTransform: "none",
            }}
            onClick={disconnect}
          >
            <h3 id="connect-label">{styledAddress}</h3>
          </button>
        ) : (
          <button
            onClick={() => onConnect()}
            className="header_connect_btn"
            style={{
              textTransform: "none",
            }}
          >
            {wallet.status === "connecting" ? (
              <div>
                <span
                  className="spinner-border"
                  role="status"
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    marginRight: 10,
                  }}
                ></span>
                <span className="sr-only ">Loading...</span>
              </div>
            ) : (
              <div>
                <h3 id="connect-label">Connect</h3>
              </div>
            )}
          </button>
        )}
      </div>
      </div>
      <div className="header_right">
        {wallet.status === "connected" ? (
          <button
            className="header_connect_btn"
            style={{
              textTransform: "none",
            }}
            onClick={disconnect}
          >
            <h3 id="connect-label">{styledAddress}</h3>
          </button>
        ) : (
          <button
            onClick={() => onConnect()}
            className="header_connect_btn"
            style={{
              textTransform: "none",
            }}
          >
            {wallet.status === "connecting" ? (
              <div>
                <span
                  className="spinner-border"
                  role="status"
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    marginRight: 10,
                  }}
                ></span>
                <span className="sr-only ">Loading...</span>
              </div>
            ) : (
              <div>
                <h3 id="connect-label">Connect</h3>
              </div>
            )}
          </button>
        )}
      </div>
      <button onClick={viewMenu} className="header_menu_btn">
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
};

export default Header;
