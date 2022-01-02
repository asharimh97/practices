import { useEffect } from "react";
import Input from "../components/Input";
import useStore from "../store"
import useForm from "../utils/hooks/useForm";

function ZustandPage() {
  const { cats, removeCat, addCat } = useStore();

  const [name, setName, clearName] = useForm("");
  const [race, setRace, clearRace]  = useForm("");
  const [color, setColor, clearColor] = useForm("");

  useEffect(() => {
    console.log({cats});
  }, [cats]);

  const clear = () => {
    clearName()
    clearRace()
    clearColor()
  }

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      race,
      color
    }

    addCat(data);
    clear();
  }

  const handleDeleteCat = id => {
    removeCat(id)
  }

  return (
    <div style={{ width: "100%", padding: "16px" }}>
      <p>
        Ini halaman yang pake zustand
      </p>
      <form onSubmit={handleSubmit}>
        <Input label="Nama" value={name} onChange={setName} />
        <Input label="Ras" value={race} onChange={setRace} />
        <Input label="Warna" value={color} onChange={setColor} />
        <button type="submit">Submit</button>
      </form>
      {cats.length > 0 && (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Race</th>
            <th>Color</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cats.map(cat => (
            <tr key={cat.id}>
              <td>{cat.name}</td>
              <td>{cat.race}</td>
              <td>{cat.color}</td>
              <td>
                <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  )
}

export default ZustandPage;