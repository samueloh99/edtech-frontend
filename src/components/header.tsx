export function Header() {
  return (
    <div className="flex flex-row justify-between items-center main-container">
      <h1 className="text-xl font-bold">Education Platform</h1>
      <ul className="flex flex-row justify-center items-center gap-5 text-lg">
        <li>Pricing</li>
        <li>Log in</li>
      </ul>
    </div>
  );
}
