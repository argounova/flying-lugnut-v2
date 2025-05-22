

interface ListProps<T> {
  items: T[],
  renderItem: (item: T) => React.ReactNode
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  )
}
export default List