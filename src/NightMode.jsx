// eslint-disable-next-line react/prop-types
export default function NightMode({ isLight, handleIsLight }) {
  return (
    <button onClick={handleIsLight}>
      {isLight ? "Night Mode" : "Light Mode"}
    </button>
  );
}
