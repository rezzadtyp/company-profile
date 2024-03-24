const milestoneList = [
  {
    id: 1,
    year: 2019,
    description:
      "CROT was founded with a commitment to address the growing need for EV infrastructure.",
  },
  {
    id: 2,
    year: 2020,
    description:
      "We launched our first-generation charging stations, marking the beginning of our journey to redefine the EV charging experience.",
  },
  {
    id: 3,
    year: 2021,
    description:
      "Expanded our network to 34 cities, making EV charging more accessible to drivers across the region.",
  },
  {
    id: 4,
    year: 2023,
    description:
      "Introduced Super Fast Charging (SFC), setting new standards for efficiency and reliability in the industry.",
  },
];

const Milestones = () => {
  return (
    <div>
      {milestoneList.map((list) => {
        return (
          <div key={list.id} className="flex gap-4">
            <div>
              {list.year}
            </div>
            <div>
              {list.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Milestones;
