import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/Counter'
import List from './components/List'

function App() {
  return (
    <>
      <Heading title={'Hello'} />     
      <Section title={'My Other Subheading'}>
        <p>This is a paragraph inside the section.</p>
        <p>Another paragraph inside the section.</p>
      </Section> 
      <Counter />
      <List
        items={['Item 1', 'Item 2', 'Item 3']}
        renderItem={(item) => <span className="text-blue-500">{item}</span>}
      />
    </>
  )
}

export default App