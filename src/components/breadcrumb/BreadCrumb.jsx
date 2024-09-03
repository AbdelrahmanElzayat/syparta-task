const Breadcrumb = ({ crumbs }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            <span className="font-semibold">{crumb.name}</span>
            {index < crumbs.length - 1 && (
              <span className="mx-2">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.375 6.25L15.625 12.5L9.375 18.75"
                    stroke="#242223"
                    strokeWidth="2.91667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
