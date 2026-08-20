export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-40 overflow-hidden">
      {/* Soft blue ambient glow */}
      <div
        className="
          absolute
          left-1/2
          top-[-120px]
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/[0.07]
          blur-[100px]
        "
      />

      {/* Very subtle bottom glow */}
      <div
        className="
          absolute
          bottom-[-180px]
          right-[-100px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-indigo-500/[0.025]
          blur-[90px]
        "
      />
    </div>
  );
}