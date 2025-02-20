export const VacancyRow = ({ vacancy, onEdit }) => {
  return (
    <tr>
      <td className="">{vacancy.companyName}</td>
      <td className="">
        <a
          href={vacancy.companyWebsite}
          className="text-blue-500"
          target="_blank"
          rel="noreferrer"
        >
          {vacancy.companyWebsite}
        </a>
      </td>
      <td className="">{vacancy.platform}</td>
      <td className="">{vacancy.description}</td>
      <td className="">{vacancy.salary}</td>
      <td className="">{vacancy.status}</td>
      <td className="">
        <button className="editButton" onClick={() => onEdit(vacancy)}>
          Edit
        </button>
      </td>
    </tr>
  );
};
