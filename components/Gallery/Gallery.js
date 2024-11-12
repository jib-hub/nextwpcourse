import Image from "next/image";

export const Gallery = ({ columns, cropImages, items }) => {
  const columnWidth = 100 / columns;
  let maxHeight = 0;
  let maxWidth = 0;

  if (cropImages) {
    items.forEach((item) => {
      if (item.attributes.height > maxHeight) {
        maxHeight = item.attributes.height;
      }
      if (item.attributes.width > maxWidth) {
        maxWidth = item.attributes.width;
      }
    });
  }
  return (
    <div className="flex flex-wrap max-w-5xl mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          style={{ width: `${columnWidth}%` }}
          className="flex-grow p-5"
        >
          <Image
            src={item.attributes.url}
            width={maxWidth || item.attributes.width}
            height={maxHeight || item.attributes.height}
            alt={item.attributes.alt || ""}
            className="object-cover h-full"
          />
        </div>
      ))}
    </div>
  );
};
