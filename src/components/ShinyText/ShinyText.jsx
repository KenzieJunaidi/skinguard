import './ShinyText.css';

export const ShinyText = ({ text, speed }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};
