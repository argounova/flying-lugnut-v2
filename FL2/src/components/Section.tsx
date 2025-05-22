

type SectionProps = {
  title?: string,
  children: React.ReactNode
}

const Section = ({ title = 'My Subheading', children }: SectionProps) => {
  return (
    <section className="mb-4">
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      {children}
    </section>
  )
}
export default Section