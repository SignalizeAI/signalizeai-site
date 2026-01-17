const OfferList = ({ text, available = true }: { text: string; available?: boolean }) => {
  return (
    <div className={`mb-2 flex items-start gap-3 text-xs sm:text-sm leading-snug break-words ${
      available
        ? "text-body-color dark:text-dark-6"
        : "text-body-color/50 dark:text-dark-6/50"
    }`}>
      {available ? (
        <svg
          className="mt-0.5 h-4 w-4 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg
          className="mt-0.5 h-4 w-4 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      )}
      <span>{text}</span>
    </div>
  );
};

export default OfferList;
