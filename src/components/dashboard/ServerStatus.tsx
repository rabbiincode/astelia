import Image from "next/image";

interface Props {
  name: string;
  icon: any;
  status: string;
}

const ServerStatus = ({ name, icon: Icon, status }: Props) => {
  return (
    <>
      {status == "severe" ? (
        <div className="server-status-container">
          <div className="server-status-icon severe">
            <Image
              src="/icons/home/fail.svg"
              alt="mask"
              width={15}
              height={15}
              color="#E5372B"
            />
          </div>
          <span className="server-status-name severe-text">{name}</span>
        </div>
      ) : status == "down" ? (
        <div className="server-status-container">
          <div className="server-status-icon down">
            <Image
              src="/icons/home/fail.svg"
              alt="mask"
              width={15}
              height={15}
              color="#E5372B"
            />
          </div>{" "}
          <p className="server-status-name down-text">{name}</p>
        </div>
      ) : (
        <div className="server-status-container">
          <div className="server-status-icon ok">
            <Image
              src="/icons/home/success.svg"
              alt="mask"
              width={15}
              height={15}
              color="#E5372B"
            />
          </div>{" "}
          <p className="server-status-name ok-text">{name}</p>
        </div>
      )}
    </>
  );
};

export default ServerStatus;
