import { ButtonLink } from "components/ButtonLink";

export const CallToActionButton = ({ align, label, destination }) => {
  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className={alignMap[align]}>
      <ButtonLink href={destination} label={label} />
    </div>
  );
};
