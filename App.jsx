
import { useState } from 'react'
import './App.css'
import Form from './Form'
import Card from './Card'

function App() {
  const [formData, setFormData] = useState([]);

const cardgenerator=(name,pass)=>{
  const newobject={
    title: `${name}`,
    content: `${pass}`,
  }
  setFormData(formData => [...formData, newobject]);

}
  return (
    <>
      <Form cardgenerator={cardgenerator} />
    <div className='Card-container'>
    {formData.map((card, index) => {
  return (
    <Card key={index} title={card.title} content={card.content} />
  )
})}

<div/>
    </div>

    </>
  )
}

export default App
