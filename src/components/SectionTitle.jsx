export default function SectionTitle({ title }) {
  return (
    <div className="text-center mb-16 relative">
      <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">
        {title}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">
        {title}
      </h2>
    </div>
  );
}
