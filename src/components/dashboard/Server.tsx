import Image from "next/image";

interface Props {
  name: string;
  text: string;
  text2: string;
  description: string;
}

const Server = ({
  name,
  text,
  text2,
  description
}: Props) => {
  return (
    <div className="server-container">
      <p className="server-name">{name}</p>
      <div className="server-flex-one">
        <div className="server-flex-two">
          <span className="server-icon">
            <Image
              src='/icons/home/block.svg'
              alt="img"
              width={22} height={25}
            />
          </span>
          <div className="server-text-container">
            <p className="server-text">{text}</p>
            <p className="server-text-2">{text2}</p>
          </div>
        </div>

        <div className="server-description-container">
          <span className="server-description">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default Server;
