'use client';

const lenders = [
  { name: 'ANZ', color: '#007DBA' },
  { name: 'ASB', color: '#FFB81C' },
  { name: 'BNZ', color: '#1E3264' },
  { name: 'Westpac', color: '#D5002B' },
  { name: 'Kiwibank', color: '#000000' },
  { name: 'SBS', color: '#00A651' },
  { name: 'TSB', color: '#0072CE' },
  { name: 'Heartland', color: '#6B2D5B' },
  { name: 'Co-op Bank', color: '#003D7D' },
];

export function LendersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-sm font-semibold text-[#f16421] uppercase tracking-wider mb-2">
            Our Lending Partners
          </h3>
          <p className="text-2xl font-bold text-gray-900">
            We compare rates from 20+ NZ lenders
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {lenders.map((lender) => (
            <div
              key={lender.name}
              className="group relative bg-gray-50 hover:bg-white border-2 border-gray-100 hover:border-[#f16421]/30 rounded-2xl px-8 py-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span
                className="font-bold text-lg"
                style={{ color: lender.color }}
              >
                {lender.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Plus many more specialist lenders for unique situations
        </p>
      </div>
    </section>
  );
}
