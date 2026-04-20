export function WistiaPrecallEmbed() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-950 shadow-[0_1px_0_rgb(0_0_0/0.04)]">
      <iframe
        src="https://fast.wistia.net/embed/iframe/zuf4enc2kl"
        title="Precall overview"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="w-full aspect-video"
        style={{ border: 0 }}
      />
    </div>
  );
}
