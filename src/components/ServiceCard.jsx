const ServiceCard = ({ service }) => {
  return (
    <article className="group rounded-[2rem] border border-nationamber/60 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-nationorange">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-nationred text-nationamber">
        {service.icon}
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-nationred">{service.title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
    </article>
  )
}

export default ServiceCard
