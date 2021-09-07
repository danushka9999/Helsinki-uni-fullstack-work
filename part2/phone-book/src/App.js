import React, { useState } from 'react'
import Person from './components/Person'

const initialValues = {
  name: '',
  number: '',

};

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '0774020028',
      id: 1 }
  ]) 
  //const [ newName, setNewName ] = useState('')
  //const [ newNumber, setNewNumber ] = useState('')
  const [values, setValues] = useState(initialValues)

  /*const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }*/
  const handleInputChange = (e) => {
    //const name = e.target.name 
    //const value = e.target.value 
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  

  const addName = (event) => {
    event.preventDefault()
    if (persons.find(p => p.name === values.name)) {
      window.alert(`${values.name} is already added to phonebook`);
      return false;
    }
    const nameObject = {
      name: values.name,
      number: values.number,
      id: persons.length + 1,
    }
  
    setPersons(persons.concat(nameObject))
    setValues(initialValues)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={values.name}
            name="name"
            onChange={handleInputChange }
          />
        </div>
        <div>
          number: <input 
            value={values.number}
            name="number"
            onChange={handleInputChange }
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons.map(person =>
          <Person key={person.id} person={person} />
      )}
      </div>
    </div>
  )
}

export default App