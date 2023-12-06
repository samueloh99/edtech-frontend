export function Footer() {
  return (
    <div className="flex flex-col bg-white mt-60 w-full h-full md:h-[300px]">
      <div className="main-container flex flex-col w-full h-full justify-between items-start py-5 gap-10 md:gap-0">
        <div className="flex flex-col md:flex-row justify-between items-star w-full gap-10 md:gap-0">
          <div className="flex flex-col justify-start items-start w-full gap-2">
            <p className="text-xl font-bold">Education Platform</p>
            <ul className="flex flex-col items-start text-md">
              <li>Home</li>
              <li>Plans & Pricing</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between gap-5 md:gap-0">
            <div className="flex flex-col justify-start items-start md:items-end gap-2">
              <p className="text-lg font-bold">Community</p>
              <ul className="flex flex-col md:items-end items-start text-md">
                <li>Explore the community</li>
                <li>Youtube</li>
                <li>Newsletter</li>
              </ul>
            </div>
            <div className="flex flex-col justify-start items-start md:items-end gap-2">
              <p className="text-lg font-bold">Courses</p>
              <ul className="flex flex-col md:items-end items-start text-md">
                <li>All courses</li>
                <li>Free courses</li>
                <li>Pro courses</li>
              </ul>
            </div>
            <div className="flex flex-col justify-start items-start md:items-end gap-2">
              <p className="text-lg font-bold">Company</p>
              <ul className="flex flex-col md:items-end items-start text-md">
                <li>About us</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-start items-center text-sm font-bold">
          <p>@2023 Education Platform</p>
        </div>
      </div>
    </div>
  );
}
