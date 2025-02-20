import { Fragment, useState } from "react";
import {
  Dialog,
  Transition,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export const VacancyFrom = ({ isOpen, saveVacancy, closeModal, vacancy }) => {
  const [formData, setFormData] = useState(
    vacancy || {
      companyName: "",
      companyWebsite: "",
      platform: "",
      description: "",
      salary: "",
      status: "Pending",
    }
  );
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveVacancy(formData);
    closeModal();
  };
  return (
    // <div class={isOpen ? "backdrop" : "backdrop isHidden"}>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="modal" onClose={closeModal}>
        <div className="">
          <DialogPanel className="">
            <DialogTitle className="">Vacancy Form</DialogTitle>
            <form onSubmit={handleSubmit} className="">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className=""
                required
              />
              <input
                type="url"
                name="companyWebsite"
                placeholder="Company Website"
                value={formData.companyWebsite}
                onChange={handleChange}
                className=""
                required
              />
              <input
                type="text"
                name="platform"
                placeholder="Platform (LinkedIn, Indeed, etc.)"
                value={formData.platform}
                onChange={handleChange}
                className=""
                required
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className=""
                required
              />
              <input
                type="text"
                name="salary"
                placeholder="Salary"
                value={formData.salary}
                onChange={handleChange}
                className=""
              />
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className=""
              >
                <option value="Pending">Pending</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Rejected">Rejected</option>
                <option value="Accepted">Accepted</option>
              </select>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="p-2 bg-gray-400 rounded"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
    // </div>
  );
};
