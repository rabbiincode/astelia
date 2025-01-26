import Image from "next/image";

interface Props {
  name: string;
  text: string;
  icon: any;
  status: string;
}

const RiskContainerServer = ({ name, text, icon: Icon, status }: Props) => {
  return (
    <>
      {status == "severe" ? (
        <div className="risk-container-server">
          <div className="risk-container-server-flex-one">
            <div className="risk-container-server-flex-two">
              <span className="risk-container-server-icon">
              <Image
                src='/icons/home/block.svg'
                alt="img"
                width={22} height={25}
              />
              </span>
              <div className="risk-container-server-text-container">
                <p className="risk-container-server-text">{name}</p>
                <p className="risk-container-server-text-2">{text}</p>
              </div>
            </div>

            <div className="risk-container-server-button-container">
              <button className="risk-container-button">
                {" "}
                <p className="risk-container-button-text severe-text">Severe</p>
              </button>
            </div>
          </div>
        </div>
      ) : status == "down" ? (
        <div className="risk-container-server">
          <div className="risk-container-server-flex-one">
            <div className="risk-container-server-flex-two">
              <span className="risk-container-server-icon">
                <Image
                  src='/icons/home/block.svg'
                  alt="img"
                  width={22} height={25}
                />
              </span>
              <div className="risk-container-server-text-container">
                <p className="risk-container-server-text">{name}</p>
                <p className="risk-container-server-text-2">{text}</p>
              </div>
            </div>

            <div className="risk-container-server-button-container">
              <button className="risk-container-button">
                <p className="risk-container-button-text down-text">Down</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default RiskContainerServer;
