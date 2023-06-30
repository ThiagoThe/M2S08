const fieldsCategory = {
  id: {
    visible: false,
  },
  name: {
    visible: true,
  },
  createdAt: {
    visible: false,
  },
  updatedAt: {
    visible: false,
  },
  deletedAt: {
    visible: false,
  },
};

const fieldsTrainee = {
  id: {
    visible: false,
  },
  name: {
    visible: true,
  },
  email: {
    visible: true,
  },
  rg: {
    visible: true,
  },
  cpf: {
    visible: true,
  },
  primaryPhoneContact: {
    visible: true,
  },
  secondaryPhoneContact: {
    visible: true,
  },
  dateBirth: {
    visible: true,
  },
  fatherName: {
    visible: true,
  },
  motherName: {
    visible: true,
  },
  haveSpecialNeeds: {
    visible: true,
  },
  createdAt: {
    visible: false,
  },
  updatedAt: {
    visible: false,
  },
  deletedAt: {
    visible: false,
  },
};

const fieldsCompany = {
  id: {
    visible: false,
  },
  cnpj: {
    visible: true,
  },
  companyName: {
    visible: true,
  },
  contact: {
    visible: true,
  },
  cep: {
    visible: true,
  },
  adress: {
    visible: true,
  },
  neighborhood: {
    visible: true,
  },
  city: {
    visible: true,
  },
  state: {
    visible: true,
  },
  number: {
    visible: true,
  },
  complement: {
    visible: true,
  },
  rhAnalystName: {
    visible: true,
  },
  supervisorName: {
    visible: true,
  },
  createdAt: {
    visible: false,
  },
  updatedAt: {
    visible: false,
  },
  deletedAt: {
    visible: false,
  },
};

const fieldsContracts = {
  id: {
    visible: false,
  },
  traineesId: {
    visible: false,
  },
  categoryId: {
    visible: false,
  },
  companyId: {
    visible: false,
  },
  startValidity: {
    visible: true,
  },
  endValidity: {
    visible: true,
  },
  status: {
    visible: true,
  },
  remuneration: {
    visible: true,
  },
  extra: {
    visible: true,
  },
  createdAt: {
    visible: false,
  },
  updatedAt: {
    visible: false,
  },
  deletedAt: {
    visible: false,
  },
};

export { fieldsCategory, fieldsTrainee, fieldsCompany, fieldsContracts };
