import { headers } from "./utils/const/customer.js";
import { renderTable } from "./utils/table/index.js";
import { renderDialog } from "./utils/dialog/index.js";

let customers = [];
let editingId = null;

const panel = document.querySelector(".panel");
const popupToggle = document.getElementById("popup-toggle");
const popupTitle = document.querySelector(".popup-content .panel-title");

const getCustomers = async () => {
  try {
    const response = await fetch("http://localhost:3000/customers");
    if (!response.ok) throw new Error("Failed to fetch customers");
    return await response.json();
  } catch {
    alert("get data failed");
    return [];
  }
};

const renderCustomers = (list) => {
  const existingTable = panel.querySelector("table");
  if (existingTable) {
    existingTable.closest("div").remove();
  }

  panel.append(renderTable(headers, list));
  customers = list;
};

const resetForm = () => {
  const companyName = document.getElementById("companyName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const taxtId = document.getElementById("taxtId");
  const address = document.getElementById("address");

  [companyName, email, phone, taxtId, address].forEach((item) => {
    item.value = "";
  });

  editingId = null;
  popupTitle.textContent = "Customer Details";
};

const fillForm = (customer) => {
  const companyName = document.getElementById("companyName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const taxtId = document.getElementById("taxtId");
  const address = document.getElementById("address");

  editingId = customer.id;
  companyName.value = customer.companyName || "";
  email.value = customer.email || "";
  phone.value = customer.phone || "";
  taxtId.value = customer.taxtId || customer.taxId || "";
  address.value = customer.address || "";
  popupTitle.textContent = "Edit Customer";
};

const init = async () => {
  const panel = document.querySelector(".panel");
  const customersFromServer = await getCustomers();
  renderCustomers(customersFromServer);

  const btnAdd = document.querySelector("#btn-add-customers");
  const saveBtn = document.querySelector(".btn-save");

  const companyName = document.getElementById("companyName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const taxtId = document.getElementById("taxtId");
  const address = document.getElementById("address");

  btnAdd.onclick = () => {
    resetForm();
  };

  saveBtn.onclick = async () => {
    const data = {
      companyName: companyName.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      taxtId: taxtId.value.trim(),
      address: address.value.trim(),
    };

    if (
      !data.companyName ||
      !data.email ||
      !data.phone ||
      !data.taxtId ||
      !data.address
    ) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const isEditing = Boolean(editingId);

    try {
      if (isEditing) {
        await fetch(`${"http://localhost:3000/customers"}/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, id: editingId }),
        });
      } else {
        await fetch("http://localhost:3000/customers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }

      const updated = await getCustomers();
      renderCustomers(updated);
      resetForm();
      popupToggle.checked = false;
      alert(
        isEditing
          ? "Cập nhật khách hàng thành công"
          : "Thêm khách hàng thành công",
      );
    } catch {
      alert("Save failed");
    }
  };

  panel.addEventListener("click", async (e) => {
    const editButton = e.target.closest(".edit");
    if (editButton) {
      const id = editButton.dataset.id;
      const customer = customers.find((item) => item.id === id);
      if (customer) {
        fillForm(customer);
      }
      return;
    }

    const deleteButton = e.target.closest(".delete");
    if (deleteButton) {
      const id = deleteButton.dataset.id;
      const customer = customers.find((item) => item.id === id);

      if (!customer) return;

      const confirmDelete = confirm(
        `Bạn có chắc muốn xóa khách hàng "${customer.companyName}"?`,
      );

      if (!confirmDelete) return;

      try {
        await fetch(`${"http://localhost:3000/customers"}/${id}`, {
          method: "DELETE",
        });

        const updated = await getCustomers();
        renderCustomers(updated);
        alert("Xóa khách hàng thành công");
      } catch {
        alert("xoa that bai");
      }
    }
  });
};

init();
