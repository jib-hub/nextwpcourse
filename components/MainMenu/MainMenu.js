import { ButtonLink } from "components/ButtonLink";
import Link from "next/link";
import { FaHouseUser, FaHeart } from "react-icons/fa";
export const MainMenu = ({
  items,
  callToActionDestination,
  callToActionLabel,
}) => {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between h-16 px-5 text-white bg-slate-800">
      <div className="flex text-pink-600">
        <FaHouseUser size={30} />
        <FaHeart size={30} />
      </div>
      <div className="flex">
        {(items || []).map((item) => (
          <div
            className="relative cursor-pointer hover:bg-slate-700 group"
            key={item.id}
          >
            <div>
              <Link className="block p-5" href={item.destination}>
                {item.label}
              </Link>
            </div>
            {!!item.subMenuItems?.length && (
              <div className="absolute right-0 hidden -mt-3 text-right group-hover:block bg-slate-800 top-full">
                {item.subMenuItems.map((item) => (
                  <Link
                    href={item.destination}
                    key={item.id}
                    className="block p-5 whitespace-nowrap hover:bg-slate-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="my-auto ml-3">
          <ButtonLink
            href={callToActionDestination}
            label={callToActionLabel}
          />
        </div>
      </div>
    </div>
  );
};
