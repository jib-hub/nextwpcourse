import Link from "next/link";

export const ButtonLink = ({ href, label }) => {
  return (
    <Link className="button" href={href}>
      {label}
    </Link>
  );
};
