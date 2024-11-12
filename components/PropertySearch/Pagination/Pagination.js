export const Pagination = ({ total, onPageClick }) => {
  return (
    <div className="flex justify-center max-w-5xl gap-2 mx-auto mb-10">
      {Array.from({ length: total }).map((value, i) => (
        <div
          onClick={() => {
            onPageClick(i + 1);
          }}
          key={i}
          className="button"
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};
