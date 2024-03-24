const culture = [
  {
    title: "Innovation",
    desc: "We embrace creativity and strive for continuous improvement in everything we do. From our technology to our operations, innovation is at the heart of our approach."
  },
  {
    title: "Sustainability",
    desc: "Environmental stewardship is not just a commitment—it's a way of life. We prioritize sustainability in every aspect of our business, from product development to daily operations."
  },
  {
    title: "Collaboration",
    desc: "We believe in the power of collaboration to drive meaningful change. By working together with partners, customers, and communities, we can create a more sustainable future for all."
  },
]

const Culture = () => {
  return (
    <div>
      {
        culture.map((value)=> {
          return (
            <div className="grid grid-cols-4 mb-4">
              <div className="text-xl font-semibold">
                {value.title}
              </div>
              <div className="col-span-3">
                {value.desc}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Culture