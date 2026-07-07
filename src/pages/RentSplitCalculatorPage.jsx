import React, { useMemo, useState } from 'react';
import SEO from '../lib/seoHelper';
import RelatedTools from '../components/RelatedTools';

const initialRooms = [
  { id: 1, name: 'Room 1', size: 120, people: 1, adjustment: 0 },
  { id: 2, name: 'Room 2', size: 100, people: 1, adjustment: 0 },
  { id: 3, name: 'Room 3', size: 80, people: 1, adjustment: 0 },
];

const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Rent Split Calculator With Rooms',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    description: 'Free rent split calculator for roommates. Split rent by room size, utilities, room adjustments, and number of people.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do you split rent fairly by room size?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter each room size and the calculator divides rent proportionally by weighted room size. Larger rooms pay more, and smaller rooms pay less.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I split utilities separately from rent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Utilities are divided by the number of people, while rent is divided by room weight, making the result fairer for shared rooms.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the room adjustment field for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use room adjustment to add value for perks such as a private bathroom, balcony, better light, parking, or extra storage.',
        },
      },
    ],
  },
];

function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

const RentSplitCalculatorPage = () => {
  const [rent, setRent] = useState(30000);
  const [utilities, setUtilities] = useState(3000);
  const [rooms, setRooms] = useState(initialRooms);

  const totals = useMemo(() => {
    const weightedRooms = rooms.map((room) => ({
      ...room,
      weight: Math.max(1, toNumber(room.size) + toNumber(room.adjustment)),
      people: Math.max(1, toNumber(room.people)),
    }));
    const totalWeight = weightedRooms.reduce((sum, room) => sum + room.weight, 0) || 1;
    const totalPeople = weightedRooms.reduce((sum, room) => sum + room.people, 0) || 1;

    return weightedRooms.map((room) => {
      const roomRent = (toNumber(rent) * room.weight) / totalWeight;
      const roomUtilities = (toNumber(utilities) * room.people) / totalPeople;
      const total = roomRent + roomUtilities;

      return {
        ...room,
        roomRent,
        roomUtilities,
        total,
        perPerson: total / room.people,
      };
    });
  }, [rent, rooms, utilities]);

  const updateRoom = (id, field, value) => {
    setRooms((current) => current.map((room) => (
      room.id === id ? { ...room, [field]: value } : room
    )));
  };

  const addRoom = () => {
    setRooms((current) => [
      ...current,
      { id: Date.now(), name: `Room ${current.length + 1}`, size: 100, people: 1, adjustment: 0 },
    ]);
  };

  const removeRoom = (id) => {
    setRooms((current) => current.length > 1 ? current.filter((room) => room.id !== id) : current);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Rent Split Calculator With Rooms - Split Rent by Room Size"
        description="Free rent split calculator with rooms. Split rent by room size, utilities, private-room adjustments, and roommates in seconds."
        keywords="rent split calculator with rooms, split rent by room size, roommate rent calculator, room rent split calculator, fair rent calculator"
        url="/rent-split-calculator"
        customSchema={schema}
      />

      <h1 className="text-3xl font-bold mb-3">Rent Split Calculator With Rooms</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Split monthly rent by room size, add room adjustments for perks like attached bathrooms,
        and divide utilities by the number of people in each room.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-1 bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Monthly Costs</h2>
          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="rent">
            Total rent
          </label>
          <input
            id="rent"
            type="number"
            min="0"
            value={rent}
            onChange={(event) => setRent(event.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="utilities">
            Shared utilities
          </label>
          <input
            id="utilities"
            type="number"
            min="0"
            value={utilities}
            onChange={(event) => setUtilities(event.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </section>

        <section className="lg:col-span-2 bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h2 className="text-xl font-bold">Rooms</h2>
            <button
              type="button"
              onClick={addRoom}
              className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Add Room
            </button>
          </div>

          <div className="space-y-4">
            {rooms.map((room) => (
              <div key={room.id} className="grid grid-cols-1 md:grid-cols-5 gap-3 border border-gray-100 rounded-lg p-4">
                <input
                  aria-label="Room name"
                  value={room.name}
                  onChange={(event) => updateRoom(room.id, 'name', event.target.value)}
                  className="border border-gray-300 rounded-lg p-3 md:col-span-1"
                />
                <input
                  aria-label="Room size"
                  type="number"
                  min="1"
                  value={room.size}
                  onChange={(event) => updateRoom(room.id, 'size', event.target.value)}
                  className="border border-gray-300 rounded-lg p-3"
                  placeholder="Sq ft"
                />
                <input
                  aria-label="People"
                  type="number"
                  min="1"
                  value={room.people}
                  onChange={(event) => updateRoom(room.id, 'people', event.target.value)}
                  className="border border-gray-300 rounded-lg p-3"
                  placeholder="People"
                />
                <input
                  aria-label="Adjustment"
                  type="number"
                  value={room.adjustment}
                  onChange={(event) => updateRoom(room.id, 'adjustment', event.target.value)}
                  className="border border-gray-300 rounded-lg p-3"
                  placeholder="Adjustment"
                />
                <button
                  type="button"
                  onClick={() => removeRoom(room.id)}
                  className="border border-gray-200 text-gray-700 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8 bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-5 gap-3 bg-gray-50 px-4 py-3 text-sm font-bold text-gray-600">
          <div>Room</div>
          <div>Rent</div>
          <div>Utilities</div>
          <div>Total</div>
          <div>Per Person</div>
        </div>
        {totals.map((room) => (
          <div key={room.id} className="grid grid-cols-5 gap-3 px-4 py-4 border-t border-gray-100 text-sm md:text-base">
            <div className="font-semibold text-gray-900">{room.name}</div>
            <div>{currency.format(room.roomRent)}</div>
            <div>{currency.format(room.roomUtilities)}</div>
            <div className="font-semibold">{currency.format(room.total)}</div>
            <div className="text-indigo-600 font-bold">{currency.format(room.perPerson)}</div>
          </div>
        ))}
      </section>

      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className="lg:col-span-2 bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">How this rent split calculator works</h2>
          <p className="text-gray-700 mb-4">
            This roommate rent calculator separates rent from utilities. Rent is split by each room's
            weighted size, while shared utilities are split by the number of people. That helps avoid
            the common problem where someone in a tiny room pays the same as someone in the largest room.
          </p>
          <p className="text-gray-700">
            Use the adjustment field when a room has extra value. For example, add 20 or 30 points for
            an attached bathroom, private balcony, walk-in closet, better sunlight, or parking access.
            The result gives each room's rent, utility share, total cost, and per-person amount.
          </p>
        </article>

        <aside className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 text-indigo-950">Best for</h2>
          <ul className="space-y-2 text-indigo-900">
            <li>Roommates splitting rent by room size</li>
            <li>Shared rooms with two or more people</li>
            <li>Private room perks and adjustments</li>
            <li>Monthly utility splitting</li>
          </ul>
        </aside>
      </section>

      <section className="mt-12 bg-white border border-gray-100 rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-5">Rent Split FAQ</h2>
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-lg">Should rent be split equally or by room size?</h3>
            <p className="text-gray-600 mt-1">Equal splitting is simple, but room-size splitting is usually fairer when bedrooms are noticeably different.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">How should a couple in one room split rent?</h3>
            <p className="text-gray-600 mt-1">Put the couple's room people count as 2. The room rent is still based on room size, and utilities are split by people.</p>
          </div>
        </div>
      </section>

      <RelatedTools currentPath="/rent-split-calculator" />
    </div>
  );
};

export default RentSplitCalculatorPage;
