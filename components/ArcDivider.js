// The recurring "rim" shape — traced loosely from the lip of a clay paanpoi
// (bird water bowl). Used between sections instead of a plain straight edge.
export default function ArcDivider({ color = "var(--sand)", flip = false }) {
  return (
    <svg
      className="arc-divider"
      viewBox="0 0 1200 64"
      preserveAspectRatio="none"
      style={{ color, transform: flip ? "scaleY(-1)" : "none" }}
      aria-hidden="true"
    >
      <path d="M0,0 C200,58 400,64 600,60 C800,56 1000,20 1200,0 L1200,64 L0,64 Z" />
    </svg>
  );
}
