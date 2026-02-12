'use client';

const lenders = [
  { name: 'ANZ', color: 'bg-blue-600' },
  { name: 'ASB', color: 'bg-yellow-500' },
  { name: 'BNZ', color: 'bg-blue-800' },
  { name: 'Westpac', color: 'bg-red-600' },
  { name: 'Kiwibank', color: 'bg-black' },
  { name: 'SBS', color: 'bg-green-600' },
  { name: 'TSB', color: 'bg-blue-500' },
  { name: 'Heartland', color: 'bg-purple-600' },
];

export function LendersSection() {
  return (
    <section className="py-12 bg-gray-50 border-y">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-500 mb-6">
          We work with all major New Zealand lenders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {lenders.map((lender) => (
            <div
              key={lender.name}
              className={`${lender.color} text-white px-6 py-2 rounded-lg font-bold text-sm opacity-70 hover:opacity-100 transition-opacity`}
            >
              {lender.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
