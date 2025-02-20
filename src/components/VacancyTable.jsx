import { useState } from "react";
import { VacancyRow } from "./VacancyRow";
import { VacancyFrom } from "./VacancyForm";

export const VacancyTable = () => {
  const [vacancies, setVacancies] = useState([
    {
      id: 1,
      companyName: "Google",
      companyWebsite: "https://google.com",
      platform: "LinkedIn",
      description: "Frontend Internship",
      salary: "2000 USD",
      status: "Pending",
    },
  ]);
  const [ifFormOpen, setIsFormOpen] = useState(false);
  const [editingVacancy, setEditingVacancy] = useState(null);

  const openModal = (vacancy = null) => {
    setEditingVacancy(vacancy);
    setIsFormOpen(true);
  };

  const closeModal = () => {
    setIsFormOpen(false);
  };

  const saveVacancy = (newVacancy) => {
    if (editingVacancy) {
      setVacancies(
        vacancies.map((vacancy) =>
          vacancy.id === editingVacancy.id ? newVacancy : vacancy
        )
      );
    } else {
      setVacancies([...vacancies, { ...newVacancy, id: Date.now() }]);
    }
  };

  return (
    <div className="tableContainer">
      <button onClick={() => openModal()} className="addButton">
        Add vacancy
      </button>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>WebSite</th>
            <th>Plartform</th>
            <th>Description</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {vacancies.map((vacancy) => (
            <VacancyRow key={vacancy.id} vacancy={vacancy} onEdit={openModal} />
          ))}
        </tbody>
      </table>
      <VacancyFrom
        isOpen={ifFormOpen}
        closeModal={closeModal}
        saveVacancy={saveVacancy}
        vacancy={editingVacancy}
      />
    </div>
  );
};
