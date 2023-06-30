import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { api } from "../services/api";
import { Link } from "react-router-dom";

function Trainee() {
  const [trainees, setTrainees] = useState([]);
  const [changeState, setChangeState] = useState(true);
  const [form, setForm] = useState({});

  useEffect(() => {
    const load = async () => {
      const response = await api.get("/api/listTrainees");
      setTrainees(response.data);
    };
    load();
  }, [changeState]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await api.post("/api/createOneTrainee", form);
    alert("Criado com sucesso.");
    setChangeState(!changeState);
  };

  const deleteOneTrainee = async (id) => {
    await api.delete(`/api/deleteOneTrainee/${id}`);
    alert("Registro deletado com sucesso.");
    setChangeState(!changeState);
  };

  return (
    <main>
      <Header />
      <h3 style={{ textAlign: "center" }}>Estagiários</h3>

      <form
        onSubmit={onSubmitHandler}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          padding: 8,
        }}
      >
        <input
          id="name"
          type="text"
          placeholder="Nome do Estagiário"
          onChange={(event) => {
            setForm({
              ...form,
              name: event.target.value,
            });
          }}
        />
        <input type="submit" value="Criar novo registro." />
      </form>

      <table
        style={{
          fontFamily: "arial, sans-serif",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <tbody
          style={{
            border: "1px solid #dddddd",
            textAlign: "left",
            padding: 8,
          }}
        >
          <tr
            style={{
              border: "1px solid #dddddd",
              textAlign: "left",
              padding: 8,
            }}
          >
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: 8,
              }}
            >
              Id
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: 8,
              }}
            >
              Nome do Estagiário
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: 8,
              }}
            >
              RG
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: 8,
              }}
            >
              Criado em
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: 8,
              }}
            >
              Atualizado em
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: 8,
              }}
            >
              Editar Registro
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: 8,
              }}
            >
              Deletar Registro
            </th>
          </tr>
          {trainees.map(({ id, name, rg, createdAt, updatedAt }) => {
            return (
              <tr key={id}>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  {id}
                </td>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  {name}
                </td>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  {rg}
                </td>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  {createdAt}
                </td>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  {updatedAt}
                </td>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  <Link to={`/edit/${id}/Trainee`}>Editar</Link>
                </td>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  <button onClick={() => deleteOneTrainee(id)}>Excluir</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export { Trainee };
