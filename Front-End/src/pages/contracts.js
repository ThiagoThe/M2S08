import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { api } from "../services/api";
import { Link } from "react-router-dom";

function Contract() {
  const [contract, setContract] = useState([]);
  const [changeState, setChangeState] = useState(true);
  const [form, setForm] = useState({});

  useEffect(() => {
    const load = async () => {
      const response = await api.get("/api/listContracts");
      setContract(response.data);
    };
    load();
  }, [changeState]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await api.post("/api/createOneContract", form);
    alert("Criado com sucesso.");
    setChangeState(!changeState);
  };

  const deleteOneContract = async (id) => {
    await api.delete(`/api/deleteOneContract/${id}`);
    alert("Contrato deletado com sucesso.");
    setChangeState(!changeState);
  };

  return (
    <main>
      <Header />
      <h3 style={{ textAlign: "center" }}>Contratos</h3>

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
          placeholder="Nome dp Contrato"
          onChange={(event) => {
            setForm({
              ...form,
              contractName: event.target.value,
            });
          }}
        />
        <input type="submit" value="Criar novo contrato." />
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
              Nome da Empresa
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: 8,
              }}
            >
              CNPJ
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
          {contract.map(({ id, companyName, cnpj, createdAt, updatedAt }) => {
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
                  {companyName}
                </td>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  {cnpj}
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
                  <Link to={`/edit/${id}/Contracts`}>Editar</Link>
                </td>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: 8,
                  }}
                >
                  <button onClick={() => deleteOneContract(id)}>Excluir</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export { Contract };
